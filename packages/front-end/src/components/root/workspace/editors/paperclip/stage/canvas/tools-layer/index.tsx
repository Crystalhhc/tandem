/**
 * tools overlay like measurements, resizers, etc
 */

import "./index.scss";
import * as React from "react";
import { Dispatch } from "redux";
import {
  RootState,
  EditorWindow,
  getOpenFile,
  OpenFile,
  ToolType
} from "../../../../../../../../state";
import { NodeOverlaysTool } from "./document-overlay";
import { SelectionCanvasTool } from "./selection";
import { Frames } from "./frames-view.pc";
import { InsertLayer } from "./insert-layer";
import {
  getSyntheticDocumentByDependencyUri,
  SyntheticDocument,
  DependencyGraph,
  getSyntheticVisibleNodeRelativeBounds,
  Frame,
  getSyntheticVisibleNodeDocument,
  getSyntheticDocumentDependencyUri,
  getSyntheticInstancePath,
  getAllParentComponentInstance
} from "paperclip";
import {
  getNestedTreeNodeById,
  memoize,
  mergeBounds,
  Bounds,
  findNestedNode
} from "tandem-common";
import {
  InspectorNode,
  getInspectorSyntheticNode,
  InspectorTreeNodeName,
  getInspectorNodeOwnerInstance
} from "paperclip";

export type ToolsLayerComponentProps = {
  editorWindow: EditorWindow;
  zoom: number;
  toolType: ToolType;
  activeEditorUri: string;
  hoveringInspectorNodes: InspectorNode[];
  selectedInspectorNodes: InspectorNode[];
  sourceNodeInspector: InspectorNode;
  openFiles: OpenFile[];
  dispatch: Dispatch<any>;
  documents: SyntheticDocument[];
  frames: Frame[];
  graph: DependencyGraph;
};

export class ToolsLayerComponent extends React.PureComponent<
  ToolsLayerComponentProps
> {
  render() {
    const {
      editorWindow,
      hoveringInspectorNodes,
      selectedInspectorNodes,
      sourceNodeInspector,
      activeEditorUri,
      openFiles,
      zoom,
      dispatch,
      graph,
      documents,
      toolType,
      frames
    } = this.props;

    const canvas = getOpenFile(editorWindow.activeFilePath, openFiles).canvas;
    const insertInspectorNode = hoveringInspectorNodes[0];
    const insertInspectorNodeBounds =
      insertInspectorNode &&
      calcInspectorNodeBounds(
        insertInspectorNode,
        sourceNodeInspector,
        documents,
        frames,
        graph
      );
    return (
      <div className="m-tools-layer">
        <InsertLayer
          activeEditorUri={activeEditorUri}
          canvas={canvas}
          zoom={zoom}
          editorWindow={editorWindow}
          toolType={toolType}
          dispatch={dispatch}
          insertInspectorNode={insertInspectorNode}
          insertInspectorNodeBounds={insertInspectorNodeBounds}
        />
        <Frames
          canvas={canvas}
          frames={frames}
          documents={documents}
          graph={graph}
          translate={canvas.translate}
          dispatch={dispatch}
          editorWindow={editorWindow}
        />
        <NodeOverlaysTool
          frames={frames}
          documents={documents}
          hoveringInspectorNodes={hoveringInspectorNodes}
          selectedInspectorNodes={selectedInspectorNodes}
          graph={graph}
          zoom={zoom}
          dispatch={dispatch}
          document={getSyntheticDocumentByDependencyUri(
            editorWindow.activeFilePath,
            documents,
            graph
          )}
          editorWindow={editorWindow}
        />
        <SelectionCanvasTool
          canvas={canvas}
          rootInspectorNode={sourceNodeInspector}
          selectedInspectorNodes={selectedInspectorNodes}
          documents={documents}
          frames={frames}
          graph={graph}
          dispatch={dispatch}
          zoom={zoom}
          document={getSyntheticDocumentByDependencyUri(
            editorWindow.activeFilePath,
            documents,
            graph
          )}
          editorWindow={editorWindow}
        />
      </div>
    );
  }
}

const calcInspectorNodeBounds = memoize(
  (
    inspectorNode: InspectorNode,
    root: InspectorNode,
    documents: SyntheticDocument[],
    frames: Frame[],
    graph: DependencyGraph
  ): Bounds => {
    const assocSyntheticNode = getInspectorSyntheticNode(
      inspectorNode,
      documents
    );

    if (assocSyntheticNode) {
      return getSyntheticVisibleNodeRelativeBounds(
        assocSyntheticNode,
        frames,
        graph
      );
    }

    let assocInspectorNode: InspectorNode;

    if (inspectorNode.name === InspectorTreeNodeName.CONTENT) {
      const instance = getInspectorNodeOwnerInstance(inspectorNode, root);

      // find the slot
      assocInspectorNode = findNestedNode(
        instance,
        (child: InspectorNode) =>
          child.assocSourceNodeId === inspectorNode.assocSourceNodeId &&
          child.name === InspectorTreeNodeName.SOURCE_REP
      );
    } else {
      assocInspectorNode = inspectorNode;
    }

    return mergeBounds(
      ...assocInspectorNode.children
        .map(child => {
          const assocChildSyntheticNode = getInspectorSyntheticNode(
            child,
            documents
          );
          return (
            assocChildSyntheticNode &&
            getSyntheticVisibleNodeRelativeBounds(
              assocChildSyntheticNode,
              frames,
              graph
            )
          );
        })
        .filter(Boolean)
    );
  }
);
