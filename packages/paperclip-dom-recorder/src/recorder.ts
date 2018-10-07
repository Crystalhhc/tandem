import {
  PCNode,
  PCModule,
  createPCModule,
  updatePCNodeMetadata,
  PCVisibleNodeMetadataKey,
  PCSourceTagNames,
  PCElement,
  createPCTextNode,
  createPCElement,
  PCBaseElementChild,
  PCVisibleNode
} from "paperclip";
import { appendChildNode } from "tandem-common";

const FRAME_WIDTH = 1440;
const FRAME_HEIGHT = 900;
const MAX_LABEL_LENGTH = 10;

const TEXT_STYLE_NAMES = [
  "color",
  "font-family",
  "font-size",
  "font-style",
  "font-variant",
  "font-weight",
  "font",
  "text-align",
  "text-indent",
  "text-transform",
  "word-spacing"
];

const BLACKLIST_ATTRIBUTES = {
  style: true,
  class: true,
  id: true,
  autofocus: true
};

const FRAME_PADDING = 50;

const BLACKLIST_TAG_NAMES = {
  style: true,
  script: true,
  link: true
};

const LOG_PREFIX = "[Paperclip DOM Recorder] ";

export class PCDOMRecorder {
  private _target: HTMLElement = document.body;
  private _domObserver: MutationObserver;
  private _snapshotRoot: PCModule = createPCModule();

