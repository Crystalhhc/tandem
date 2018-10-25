import { init } from "./index";
import { createRootInspectorNode } from "paperclip";

init({
  mount: document.getElementById("application"),
  hoveringSyntheticNodeIds: [],
  editorWindows: [],
  customChrome: false,
  selectedSyntheticNodeIds: [],
  hoveringInspectorNodeIds: [],
  selectedFileNodeIds: [],
  sourceNodeInspector: createRootInspectorNode(),
  sourceNodeInspectorMap: {},
  selectedInspectorNodeIds: [],
  history: {
    index: 0,
    items: []
  },
  openFiles: [],
  frames: [],
  documents: [],
  graph: {},
  fileCache: {},
  selectedComponentId: null
});
