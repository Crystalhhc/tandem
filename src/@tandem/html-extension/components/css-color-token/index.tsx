import * as React from "react";
import { TokenComponentFactoryDependency } from "@tandem/editor/dependencies";
import Token from "@tandem/editor/components/text-editor/models/token";

import { CSSTokenTypes } from "@tandem/html-extension/tokenizers";

export class ColorTokenComponent extends React.Component<{ token: Token }, any> {
  render() {
    return <span style={{ backgroundColor: this.props.token.value, color: "white", borderRadius: 1 }}>
      { this.props.token.value }
    </span>;
  }
}

export const cssColorTokenComponentFactoryDependency = new TokenComponentFactoryDependency(CSSTokenTypes.COLOR, ColorTokenComponent);