  public start() {
    this.stop();
    console.log(LOG_PREFIX + "running");
    this.takeSnapshot();
    this._domObserver = new MutationObserver(this.onDOMChanges);
    this._domObserver.observe(this._target, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }

  public stop() {
    if (this._domObserver) {
      console.log(LOG_PREFIX + "stopped");
      this._domObserver.disconnect();
      this._domObserver = undefined;
    }
  }

  public print() {
    console.log(JSON.stringify(this._snapshotRoot, null, 2));
  }

  public copy() {
    window["copy"](JSON.stringify(this._snapshotRoot, null, 2));
    console.log(
      LOG_PREFIX +
        "%cCopied module content to clipboard. You can now paste to a *.pc file: %cpbpaste > my-module.pc",
      "font-weight: bold;",
      "color: maroon; font-weight: bold;"
    );
  }

  private onDOMChanges = () => {
    this.takeSnapshot();
  };

  public takeSnapshot() {
    this._snapshotRoot = addDOMSnapshot(this._target, this._snapshotRoot);
    console.log(LOG_PREFIX + "Added snapshot");
  }
}

const addDOMSnapshot = (node: HTMLElement, root: PCModule): PCModule => {
  const existingSnapshots = root.children.filter(
    child => child.name === PCSourceTagNames.ELEMENT
  );
  const lastSnapshot = existingSnapshots[existingSnapshots.length - 1];
  const lastSnapshotRight =
    (lastSnapshot &&
      lastSnapshot.metadata[PCVisibleNodeMetadataKey.BOUNDS].right +
        FRAME_PADDING) ||
    0;

  // 1 convert DOM to PC & append to root
  let newSnapshot = convertDOMToPC(node) as PCElement;

  newSnapshot = {
    ...newSnapshot,
    label: `Snapshot ${existingSnapshots.length + 1}`
  };

  // move snapshot to right of previous frame
  newSnapshot = updatePCNodeMetadata(
    {
      [PCVisibleNodeMetadataKey.BOUNDS]: {
        left: lastSnapshotRight,
        right: lastSnapshotRight + FRAME_WIDTH,
        top: 0,
        bottom: FRAME_HEIGHT
      }
    },
    newSnapshot
  );

  newSnapshot = moveFontStylesToTextNodes(newSnapshot);

  root = appendChildNode(newSnapshot, root);

  // 2 collect typography styles
  // 3 collect colors

  return root;
};

const convertDOMChildrenToPC = (node: HTMLElement): PCBaseElementChild[] => {
  return Array.prototype.map
    .call(node.childNodes, child => convertDOMToPC(child))
    .filter(Boolean);
};

const convertDOMToPC = (node: Node): PCNode => {
  switch (node.nodeType) {
    case Node.ELEMENT_NODE: {
      const element = node as HTMLElement;
      const attributes = getElementAttributes(element);
      const children = convertDOMChildrenToPC(element);
      let tagName = element.tagName.toLowerCase();
      if (BLACKLIST_TAG_NAMES[tagName]) {
        return null;
      }
      if (tagName === "body") {
        tagName = "div";
      }
      let pcElement = createPCElement(
        tagName,
        computeStyle(element),
        attributes,
        children,
        tagName
      );
      return pcElement;
    }
    case Node.TEXT_NODE: {
      const text = node as Text;
      const nodeValue = String(text.nodeValue);
      if (/^[\s\n\t]+$/.test(nodeValue)) {
        return null;
      }
      let pcTextNode = createPCTextNode(nodeValue, trimLabel(nodeValue));
      return pcTextNode;
    }
    case Node.COMMENT_NODE: {
      return null;
    }
    default: {
      console.warn(`Unknown DOM node type ${node.nodeType}`);
    }
  }
  return null;
};

const trimLabel = (label: string) => {
  return label.length > MAX_LABEL_LENGTH ? label.substr(0, 10) + "..." : label;
};

const computeStyle = (element: HTMLElement) => {
  const computedStyle = {};

  for (let i = 0, { length } = document.styleSheets; i < length; i++) {
    Object.assign(
      computedStyle,
      computeGroupingRule(element, document.styleSheets[i] as CSSStyleSheet)
    );
  }

  if (element.hasAttribute("style")) {
    Object.assign(computedStyle, parseStyle(element.getAttribute("style")));
  }

  return computedStyle;
};

const computeGroupingRule = (
  element: HTMLElement,
  group: CSSGroupingRule | CSSStyleSheet
) => {
  const computedStyle = {};

  const matches = element.matches || element.webkitMatchesSelector;
  try {
    for (let i = 0, { length } = group.cssRules; i < length; i++) {
      const rule = group.cssRules[i];
      if (rule.type === CSSRule.STYLE_RULE) {
        if (matches.call(element, (rule as CSSStyleRule).selectorText)) {
          Object.assign(
            computedStyle,
            parseStyle((rule as CSSStyleRule).cssText.match(/{(.*?)}/)[1])
          );
        }
      } else if (
        rule.type === CSSRule.MEDIA_RULE &&
        window.matchMedia((rule as CSSMediaRule).conditionText)
      ) {
        Object.assign(
          computedStyle,
          computeGroupingRule(element, rule as CSSMediaRule)
        );
      }
    }
  } catch (e) {
    console.error(e);
  }

  return computedStyle;
};

const moveFontStylesToTextNodes = <TNode extends PCVisibleNode>(
  node: TNode,
  currentTextStyle: any = {}
) => {
  if (node.name === PCSourceTagNames.TEXT) {
    if (Object.keys(currentTextStyle).length) {
      return {
        ...(node as any),
        style: currentTextStyle
      };
    }
  } else {
    const textStyles = { ...currentTextStyle, ...getTextStyles(node.style) };
    return {
      ...(node as any),
      style: removeTextStyles(node.style),
      children: node.children.map((child: PCVisibleNode) => {
        return moveFontStylesToTextNodes(child, textStyles);
      })
    };
  }

  return node;
};

const getElementAttributes = (element: HTMLElement) => {
  const attributes = {};
  for (let i = 0, { length } = element.attributes; i < length; i++) {
    const attr = element.attributes[i];
    const name = attr.name.toLowerCase();
    if (BLACKLIST_ATTRIBUTES[name]) {
      continue;
    }
    attributes[name] = attr.value;
  }
  return attributes;
};

const parseStyle = (value: string) => {
  return value.split(/\s*;\s*/g).reduce((style, part) => {
    const [key, value] = part.split(/\s*:\s*/);
    if (!key || !value) {
      return style;
    }
    return {
      ...style,
      [key.trim()]: value.trim()
    };
  }, {});
};

const cssDeclarationToObject = (decl: CSSStyleDeclaration) => {
  const style = {};
  for (let i = 0, { length } = decl; i < length; i++) {
    const key = decl[i];
    style[key] = decl[key];
  }

  return style;
};

const getTextStyles = (style: any) => {
  const textStyle = {};
  for (const key in style) {
    if (TEXT_STYLE_NAMES.indexOf(key) !== -1) {
      textStyle[key] = style[key];
    }
  }

  return textStyle;
};

const removeTextStyles = (style: any) => {
  const localizedStyle = {};
  for (const key in style) {
    if (TEXT_STYLE_NAMES.indexOf(key) === -1) {
      localizedStyle[key] = style[key];
    }
  }

  return localizedStyle;
};

const pickDOMStyles = (
  unfilteredStyle: any,
  filter?: (property: string, value: string) => boolean
) => {
  const style = {};
  for (const property in unfilteredStyle) {
    const value = unfilteredStyle[property];
    if (!filter || filter(property, value)) {
      style[property] = value;
    }
  }
  return style;
};