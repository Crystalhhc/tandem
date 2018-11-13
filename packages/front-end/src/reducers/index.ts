// behold the ~~blob~~

import { Action } from "redux";
import * as path from "path";
import {
  CanvasToolArtboardTitleClicked,
  NEW_FILE_ADDED,
  CANVAS_TOOL_ARTBOARD_TITLE_CLICKED,
  CanvasToolOverlayMouseMoved,
  PROJECT_DIRECTORY_LOADED,
  ProjectDirectoryLoaded,
  FILE_NAVIGATOR_ITEM_CLICKED,
  FileNavigatorItemClicked,
  CANVAS_WHEEL,
  CANVAS_MOUSE_MOVED,
  CANVAS_MOUNTED,
  CANVAS_MOUSE_CLICKED,
  CanvasToolOverlayClicked,
  RESIZER_MOUSE_DOWN,
  ResizerMouseDown,
  VariantClicked,
  ResizerMoved,
  RESIZER_MOVED,
  RESIZER_PATH_MOUSE_STOPPED_MOVING,
  RESIZER_STOPPED_MOVING,
  ResizerPathStoppedMoving,
  RESIZER_PATH_MOUSE_MOVED,
  ResizerPathMoved,
  SHORTCUT_ESCAPE_KEY_DOWN,
  INSERT_TOOL_FINISHED,
  InsertToolFinished,
  SHORTCUT_DELETE_KEY_DOWN,
  CANVAS_TOOL_WINDOW_BACKGROUND_CLICKED,
  SYNTHETIC_NODES_PASTED,
  SyntheticVisibleNodesPasted,
  FILE_NAVIGATOR_ITEM_DOUBLE_CLICKED,
  OPEN_FILE_ITEM_CLICKED,
  OPEN_FILE_ITEM_CLOSE_CLICKED,
  OpenFilesItemClick,
  SAVED_FILE,
  SavedFile,
  SAVED_ALL_FILES,
  RAW_CSS_TEXT_CHANGED,
  RawCSSTextChanged,
  FILE_NAVIGATOR_TOGGLE_DIRECTORY_CLICKED,
  TreeLayerMouseOver,
  FILE_NAVIGATOR_NEW_FILE_CLICKED,
  FILE_NAVIGATOR_NEW_DIRECTORY_CLICKED,
  NewFileAdded,
  FILE_NAVIGATOR_DROPPED_ITEM,
  FileNavigatorDroppedItem,
  SHORTCUT_UNDO_KEY_DOWN,
  SHORTCUT_REDO_KEY_DOWN,
  TEXT_VALUE_CHANGED,
  TextValueChanged,
  ElementTypeChanged,
  SHORTCUT_QUICK_SEARCH_KEY_DOWN,
  QUICK_SEARCH_ITEM_CLICKED,
  QuickSearchItemClicked,
  QUICK_SEARCH_BACKGROUND_CLICK,
  COMPONENT_VARIANT_NAME_CLICKED,
  NEW_STYLE_VARIANT_CONFIRMED,
  ComponentVariantNameClicked,
  EDITOR_TAB_CLICKED,
  EditorTabClicked,
  CanvasWheel,
  SHORTCUT_ZOOM_IN_KEY_DOWN,
  SHORTCUT_ZOOM_OUT_KEY_DOWN,
  CanvasMounted,
  CANVAS_DROPPED_ITEM,
  CanvasDroppedItem,
  CANVAS_DRAGGED_OVER,
  SHORTCUT_CONVERT_TO_COMPONENT_KEY_DOWN,
  SHORTCUT_T_KEY_DOWN,
  SHORTCUT_R_KEY_DOWN,
  CanvasDraggingOver,
  ELEMENT_TYPE_CHANGED,
  CSS_PROPERTY_CHANGED,
  CSS_PROPERTY_CHANGE_COMPLETED,
  ATTRIBUTE_CHANGED,
  CSSPropertyChanged,
  FRAME_MODE_CHANGE_COMPLETE,
  FrameModeChangeComplete,
  TOOLBAR_TOOL_CLICKED,
  ToolbarToolClicked,
  EDITOR_TAB_CLOSE_BUTTON_CLICKED,
  STYLE_VARIANT_DROPDOWN_CHANGED,
  NEW_STYLE_VARIANT_BUTTON_CLICKED,
  StyleVariantDropdownChanged,
  REMOVE_STYLE_BUTTON_CLICKED,
  SHORTCUT_SELECT_NEXT_TAB,
  SHORTCUT_SELECT_PREVIOUS_TAB,
  SHORTCUT_CLOSE_CURRENT_TAB,
  COMPONENT_PICKER_BACKGROUND_CLICK,
  ComponentPickerItemClick,
  COMPONENT_PICKER_ITEM_CLICK,
  SHORTCUT_C_KEY_DOWN,
  ADD_VARIANT_BUTTON_CLICKED,
  VARIANT_DEFAULT_SWITCH_CLICKED,
  VariantDefaultSwitchClicked,
  VariantLabelChanged,
  VARIANT_LABEL_CHANGED,
  REMOVE_VARIANT_BUTTON_CLICKED,
  COMPONENT_INSTANCE_VARIANT_TOGGLED,
  INSTANCE_VARIANT_RESET_CLICKED,
  SHORTCUT_TOGGLE_SIDEBAR,
  INHERIT_PANE_ADD_BUTTON_CLICK,
  INHERIT_PANE_REMOVE_BUTTON_CLICK,
  InheritPaneItemClick,
  INHERIT_ITEM_COMPONENT_TYPE_CHANGE_COMPLETE,
  InheritItemComponentTypeChangeComplete,
  INHERIT_ITEM_CLICK,
  InheritItemClick,
  CANVAS_MOUSE_DOUBLE_CLICKED,
  CanvasMouseMoved,
  ComponentControllerItemClicked,
  COMPONENT_CONTROLLER_PICKED,
  ComponentControllerPicked,
  SHORTCUT_WRAP_IN_SLOT_KEY_DOWN,
  REMOVE_COMPONENT_CONTROLLER_BUTTON_CLICKED,
  SOURCE_INSPECTOR_LAYER_CLICKED,
  InspectorLayerEvent,
  SOURCE_INSPECTOR_LAYER_ARROW_CLICKED,
  SOURCE_INSPECTOR_LAYER_LABEL_CHANGED,
  InspectorLayerLabelChanged,
  SOURCE_INSPECTOR_LAYER_DROPPED,
  SourceInspectorLayerDropped,
  RemoveComponentControllerButtonClicked,
  InheritPaneRemoveButtonClick,
  PromptConfirmed,
  PROMPT_CANCEL_BUTTON_CLICKED,
  EDIT_VARIANT_NAME_CONFIRMED,
  EDIT_VARIANT_NAME_BUTTON_CLICKED,
  ADD_VARIABLE_BUTTON_CLICKED,
  VARIABLE_LABEL_CHANGE_COMPLETED,
  VARIABLE_VALUE_CHANGED,
  VariablePropertyChanged,
  AddVariableButtonClicked,
  VARIABLE_VALUE_CHANGE_COMPLETED,
  PROJECT_INFO_LOADED,
  ProjectInfoLoaded,
  PROJECT_DIRECTORY_DIR_LOADED,
  ProjectDirectoryDirLoaded,
  FILE_NAVIGATOR_BASENAME_CHANGED,
  FileNavigatorBasenameChanged,
  QUICK_SEARCH_RESULT_LOADED,
  QuickSearchFilterChanged,
  QUICK_SEARCH_FILTER_CHANGED,
  QuickSearchResultLoaded,
  FRAME_BOUNDS_CHANGE_COMPLETED,
  FRAME_BOUNDS_CHANGED,
  FrameBoundsChanged,
  ACTIVE_EDITOR_URI_DIRS_LOADED,
  FILE_ITEM_RIGHT_CLICKED,
  FileItemRightClicked,
  FILE_ITEM_CONTEXT_MENU_RENAME_CLICKED,
  FileItemContextMenuAction,
  FILE_NAVIGATOR_ITEM_BLURRED,
  SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TO_COMPONENT_CLICKED,
  SyntheticNodeContextMenuAction,
  SYNTHETIC_NODE_CONTEXT_MENU_WRAP_IN_SLOT_CLICKED,
  SYNTHETIC_NODE_CONTEXT_MENU_SELECT_PARENT_CLICKED,
  SYNTHETIC_NODE_CONTEXT_MENU_SELECT_SOURCE_NODE_CLICKED,
  SYNTHETIC_NODE_CONTEXT_MENU_REMOVE_CLICKED,
  CSS_RESET_PROPERTY_OPTION_CLICKED,
  ResetPropertyOptionClicked,
  EXPORT_NAME_CHANGED,
  ExportNameChanged,
  SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TO_STYLE_MIXIN_CLICKED,
  QUICK_SEARCH_RESULT_ITEM_SPLIT_BUTTON_CLICKED,
  QuickSearchResultItemSplitButtonClicked,
  EditorTabContextMenuOpenInBottomTabOptionClicked,
  EDITOR_TAB_CONTEXT_MENU_OPEN_IN_BOTTOM_OPTION_CLICKED,
  OPEN_CONTROLLER_BUTTON_CLICKED,
  IMAGE_SOURCE_INPUT_CHANGED,
  ImageSourceInputChanged,
  IMAGE_PATH_PICKED,
  ImagePathPicked,
  CSS_INHERITED_FROM_LABEL_CLICKED,
  CSSInheritedFromLabelClicked,
  SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TEXT_STYLES_TO_MIXIN_CLICKED,
  SYNTHETIC_NODE_CONTEXT_MENU_RENAME_CLICKED,
  PC_LAYER_DOUBLE_CLICKED,
  PCLayerRightClicked,
  SYNTHETIC_NODE_CONTEXT_MENU_SHOW_IN_CANVAS_CLICKED,
  CANVAS_TEXT_EDIT_CHANGE_COMPLETE,
  CanvasTextEditChangeComplete
} from "../actions";
import {
  queueOpenFile,
  fsSandboxReducer,
  isImageUri,
  hasFileCacheItem,
  FS_SANDBOX_ITEM_LOADED,
  FSSandboxItemLoaded,
  isSvgUri,
  FILE_CHANGED,
  FileChanged,
  FileChangedEventType
} from "fsbox";
import {
  RootState,
  updateRootState,
  updateOpenFileCanvas,
  getCanvasMouseTargetNodeId,
  setSelectedInspectorNodes,
  getSelectionBounds,
  getBoundedSelection,
  ToolType,
  setTool,
  persistRootState,
  getOpenFile,
  openFile,
  removeTemporaryOpenFiles,
  setNextOpenFile,
  updateOpenFile,
  deselectRootProjectFiles,
  setHoveringSyntheticVisibleNodeIds,
  setSelectedFileNodeIds,
  undo,
  redo,
  getEditorWithActiveFileUri,
  getActiveEditorWindow,
  getEditorWindowWithFileUri,
  updateEditorWindow,
  centerEditorCanvas,
  getCanvasMouseTargetNodeIdFromPoint,
  isSelectionMovable,
  selectInsertedSyntheticVisibleNodes,
  RegisteredComponent,
  closeFile,
  queueSelectInsertedSyntheticVisibleNodes,
  shiftActiveEditorTab,
  confirm,
  ConfirmType,
  openSyntheticVisibleNodeOriginFile,
  updateSourceInspectorNode,
  getInsertableSourceNodeScope,
  getInsertableSourceNodeFromSyntheticNode,
  getCanvasMouseTargetInspectorNode,
  setHoveringInspectorNodes,
  refreshModuleInspectorNodes,
  teeHistory,
  pruneOpenFiles,
  QuickSearchResultType,
  getGlobalFileUri,
  setRootStateFileNodeExpanded,
  centerEditorCanvasOrLater,
  EditMode
} from "../state";
import {
  PCSourceTagNames,
  PCVisibleNode,
  paperclipReducer,
  SyntheticElement,
  createPCElement,
  createPCTextNode,
  getSyntheticVisibleNodeRelativeBounds,
  getSyntheticVisibleNodeDocument,
  getSyntheticSourceNode,
  getSyntheticNodeById,
  SyntheticVisibleNode,
  getPCNodeDependency,
  updateSyntheticVisibleNodePosition,
  updateSyntheticVisibleNodeBounds,
  persistInsertNode,
  persistChangeLabel,
  persistSyntheticVisibleNodeBounds,
  persistRemoveSyntheticVisibleNode,
  getSyntheticNodeSourceDependency,
  persistConvertNodeToComponent,
  persistMoveSyntheticVisibleNode,
  persistAppendPCClips,
  persistChangeSyntheticTextNodeValue,
  persistRawCSSText,
  SyntheticTextNode,
  updatePCNodeMetadata,
  PCVisibleNodeMetadataKey,
  getSyntheticDocumentByDependencyUri,
  getFrameSyntheticNode,
  SyntheticDocument,
  PC_DEPENDENCY_GRAPH_LOADED,
  PCDependencyGraphLoaded,
  SYNTHETIC_DOCUMENT_NODE_NAME,
  DEFAULT_FRAME_BOUNDS,
  isSyntheticVisibleNode,
  persistChangeElementType,
  persistAddComponentController,
  persistRemoveComponentController,
  PC_RUNTIME_EVALUATED,
  persistCSSProperty,
  persistAttribute,
  getPCNode,
  persistSyntheticNodeMetadata,
  createPCComponentInstance,
  getSyntheticVisibleNodeFrame,
  persistAddVariant,
  persistUpdateVariable,
  persistUpdateVariant,
  persistRemoveVariant,
  SyntheticInstanceElement,
  persistToggleInstanceVariant,
  persistRemoveVariantOverride,
  getPCVariants,
  canRemoveSyntheticVisibleNode,
  persistStyleMixin,
  persistStyleMixinComponentId,
  isPaperclipUri,
  syntheticNodeIsInShadow,
  getSyntheticContentNode,
  PCOverridablePropertyName,
  getSyntheticInstancePath,
  PCComponentInstanceElement,
  persistWrapInSlot,
  getPCNodeModule,
  getPCNodeContentNode,
  PCNode,
  isPCPlug,
  createPCPlug,
  persistRemovePCNode,
  getInstanceSlotContent,
  SyntheticNode,
  PCSlot,
  DependencyGraph,
  canRemovePCNode,
  isVisibleNode,
  persistSyntheticVisibleNodeStyle,
  removeSyntheticVisibleNode,
  isSyntheticContentNode,
  getSyntheticDocumentDependencyUri,
  getAllParentComponentInstance,
  PCComponent,
  extendsComponent,
  getGlobalVariables,
  persistAddVariable,
  PCVariableType,
  createRootInspectorNode,
  xmlToPCNode,
  PCElement,
  getInspectorInstanceShadowContentNode,
  getInspectorInstanceShadow,
  updateAlts,
  getDerrivedPCLabel,
  persistConvertSyntheticVisibleNodeStyleToMixin,
  getSyntheticSourceUri,
  inspectorNodeInInstanceOfComponent,
  getSyntheticVisibleNodeComputedBounds,
  getInspectorNodeByAssocId
} from "paperclip";
import {
  roundBounds,
  scaleInnerBounds,
  moveBounds,
  keepBoundsAspectRatio,
  keepBoundsCenter,
  Bounds,
  shiftBounds,
  isDirectory,
  updateNestedNode,
  Directory,
  isFile,
  getParentTreeNode,
  appendChildNode,
  removeNestedTreeNode,
  boundsFromRect,
  centerTransformZoom,
  Translate,
  zoomBounds,
  TreeMoveOffset,
  shiftPoint,
  Point,
  zoomPoint,
  cloneTreeNode,
  FSItemTagNames,
  FSItem,
  getFileFromUri,
  createFile,
  createDirectory,
  sortFSItems,
  EMPTY_OBJECT,
  getNestedTreeNodeById,
  EMPTY_ARRAY,
  mergeFSItems,
  convertFlatFilesToNested2,
  stripProtocol,
  addProtocol,
  FILE_PROTOCOL,
  updateFSItemAlts,
  replaceNestedNode
} from "tandem-common";
import { clamp, last } from "lodash";
import {
  expandInspectorNode,
  collapseInspectorNode,
  getInspectorSyntheticNode,
  isInspectorNode,
  getInspectorSourceNode,
  InspectorTreeNodeName,
  InspectorNode,
  inspectorNodeInShadow,
  getSyntheticInspectorNode
} from "paperclip";
import { IframeHTMLAttributes } from "react";

const ZOOM_SENSITIVITY = process.platform === "win32" ? 2500 : 250;
const MIN_ZOOM = 0.02;
const MAX_ZOOM = 6400 / 100;

export const rootReducer = (state: RootState, action: Action): RootState => {
  state = fsSandboxReducer(state, action);
  state = paperclipReducer(state, action);
  state = canvasReducer(state, action);
  state = shortcutReducer(state, action);
  state = clipboardReducer(state, action);

  switch (action.type) {
    case PROJECT_DIRECTORY_LOADED: {
      const { directory } = action as ProjectDirectoryLoaded;
      return updateRootState(
        { projectDirectory: directory, ready: true },
        state
      );
    }
    case PROJECT_INFO_LOADED: {
      const { info: projectInfo } = action as ProjectInfoLoaded;

      state = updateRootState(
        {
          projectInfo,
          ready: true,
          openFiles: [],
          fileCache: {},
          openedMain: false,
          sourceNodeInspector: createRootInspectorNode(),
          projectDirectory: null,
          graph: {},
          documents: [],
          frames: [],
          editorWindows: []
        },
        state
      );

      return state;
    }
    case FILE_NAVIGATOR_ITEM_CLICKED: {
      const { node } = action as FileNavigatorItemClicked;
      const uri = node.uri;
      state = setSelectedFileNodeIds(state, node.id);
      state = setFileExpanded(node, true, state);

      if (!isDirectory(node)) {
        state = openFile(uri, true, false, state);
        return state;
      }

      return state;
    }
    case QUICK_SEARCH_ITEM_CLICKED: {
      const { item } = action as QuickSearchItemClicked;
      if (item.type === QuickSearchResultType.URI) {
        const uri = item.uri;
        state = openFile(uri, false, false, state);
        state = updateRootState({ showQuickSearch: false }, state);
      } else {
      }
      return state;
    }
    case QUICK_SEARCH_BACKGROUND_CLICK: {
      return (state = updateRootState({ showQuickSearch: false }, state));
    }
    case FILE_NAVIGATOR_TOGGLE_DIRECTORY_CLICKED: {
      const { node } = action as FileNavigatorItemClicked;
      state = setFileExpanded(node, !node.expanded, state);
      return state;
    }
    case PROJECT_DIRECTORY_DIR_LOADED: {
      const { items } = action as ProjectDirectoryDirLoaded;
      const { projectDirectory } = state;
      state = updateRootState(
        {
          projectDirectory: projectDirectory
            ? mergeFSItems(projectDirectory, ...items)
            : mergeFSItems(...items)
        },
        state
      );

      return state;
    }
    case ACTIVE_EDITOR_URI_DIRS_LOADED: {
      state = setRootStateFileNodeExpanded(
        getFileFromUri(state.activeEditorFilePath, state.projectDirectory).id,
        true,
        state
      );
      return state;
    }
    case FILE_CHANGED: {
      const { eventType, uri }: FileChanged = action as FileChanged;

      if (
        eventType === FileChangedEventType.ADD ||
        eventType === FileChangedEventType.ADD_DIR
      ) {
        const existing = getFileFromUri(uri, state.projectDirectory);
        if (existing) {
          return state;
        }

        if (eventType === FileChangedEventType.ADD_DIR) {
          state = updateRootState(
            {
              projectDirectory: mergeFSItems(
                createDirectory(uri),
                state.projectDirectory
              )
            },
            state
          );
        } else if (eventType === FileChangedEventType.ADD) {
          const file = createFile(uri);
          const projectDirectory = mergeFSItems(file, state.projectDirectory);
          state = updateRootState(
            {
              projectDirectory
            },
            state
          );
        }
      } else if (
        eventType === FileChangedEventType.UNLINK ||
        eventType === FileChangedEventType.UNLINK_DIR
      ) {
        const fsItem = getFileFromUri(uri, state.projectDirectory);

        let fileCache = state.fileCache;
        let graph = state.graph;

        // ick -- these files shouldn't be

        if (fileCache[uri]) {
          fileCache = { ...fileCache };
          delete fileCache[uri];
        }

        if (graph[uri]) {
          graph = { ...graph };
          delete graph[uri];
        }

        // TODO - check for renamed file
        state = updateRootState(
          {
            selectedFileNodeIds: [],
            fileCache,
            graph,
            projectDirectory: fsItem
              ? updateFSItemAlts(
                  removeNestedTreeNode(fsItem, state.projectDirectory)
                )
              : state.projectDirectory
          },
          state
        );

        state = refreshModuleInspectorNodes(state);
        state = pruneOpenFiles(state);
      }

      return state;
    }
    case FILE_NAVIGATOR_BASENAME_CHANGED: {
      const {
        item,
        basename
      }: FileNavigatorBasenameChanged = action as FileNavigatorBasenameChanged;

      const updatedItem = {
        ...item,
        uri: addProtocol(
          FILE_PROTOCOL,
          path.join(path.dirname(stripProtocol(item.uri)), basename)
        )
      };

      state = { ...state, editingBasenameUri: null };

      const existingItem = getFileFromUri(
        updatedItem.uri,
        state.projectDirectory
      );

      // directory expanded so we can safely dispatch alert here
      if (existingItem) {
        return confirm(
          `The name "${basename}" is already taken. Please choose a different name.`,
          ConfirmType.ERROR,
          state
        );
      }

      let projectDirectory = removeNestedTreeNode(item, state.projectDirectory);
      projectDirectory = mergeFSItems(updatedItem, projectDirectory);
      state = updateRootState({ projectDirectory }, state);

      // TODO - this also needs to work with directories
      const editorWindow = getEditorWindowWithFileUri(item.uri, state);
      if (editorWindow) {
        let graph = { ...state.graph };
        let fileCache = { ...state.fileCache };
        graph[updatedItem.uri] = graph[item.uri];
        fileCache[updatedItem.uri] = fileCache[item.uri];
        delete graph[item.uri];
        delete fileCache[item.uri];
        state = updateEditorWindow(
          {
            tabUris: editorWindow.tabUris.map(uri => {
              return item.uri === uri ? updatedItem.uri : uri;
            }),
            activeFilePath:
              editorWindow.activeFilePath === item.uri
                ? updatedItem.uri
                : editorWindow.activeFilePath
          },
          item.uri,
          state
        );
        state = updateRootState(
          {
            graph,
            fileCache,
            activeEditorFilePath:
              state.activeEditorFilePath === item.uri
                ? updatedItem.uri
                : state.activeEditorFilePath,
            openFiles: state.openFiles.map(openFile => ({
              ...openFile,
              uri: openFile.uri === item.uri ? updatedItem.uri : openFile.uri
            }))
          },
          state
        );
      }

      return state;
    }

    case QUICK_SEARCH_RESULT_LOADED: {
      const { matches } = action as QuickSearchResultLoaded;
      state = updateRootState(
        {
          quickSearch: {
            ...state.quickSearch,
            matches: [...state.quickSearch.matches, ...matches].sort((a, b) => {
              return a.label < b.label ? -1 : 1;
            })
          }
        },
        state
      );
      return state;
    }

    case QUICK_SEARCH_FILTER_CHANGED: {
      const { value } = action as QuickSearchFilterChanged;
      state = updateRootState(
        {
          quickSearch: {
            filter: value,
            matches: []
          }
        },
        state
      );
      return state;
    }

    case FILE_ITEM_CONTEXT_MENU_RENAME_CLICKED: {
      const {
        item: { uri }
      } = action as FileItemContextMenuAction;
      state = {
        ...state,
        editingBasenameUri: uri
      };
      return state;
    }

    case FILE_NAVIGATOR_ITEM_DOUBLE_CLICKED: {
      const {
        node: { uri }
      } = action as FileNavigatorItemClicked;
      state = {
        ...state,
        editingBasenameUri: uri
      };
      return state;
    }

    case FILE_NAVIGATOR_ITEM_BLURRED: {
      state = {
        ...state,
        editingBasenameUri: null
      };
      return state;
    }

    case CANVAS_MOUNTED: {
      const { fileUri, element } = action as CanvasMounted;
      if (!element) {
        return state;
      }

      state = updateEditorWindow(
        {
          container: element
        },
        fileUri,
        state
      );

      const selectedNode = state.selectedInspectorNodes[0];
      if (selectedNode) {
        const document = getSyntheticDocumentByDependencyUri(
          fileUri,
          state.documents,
          state.graph
        );
        if (getNestedTreeNodeById(selectedNode.id, document)) {
          return centerEditorCanvas(
            state,
            fileUri,
            getSelectionBounds(
              state.selectedInspectorNodes,
              state.documents,
              state.frames,
              state.graph
            )
          );
        }
      } else {
        return centerEditorCanvasOrLater(state, fileUri);
      }
    }

    case FILE_NAVIGATOR_DROPPED_ITEM: {
      const { node, targetNode } = action as FileNavigatorDroppedItem;
      const parent: Directory = getParentTreeNode(
        node.id,
        state.projectDirectory
      );
      const parentUri = parent.uri;
      const nodeUri = node.uri;
      state = updateRootState(
        {
          projectDirectory: updateNestedNode(
            parent,
            state.projectDirectory,
            parent => removeNestedTreeNode(node, parent)
          )
        },
        state
      );

      const targetDir: Directory =
        targetNode.name !== FSItemTagNames.FILE
          ? targetNode
          : getParentTreeNode(targetNode.id, state.projectDirectory);
      const targetUri = targetDir.uri;

      state = updateRootState(
        {
          projectDirectory: updateNestedNode(
            targetDir,
            state.projectDirectory,
            targetNode => {
              targetNode = appendChildNode(
                {
                  ...node,
                  uri: nodeUri.replace(parentUri, targetUri)
                } as FSItem,
                targetNode
              );

              targetNode = {
                ...targetNode,
                children: sortFSItems(targetNode.children as FSItem[])
              };

              return targetNode;
            }
          )
        },
        state
      );

      return state;
    }

    case NEW_FILE_ADDED: {
      const { uri, fileType } = action as NewFileAdded;
      const directory = getFileFromUri(
        path.dirname(uri),
        state.projectDirectory
      );

      state = updateRootState(
        {
          projectDirectory: updateFSItemAlts(
            updateNestedNode(directory, state.projectDirectory, dir => {
              return {
                ...dir,
                children: sortFSItems([
                  ...dir.children,
                  fileType === FSItemTagNames.FILE
                    ? createFile(uri)
                    : createDirectory(uri)
                ])
              };
            })
          )
        },
        state
      );

      if (fileType === FSItemTagNames.FILE && isPaperclipUri(uri)) {
        state = openFile(uri, false, false, state);
        state = {
          ...state,
          recenterUriAfterEvaluation: uri
        };
      }
      return state;
    }

    case FS_SANDBOX_ITEM_LOADED: {
      const { content, uri } = action as FSSandboxItemLoaded;

      if (state.queuedDndInfo) {
        const { item, point, editorUri } = state.queuedDndInfo;
        return handleLoadedDroppedItem(
          item,
          point,
          editorUri,
          { ...state, queuedDndInfo: null },
          content
        );
      }

      state = refreshModuleInspectorNodes(state);

      return state;
    }
    case OPEN_FILE_ITEM_CLICKED: {
      const { uri, sourceEvent } = action as OpenFilesItemClick;
      if (getEditorWithActiveFileUri(uri, state)) {
        return state;
      }
      state = setNextOpenFile(
        removeTemporaryOpenFiles(openFile(uri, false, false, state))
      );
      return state;
    }
    case SAVED_FILE: {
      const { uri } = action as SavedFile;
      return updateOpenFile({ newContent: null }, uri, state);
    }
    case SAVED_ALL_FILES: {
      return updateRootState(
        {
          openFiles: state.openFiles.map(openFile => ({
            ...openFile,
            newContent: null
          }))
        },
        state
      );
    }
    case COMPONENT_VARIANT_NAME_CLICKED: {
      const { name } = action as ComponentVariantNameClicked;
      state = updateRootState({ selectedComponentVariantName: name }, state);
      return state;
    }

    case SOURCE_INSPECTOR_LAYER_DROPPED: {
      const { source, target, offset } = action as SourceInspectorLayerDropped;

      if (!target || source.id === target.id) {
        return state;
      }

      const sourceNode = getInspectorSourceNode(
        source,
        state.sourceNodeInspector,
        state.graph
      );

      let targetNode: PCNode;
      let targetInspectorNode: InspectorNode;

      if (target.name === InspectorTreeNodeName.CONTENT) {
        const parent = (targetInspectorNode = getParentTreeNode(
          target.id,
          state.sourceNodeInspector
        ));
        let parentSourceNode = getInspectorSourceNode(
          parent,
          state.sourceNodeInspector,
          state.graph
        ) as PCComponentInstanceElement;
        let contentNode = getInstanceSlotContent(
          target.sourceNodeId,
          parentSourceNode
        );
        if (!contentNode) {
          state = persistInsertNode(
            createPCPlug(target.sourceNodeId),
            parentSourceNode,
            TreeMoveOffset.APPEND,
            state
          );
          parentSourceNode = getInspectorSourceNode(
            parent,
            state.sourceNodeInspector,
            state.graph
          ) as PCComponentInstanceElement;
          contentNode = getInstanceSlotContent(
            target.sourceNodeId,
            parentSourceNode
          );
        }

        targetNode = contentNode;
      } else {
        targetInspectorNode = target;
        targetNode = getInspectorSourceNode(
          target,
          state.sourceNodeInspector,
          state.graph
        );
      }

      const oldState = state;

      state = persistRootState(
        state =>
          persistMoveSyntheticVisibleNode(
            sourceNode,
            targetNode,
            offset,
            state
          ),
        state
      );

      // this does _NOT_ work for inspector nodes like plugs & slots that
      // have no assoc synthetic node.
      // const targetSyntheticNode = getInspectorSyntheticNode(
      //   targetInspectorNode,
      //   state.documents,
      //   state.graph
      // );

      // const document = getSyntheticVisibleNodeDocument(
      //   targetSyntheticNode.id,
      //   state.documents
      // );
      // const mutatedTarget =
      //   offset === TreeMoveOffset.APPEND || offset === TreeMoveOffset.PREPEND
      //     ? targetSyntheticNode
      //     : getParentTreeNode(targetSyntheticNode.id, document);

      // state = queueSelectInsertedSyntheticVisibleNodes(
      //   oldState,
      //   state,
      //   mutatedTarget
      // );
      return state;
    }
    case SOURCE_INSPECTOR_LAYER_CLICKED: {
      const { node } = action as InspectorLayerEvent;

      state = selectInspectorNode(node, state);

      return state;
    }
    case SOURCE_INSPECTOR_LAYER_ARROW_CLICKED: {
      const { node } = action as InspectorLayerEvent;
      state = updateSourceInspectorNode(state, sourceNodeInspector => {
        return node.expanded
          ? collapseInspectorNode(node, sourceNodeInspector)
          : expandInspectorNode(node, sourceNodeInspector);
      });

      return state;
    }
    case SOURCE_INSPECTOR_LAYER_LABEL_CHANGED: {
      const { node, label } = action as InspectorLayerLabelChanged;
      state = { ...state, renameInspectorNodeId: null };
      state = persistRootState(
        browser =>
          persistChangeLabel(
            label,
            getInspectorSourceNode(
              node,
              state.sourceNodeInspector,
              browser.graph
            ),
            browser
          ),
        state
      );

      return state;
    }
    case OPEN_FILE_ITEM_CLOSE_CLICKED: {
      // TODO - flag confirm remove state
      const { uri } = action as OpenFilesItemClick;
      return closeFile(uri, state);
    }
    case EDITOR_TAB_CLICKED: {
      const { uri } = action as EditorTabClicked;
      return openFile(uri, false, false, state);
    }
    case EDITOR_TAB_CLOSE_BUTTON_CLICKED: {
      const { uri } = action as EditorTabClicked;
      return closeFile(uri, state);
    }
    case EDITOR_TAB_CONTEXT_MENU_OPEN_IN_BOTTOM_OPTION_CLICKED: {
      const {
        uri
      } = action as EditorTabContextMenuOpenInBottomTabOptionClicked;
      state = openFile(uri, false, true, state);
      return state;
    }
    case PC_DEPENDENCY_GRAPH_LOADED: {
      state = centerEditorCanvasOrLater(state, state.activeEditorFilePath);
      return state;
    }
  }
  return state;
};

export const canvasReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case RESIZER_MOVED: {
      const { point: newPoint } = action as ResizerMoved;
      state = updateEditorWindow(
        {
          movingOrResizing: true
        },
        state.activeEditorFilePath,
        state
      );

      if (
        isSelectionMovable(
          state.selectedInspectorNodes,
          state.sourceNodeInspector,
          state.graph
        )
      ) {
        const selectionBounds = getSelectionBounds(
          state.selectedInspectorNodes,
          state.documents,
          state.frames,
          state.graph
        );

        let movedBounds = moveBounds(selectionBounds, newPoint);

        for (const node of state.selectedInspectorNodes) {
          const syntheticNode = getInspectorSyntheticNode(
            node,
            state.documents
          );
          const itemBounds = getSyntheticVisibleNodeRelativeBounds(
            syntheticNode,
            state.frames,
            state.graph
          );
          const newBounds = roundBounds(
            scaleInnerBounds(itemBounds, selectionBounds, movedBounds)
          );

          state = updateSyntheticVisibleNodePosition(
            newBounds,
            syntheticNode,
            state
          );
        }
      }

      return state;
    }
    case FRAME_BOUNDS_CHANGED: {
      const { newBounds } = action as FrameBoundsChanged;
      state = persistSyntheticNodeMetadata(
        {
          [PCVisibleNodeMetadataKey.BOUNDS]: newBounds
        },
        getInspectorSyntheticNode(
          state.selectedInspectorNodes[0],
          state.documents
        ),
        state
      );
      return state;
    }
    case FRAME_BOUNDS_CHANGE_COMPLETED: {
      const { newBounds } = action as FrameBoundsChanged;
      state = persistRootState(state => {
        state = persistSyntheticNodeMetadata(
          {
            [PCVisibleNodeMetadataKey.BOUNDS]: newBounds
          },
          getInspectorSyntheticNode(
            state.selectedInspectorNodes[0],
            state.documents
          ),
          state
        );
        return state;
      }, state);
      return state;
    }

    case COMPONENT_PICKER_BACKGROUND_CLICK: {
      return setTool(null, state);
    }

    case COMPONENT_PICKER_ITEM_CLICK: {
      const { component } = action as ComponentPickerItemClick;
      return {
        ...state,
        selectedComponentId: component.id
      };
    }

    case TOOLBAR_TOOL_CLICKED: {
      const { toolType } = action as ToolbarToolClicked;
      if (toolType === ToolType.POINTER) {
        state = setTool(null, state);
      } else {
        state = setTool(toolType, state);
      }
      return state;
    }

    // DEPRECATED
    case ADD_VARIANT_BUTTON_CLICKED: {
      const node = state.selectedInspectorNodes[0];
      const syntheticNode = getInspectorSyntheticNode(node, state.documents);
      const frame = getSyntheticVisibleNodeFrame(syntheticNode, state.frames);
      const contentNode = getSyntheticNodeById(
        frame.syntheticContentNodeId,
        state.documents
      );
      state = persistRootState(
        state => persistAddVariant(null, contentNode, state),
        state
      );
      state = updateRootState(
        {
          selectedVariant: last(
            getPCVariants(getSyntheticSourceNode(
              contentNode,
              state.graph
            ) as PCVisibleNode)
          )
        },
        state
      );
      return state;
    }

    // DEPRECATED
    case REMOVE_VARIANT_BUTTON_CLICKED: {
      const variant = state.selectedVariant;
      state = persistRootState(
        state => persistRemoveVariant(variant, state),
        state
      );
      state = updateRootState({ selectedVariant: null }, state);
      return state;
    }

    case VARIANT_DEFAULT_SWITCH_CLICKED: {
      const { variant } = action as VariantDefaultSwitchClicked;
      state = persistRootState(
        state =>
          persistUpdateVariant(
            { isDefault: !variant.isDefault },
            variant,
            state
          ),
        state
      );
      return state;
    }

    case VARIANT_LABEL_CHANGED: {
      const { variant, newLabel } = action as VariantLabelChanged;
      state = persistRootState(
        state => persistUpdateVariant({ label: newLabel }, variant, state),
        state
      );
      return state;
    }

    case COMPONENT_INSTANCE_VARIANT_TOGGLED: {
      const { variant } = action as VariantClicked;
      const inspectorNode = state.selectedInspectorNodes[0];
      state = persistRootState(
        state =>
          persistToggleInstanceVariant(
            inspectorNode,
            variant.id,
            state.selectedVariant,
            state
          ),
        state
      );
      return state;
    }

    case INSTANCE_VARIANT_RESET_CLICKED: {
      const { variant } = action as VariantClicked;
      const element = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      ) as SyntheticInstanceElement;
      state = persistRootState(
        state =>
          persistRemoveVariantOverride(
            element,
            variant.id,
            state.selectedVariant,
            state
          ),
        state
      );
      return state;
    }

    case RESIZER_STOPPED_MOVING: {
      if (
        isSelectionMovable(
          state.selectedInspectorNodes,
          state.sourceNodeInspector,
          state.graph
        )
      ) {
        state = persistRootState(state => {
          return state.selectedInspectorNodes.reduce((state, node) => {
            return persistSyntheticVisibleNodeBounds(
              getInspectorSyntheticNode(node, state.documents),
              state
            );
          }, state);
        }, state);
      }

      state = updateEditorWindow(
        {
          movingOrResizing: false
        },
        state.activeEditorFilePath,
        state
      );
      return state;
    }

    case CANVAS_WHEEL: {
      const {
        metaKey,
        ctrlKey,
        deltaX,
        deltaY,
        canvasHeight,
        canvasWidth
      } = action as CanvasWheel;
      const editorWindow = getActiveEditorWindow(state);
      const openFile = getOpenFile(
        editorWindow.activeFilePath,
        state.openFiles
      );

      let translate = openFile.canvas.translate;

      if (metaKey || ctrlKey) {
        translate = centerTransformZoom(
          translate,
          boundsFromRect({
            width: canvasWidth,
            height: canvasHeight
          }),
          clamp(
            translate.zoom + (translate.zoom * deltaY) / ZOOM_SENSITIVITY,
            MIN_ZOOM,
            MAX_ZOOM
          ),
          editorWindow.mousePosition
        );
      } else {
        translate = {
          ...translate,
          left: translate.left - deltaX,
          top: translate.top - deltaY
        };
      }

      state = updateEditorWindow(
        { smooth: false },
        editorWindow.activeFilePath,
        state
      );

      state = updateOpenFileCanvas(
        {
          translate
        },
        editorWindow.activeFilePath,
        state
      );

      return state;
    }

    case CANVAS_DROPPED_ITEM: {
      let { item, point, editorUri } = action as CanvasDroppedItem;

      if (isFile(item)) {
        return queueOpenFile(item.uri, {
          ...(state as any),
          queuedDndInfo: action
        });
      } else {
        return handleLoadedDroppedItem(item, point, editorUri, state);
      }
    }

    case SHORTCUT_ZOOM_IN_KEY_DOWN: {
      const editor = getActiveEditorWindow(state);
      const openFile = getOpenFile(editor.activeFilePath, state.openFiles);
      state = setCanvasZoom(
        normalizeZoom(openFile.canvas.translate.zoom) * 2,
        false,
        editor.activeFilePath,
        state
      );
      return state;
    }

    case SHORTCUT_TOGGLE_SIDEBAR: {
      state = {
        ...state,
        showSidebar: state.showSidebar !== false ? false : true
      };

      return state;
    }

    case SHORTCUT_ZOOM_OUT_KEY_DOWN: {
      const editor = getActiveEditorWindow(state);
      const openFile = getOpenFile(editor.activeFilePath, state.openFiles);
      state = setCanvasZoom(
        normalizeZoom(openFile.canvas.translate.zoom) / 2,
        false,
        editor.activeFilePath,
        state
      );
      return state;
    }

    case SHORTCUT_SELECT_NEXT_TAB: {
      return shiftActiveEditorTab(1, state);
    }
    case SHORTCUT_SELECT_PREVIOUS_TAB: {
      return shiftActiveEditorTab(-1, state);
    }
    case SHORTCUT_CLOSE_CURRENT_TAB: {
      return closeFile(state.activeEditorFilePath, state);
    }

    case CANVAS_MOUSE_MOVED: {
      const {
        editorWindow: { activeFilePath },
        sourceEvent: { pageX, pageY }
      } = action as CanvasMouseMoved;
      state = updateEditorWindow(
        { mousePosition: { left: pageX, top: pageY } },
        state.activeEditorFilePath,
        state
      );

      let targetNodeId: string;
      let targetInspectorNode: InspectorNode;
      state = updateRootState({ activeEditorFilePath: activeFilePath }, state);
      const editorWindow = getEditorWindowWithFileUri(activeFilePath, state);

      if (!editorWindow.movingOrResizing) {
        if (state.toolType != null) {
          targetInspectorNode = getCanvasMouseTargetInspectorNode(
            state,
            action as CanvasToolOverlayMouseMoved,
            getInsertFilter(state)
          );
          state = setHoveringInspectorNodes(
            state,
            targetInspectorNode ? [targetInspectorNode] : EMPTY_ARRAY
          );
        } else {
          targetNodeId = getCanvasMouseTargetNodeId(
            state,
            (action as CanvasToolOverlayMouseMoved).sourceEvent
          );
          state = setHoveringSyntheticVisibleNodeIds(
            state,
            targetNodeId ? [targetNodeId] : EMPTY_ARRAY
          );
        }
      }

      return state;
    }

    case CANVAS_DRAGGED_OVER: {
      const { item, offset } = action as CanvasDraggingOver;

      state = updateEditorWindow(
        { mousePosition: offset },
        state.activeEditorFilePath,
        state
      );

      // remove selection so that hovering state is visible
      state = setSelectedInspectorNodes(state);

      // TODO - in the future, we'll probably want to be able to highlight hovered nodes as the user is moving an element around to indicate where
      // they can drop the element.

      let targetNodeId: string;

      targetNodeId = getCanvasMouseTargetNodeIdFromPoint(
        state,
        offset,
        getDragFilter(item, state)
      );

      state = setHoveringSyntheticVisibleNodeIds(
        state,
        targetNodeId ? [targetNodeId] : EMPTY_ARRAY
      );

      return state;
    }

    case CANVAS_MOUSE_CLICKED: {
      return handleCanvasMouseClicked(
        state,
        action as CanvasToolOverlayClicked
      );
    }
    case CANVAS_MOUSE_DOUBLE_CLICKED: {
      // looped in since there may be nested shadows

      const targetNodeId = getCanvasMouseTargetNodeId(
        state,
        (action as CanvasToolOverlayMouseMoved).sourceEvent
      );

      if (!targetNodeId) {
        return state;
      }

      const syntheticNode = getSyntheticNodeById(targetNodeId, state.documents);
      const sourceNode = getSyntheticSourceNode(syntheticNode, state.graph);

      if (
        sourceNode.name === PCSourceTagNames.COMPONENT_INSTANCE ||
        sourceNode.name === PCSourceTagNames.COMPONENT
      ) {
        const document = getSyntheticVisibleNodeDocument(
          syntheticNode.id,
          state.documents
        );
        const inspectorNode = getSyntheticInspectorNode(
          syntheticNode,
          document,
          state.sourceNodeInspector,
          state.graph
        );

        let currentInstance = inspectorNode;

        // break past nested shadows
        while (currentInstance) {
          const inspectorShadowNode = getInspectorInstanceShadow(
            currentInstance
          );
          if (!inspectorShadowNode) {
            break;
          }
          state = {
            ...state,
            selectedInspectorNodes: [inspectorShadowNode]
          };

          state = handleCanvasMouseClicked(
            state,
            action as CanvasToolOverlayClicked
          );

          if (
            state.selectedInspectorNodes.length &&
            state.selectedInspectorNodes[0].id !== inspectorNode.id
          ) {
            break;
          }

          currentInstance = inspectorShadowNode;
        }
      } else if (sourceNode.name === PCSourceTagNames.TEXT) {
        state = { ...state, editMode: EditMode.SECONDARY };
      }

      return state;
    }

    case ADD_VARIABLE_BUTTON_CLICKED: {
      const { variableType: type } = action as AddVariableButtonClicked;
      const globalFileUri = getGlobalFileUri(state.projectInfo);
      const globalDependency = state.graph[globalFileUri];
      state = persistRootState(state => {
        state = persistAddVariable(
          null,
          type,
          "",
          globalDependency.content,
          state
        );
        return state;
      }, state);
      return state;
    }

    case VARIABLE_LABEL_CHANGE_COMPLETED: {
      const { variable, value: label } = action as VariablePropertyChanged;
      state = persistRootState(state => {
        if (!label) {
          return persistRemovePCNode(variable, state);
        }
        state = persistUpdateVariable({ label }, variable, state);
        return state;
      }, state);
      return state;
    }

    case VARIABLE_VALUE_CHANGED: {
      const { variable, value } = action as VariablePropertyChanged;
      state = teeHistory(state);
      state = persistUpdateVariable({ value }, variable, state);
      return state;
    }

    case VARIABLE_VALUE_CHANGE_COMPLETED: {
      const { variable, value } = action as VariablePropertyChanged;
      state = persistRootState(state => {
        state = persistUpdateVariable({ value }, variable, state);
        return state;
      }, state);
      return state;
    }

    case RESIZER_PATH_MOUSE_MOVED: {
      state = updateEditorWindow(
        {
          movingOrResizing: true
        },
        state.activeEditorFilePath,
        state
      );

      // TODO - possibly use BoundsStruct instead of Bounds since there are cases where bounds prop doesn't exist
      const newBounds = getResizeActionBounds(action as ResizerPathMoved);
      for (const node of getBoundedSelection(
        state.selectedInspectorNodes,
        state.documents,
        state.frames,
        state.graph
      )) {
        state = updateSyntheticVisibleNodeBounds(
          getNewSyntheticVisibleNodeBounds(
            newBounds,
            getInspectorSyntheticNode(node, state.documents),
            state
          ),
          getInspectorSyntheticNode(node, state.documents),
          state
        );
      }

      return state;
    }
    case RESIZER_PATH_MOUSE_STOPPED_MOVING: {
      state = updateEditorWindow(
        {
          movingOrResizing: false
        },
        state.activeEditorFilePath,
        state
      );

      // TODO - possibly use BoundsStruct instead of Bounds since there are cases where bounds prop doesn't exist
      const newBounds = getResizeActionBounds(
        action as ResizerPathStoppedMoving
      );

      state = persistRootState(state => {
        return state.selectedInspectorNodes.reduce(
          (state, node) =>
            persistSyntheticVisibleNodeBounds(
              getInspectorSyntheticNode(node, state.documents),
              state
            ),
          state
        );
      }, state);

      return state;
    }
    case RAW_CSS_TEXT_CHANGED: {
      const { value: cssText } = action as RawCSSTextChanged;
      state = persistRootState(state => {
        return state.selectedInspectorNodes.reduce(
          (state, node) =>
            persistRawCSSText(
              cssText,
              getInspectorSyntheticNode(node, state.documents),
              state.selectedVariant,
              state
            ),
          state
        );
      }, state);
      return state;
    }

    case QUICK_SEARCH_RESULT_ITEM_SPLIT_BUTTON_CLICKED: {
      const { item } = action as QuickSearchResultItemSplitButtonClicked;
      if (item.type === QuickSearchResultType.URI) {
        state = openFile(item.uri, false, true, state);
      }
      return state;
    }

    case FRAME_MODE_CHANGE_COMPLETE: {
      const { frame, mode } = action as FrameModeChangeComplete;
      state = persistRootState(state => {
        return persistSyntheticNodeMetadata(
          { mode },
          getSyntheticNodeById(frame.syntheticContentNodeId, state.documents),
          state
        );
      }, state);
      return state;
    }
    case CSS_PROPERTY_CHANGED: {
      const { name, value } = action as CSSPropertyChanged;
      state = teeHistory(state);
      state = { ...state, editMode: EditMode.PRIMARY };
      return state.selectedInspectorNodes.reduce(
        (state, node) =>
          persistCSSProperty(
            name,
            value,
            getInspectorSyntheticNode(node, state.documents),
            state.selectedVariant,
            state
          ),
        state
      );
    }
    case CSS_RESET_PROPERTY_OPTION_CLICKED: {
      const { property } = action as ResetPropertyOptionClicked;

      state = persistRootState(state => {
        return persistCSSProperty(
          property,
          undefined,
          getInspectorSyntheticNode(
            state.selectedInspectorNodes[0],
            state.documents
          ),
          state.selectedVariant,
          state,
          false
        );
      }, state);
      return state;
    }

    case CSS_PROPERTY_CHANGE_COMPLETED: {
      const { name, value } = action as CSSPropertyChanged;
      state = persistRootState(state => {
        return state.selectedInspectorNodes.reduce(
          (state, node) =>
            persistCSSProperty(
              name,
              value,
              getInspectorSyntheticNode(node, state.documents),
              state.selectedVariant,
              state
            ),
          state
        );
      }, state);
      return state;
    }
    case ATTRIBUTE_CHANGED: {
      const { name, value } = action as CSSPropertyChanged;
      state = persistRootState(() => {
        return state.selectedInspectorNodes.reduce(
          (state, inspectorNode) =>
            persistAttribute(
              name,
              value,
              getInspectorSyntheticNode(
                inspectorNode,
                state.documents
              ) as SyntheticElement,
              state
            ),
          state
        );
      }, state);
      return state;
    }

    case INHERIT_PANE_REMOVE_BUTTON_CLICK: {
      const { selectedInspectorNodes } = state;
      const { componentId } = action as InheritPaneRemoveButtonClick;
      const node = getInspectorSyntheticNode(
        selectedInspectorNodes[0],
        state.documents
      );
      state = persistRootState(state => {
        return persistStyleMixin(
          { [componentId]: undefined },
          node,
          state.selectedVariant,
          state
        );
      }, state);
      return state;
    }

    case INHERIT_PANE_ADD_BUTTON_CLICK: {
      const { selectedInspectorNodes } = state;
      const node = getInspectorSyntheticNode(
        selectedInspectorNodes[0],
        state.documents
      );
      const sourceNode = getSyntheticSourceNode(
        node,
        state.graph
      ) as PCVisibleNode;

      state = persistRootState(state => {
        // undefined so that nothing is selected in dropdown.
        state = persistStyleMixin(
          {
            [Date.now()]: {
              priority: Object.keys(sourceNode.styleMixins || EMPTY_OBJECT)
                .length
            }
          },
          node,
          state.selectedVariant,
          state
        );
        return state;
      }, state);

      return state;
    }

    case INHERIT_ITEM_COMPONENT_TYPE_CHANGE_COMPLETE: {
      const {
        oldComponentId,
        newComponentId
      } = action as InheritItemComponentTypeChangeComplete;
      const { selectedInspectorNodes } = state;
      const node = getInspectorSyntheticNode(
        selectedInspectorNodes[0],
        state.documents
      );
      state = persistRootState(state => {
        state = persistStyleMixinComponentId(
          oldComponentId,
          newComponentId,
          node,
          state.selectedVariant,
          state
        );
        return state;
      }, state);
      return state;
    }

    case PC_RUNTIME_EVALUATED: {
      const queuedScopeSelect = state.queuedScopeSelect;
      const projectInfo = state.projectInfo;

      if (projectInfo && projectInfo.config.mainFilePath && !state.openedMain) {
        const fullMainFilePath = path.join(
          path.dirname(projectInfo.path),
          projectInfo.config.mainFilePath
        );

        const mainUri = addProtocol(FILE_PROTOCOL, fullMainFilePath);

        state = {
          ...state,
          openedMain: true,

          // dumb fix -- PC_RUNTIME_EVALUATED is dispatched a few times so we'll
          // leverave this functionality to center the canvas when it happens next. 90% sure
          // this is a bug, but 🤷🏻‍♂️
          recenterUriAfterEvaluation: mainUri
        };

        state = openFile(mainUri, false, false, state);
      }

      if (queuedScopeSelect) {
        state = selectInsertedSyntheticVisibleNodes(
          queuedScopeSelect.previousState,
          state,
          queuedScopeSelect.scope
        );
      }

      if (
        state.recenterUriAfterEvaluation &&
        getSyntheticDocumentByDependencyUri(
          state.recenterUriAfterEvaluation,
          state.documents,
          state.graph
        )
      ) {
        state = centerEditorCanvas(state, state.recenterUriAfterEvaluation);
        state = { ...state, recenterUriAfterEvaluation: null };
      }

      return updateRootState({ queuedScopeSelect: null }, state);
    }

    case CANVAS_TEXT_EDIT_CHANGE_COMPLETE:
    case TEXT_VALUE_CHANGED: {
      const { value } = action as
        | TextValueChanged
        | CanvasTextEditChangeComplete;
      state = persistRootState(state => {
        state = persistChangeSyntheticTextNodeValue(
          value,
          state.selectedInspectorNodes[0],
          state
        );

        return state;
      }, state);
      state = { ...state, editMode: EditMode.PRIMARY };
      return state;
    }

    case STYLE_VARIANT_DROPDOWN_CHANGED: {
      const { variant, component } = action as StyleVariantDropdownChanged;
      const variants = getPCVariants(component);

      state = persistRootState(state => {
        for (const evariant of variants) {
          state = persistUpdateVariant(
            { isDefault: evariant.id === (variant && variant.id) },
            evariant,
            state
          );
        }

        return state;
      }, state);

      state = updateRootState(
        {
          selectedVariant: variant
        },
        state
      );

      return state;
    }

    case EDIT_VARIANT_NAME_BUTTON_CLICKED: {
      return updateRootState(
        {
          prompt: {
            label: "Style Name",
            defaultValue: state.selectedVariant.label,
            okActionType: EDIT_VARIANT_NAME_CONFIRMED
          }
        },
        state
      );
    }

    case EDIT_VARIANT_NAME_CONFIRMED: {
      const { inputValue: label } = action as PromptConfirmed;
      const variant = state.selectedVariant;
      state = persistRootState(
        state => persistUpdateVariant({ label }, variant, state),
        state
      );
      state = updateRootState({ prompt: null }, state);
      return state;
    }

    case NEW_STYLE_VARIANT_BUTTON_CLICKED: {
      return updateRootState(
        {
          prompt: {
            label: "Style Name",
            okActionType: NEW_STYLE_VARIANT_CONFIRMED
          }
        },
        state
      );
    }

    case PROMPT_CANCEL_BUTTON_CLICKED: {
      return updateRootState({ prompt: null }, state);
    }

    case NEW_STYLE_VARIANT_CONFIRMED: {
      const { inputValue } = action as PromptConfirmed;

      const node = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      const frame = getSyntheticVisibleNodeFrame(node, state.frames);
      const contentNode = getSyntheticNodeById(
        frame.syntheticContentNodeId,
        state.documents
      );
      state = persistRootState(
        state => persistAddVariant(inputValue, contentNode, state),
        state
      );
      state = updateRootState(
        {
          prompt: null,
          selectedVariant: last(
            getPCVariants(getSyntheticSourceNode(
              contentNode,
              state.graph
            ) as PCVisibleNode)
          )
        },
        state
      );

      return state;
    }

    case REMOVE_STYLE_BUTTON_CLICKED: {
      const variant = state.selectedVariant;
      state = persistRootState(
        state => persistRemoveVariant(variant, state),
        state
      );
      state = updateRootState({ selectedVariant: null }, state);
      return state;
    }

    case ELEMENT_TYPE_CHANGED: {
      const { value } = action as ElementTypeChanged;
      state = persistRootState(state => {
        const selectedNode = getInspectorSyntheticNode(
          state.selectedInspectorNodes[0],
          state.documents
        ) as SyntheticElement;
        const sourceNode = getSyntheticSourceNode(
          selectedNode,
          state.graph
        ) as PCElement;
        return persistChangeElementType(value, sourceNode, state);
      }, state);
      return state;
    }
    case CANVAS_TOOL_ARTBOARD_TITLE_CLICKED: {
      const { frame, sourceEvent } = action as CanvasToolArtboardTitleClicked;
      sourceEvent.stopPropagation();
      const contentNode = getFrameSyntheticNode(frame, state.documents);
      state = updateEditorWindow(
        { smooth: false },
        getPCNodeDependency(
          getSyntheticSourceNode(contentNode, state.graph).id,
          state.graph
        ).uri,
        state
      );
      return handleArtboardSelectionFromAction(
        state,
        getSyntheticInspectorNode(
          contentNode,
          getSyntheticVisibleNodeDocument(contentNode.id, state.documents),
          state.sourceNodeInspector,
          state.graph
        )
      );
    }
    case CANVAS_TOOL_WINDOW_BACKGROUND_CLICKED: {
      return setSelectedInspectorNodes(state);
    }
    case COMPONENT_CONTROLLER_PICKED: {
      const { filePath } = action as ComponentControllerPicked;
      const node = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      state = persistRootState(
        state => persistAddComponentController(filePath, node, state),
        state
      );
      return state;
    }
    case OPEN_CONTROLLER_BUTTON_CLICKED: {
      const { relativePath } = action as ComponentControllerItemClicked;
      const node = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      const sourceNodeUri = getSyntheticSourceUri(node, state.graph);
      const controllerPath = path.join(
        path.dirname(stripProtocol(sourceNodeUri)),
        relativePath
      );

      state = openFile(
        addProtocol(FILE_PROTOCOL, controllerPath),
        false,
        false,
        state
      );

      return state;
    }
    case REMOVE_COMPONENT_CONTROLLER_BUTTON_CLICKED: {
      const { relativePath } = action as RemoveComponentControllerButtonClicked;
      const node = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      state = persistRemoveComponentController(relativePath, node, state);
      return state;
    }
    case INSERT_TOOL_FINISHED: {
      let { point, fileUri } = action as InsertToolFinished;
      const toolType = state.toolType;

      switch (toolType) {
        case ToolType.COMPONENT: {
          const componentId = state.selectedComponentId;
          state = { ...state, selectedComponentId: null };
          const component = getPCNode(componentId, state.graph) as PCComponent;

          return persistInsertNodeFromPoint(
            createPCComponentInstance(
              componentId,
              null,
              null,
              null,
              component.metadata,
              getDerrivedPCLabel(component, state.graph)
            ),
            fileUri,
            point,
            state
          );
        }
        case ToolType.ELEMENT: {
          return persistInsertNodeFromPoint(
            createPCElement(
              "div",
              { "box-sizing": "border-box", display: "block" },
              null,
              null,
              "Element"
            ),
            fileUri,
            point,
            state
          );
        }

        case ToolType.TEXT: {
          state = persistInsertNodeFromPoint(
            createPCTextNode("Double click to edit", "Text"),
            fileUri,
            point,
            state
          );

          state = {
            ...state,
            editMode: EditMode.SECONDARY
          };

          return state;
        }
      }
    }
  }

  return state;
};

const isJavaScriptFile = (file: string) => /(ts|js)x?$/.test(file);

const INSERT_ARTBOARD_WIDTH = 100;
const INSERT_ARTBOARD_HEIGHT = 100;
const INSERT_TEXT_ARTBOARD_HEIGHT = 30;

const handleCanvasMouseClicked = (
  state: RootState,
  action: CanvasToolOverlayClicked
) => {
  if (state.toolType != null) {
    return state;
  }

  state = deselectRootProjectFiles(state);
  const { sourceEvent } = action;

  if (/textarea|input/i.test((sourceEvent.target as Element).nodeName)) {
    return state;
  }

  // alt key opens up a new link
  const altKey = sourceEvent.altKey;

  const editorWindow = getActiveEditorWindow(state);
  const openFile = getOpenFile(editorWindow.activeFilePath, state.openFiles);

  // do not allow selection while window is panning (scrolling)
  if (openFile.canvas.panning || editorWindow.movingOrResizing) {
    return state;
  }

  const targetNodeId = getCanvasMouseTargetNodeId(
    state,
    (action as CanvasToolOverlayMouseMoved).sourceEvent
  );

  // meta key
  if (targetNodeId && sourceEvent.metaKey) {
    state = openSyntheticVisibleNodeOriginFile(
      getSyntheticNodeById(targetNodeId, state.documents),
      state
    );
    return state;
  }

  if (!targetNodeId) {
    return setSelectedInspectorNodes(state);
  }

  if (!altKey) {
    const inspectorNode = getSyntheticInspectorNode(
      getSyntheticNodeById(targetNodeId, state.documents),
      getSyntheticVisibleNodeDocument(targetNodeId, state.documents),
      state.sourceNodeInspector,
      state.graph
    );
    state = handleArtboardSelectionFromAction(state, inspectorNode);
    state = updateEditorWindow(
      {
        secondarySelection: false
      },
      editorWindow.activeFilePath,
      state
    );

    return state;
  }
  return state;
};

const persistInsertNodeFromPoint = (
  newNode: PCVisibleNode,
  fileUri: string,
  point: Point,
  state: RootState
) => {
  const oldState = state;
  const targetNodeId = getCanvasMouseTargetNodeIdFromPoint(
    state,
    point,
    getInsertFilter(state)
  );

  let targetNode: SyntheticVisibleNode | SyntheticDocument =
    targetNodeId && getSyntheticNodeById(targetNodeId, state.documents);

  let insertableSourceNode: PCNode =
    targetNodeId &&
    getInsertableSourceNodeFromSyntheticNode(
      targetNode,
      getSyntheticVisibleNodeDocument(targetNodeId, state.documents),
      state.graph
    );

  if (!targetNode) {
    const newPoint = shiftPoint(
      normalizePoint(
        getOpenFile(fileUri, state.openFiles).canvas.translate,
        point
      ),
      {
        left: -(INSERT_ARTBOARD_WIDTH / 2),
        top: -(INSERT_ARTBOARD_HEIGHT / 2)
      }
    );

    let bounds = {
      left: 0,
      top: 0,
      right: INSERT_ARTBOARD_WIDTH,
      bottom: INSERT_ARTBOARD_HEIGHT,
      ...(newNode.metadata[PCVisibleNodeMetadataKey.BOUNDS] || {})
    };

    if (newNode.name === PCSourceTagNames.TEXT) {
      bounds = {
        ...bounds,
        bottom: INSERT_TEXT_ARTBOARD_HEIGHT
      };
    }

    bounds = moveBounds(bounds, newPoint);

    newNode = updatePCNodeMetadata(
      {
        [PCVisibleNodeMetadataKey.BOUNDS]: bounds
      },
      newNode
    );

    insertableSourceNode = state.graph[fileUri].content;

    targetNode = getSyntheticDocumentByDependencyUri(
      fileUri,
      state.documents,
      state.graph
    );
  }

  // check for circular references
  if (newNode.name === PCSourceTagNames.COMPONENT_INSTANCE) {
    const targetDocument = getSyntheticVisibleNodeDocument(
      targetNode.id,
      state.documents
    );
    const targetInspectorNode = getSyntheticInspectorNode(
      targetNode,
      targetDocument,
      state.sourceNodeInspector,
      state.graph
    );
    if (
      inspectorNodeInInstanceOfComponent(
        newNode.is,
        targetInspectorNode,
        state.sourceNodeInspector
      )
    ) {
      return confirm(
        `Cannot insert component in itself`,
        ConfirmType.ERROR,
        state
      );
    }
  }

  state = persistRootState(state => {
    if (insertableSourceNode.name === PCSourceTagNames.SLOT) {
      state = maybeCreateContent(targetNode, insertableSourceNode, state);
      insertableSourceNode = getInstanceSlotContent(
        insertableSourceNode.id,
        getSyntheticRootInstanceSourceNode(targetNode, state)
      );
    }

    return persistInsertNode(
      newNode,
      insertableSourceNode,
      TreeMoveOffset.APPEND,
      state
    );
  }, state);

  state = setTool(null, state);

  const scope = getInsertableSourceNodeScope(
    insertableSourceNode,
    targetNode as SyntheticVisibleNode,
    state.sourceNodeInspector,
    getSyntheticVisibleNodeDocument(targetNode.id, state.documents),
    state.graph
  );

  state = queueSelectInsertedSyntheticVisibleNodes(oldState, state, scope);

  return state;
};

const maybeCreateContent = <TState extends RootState>(
  target: SyntheticNode,
  slot: PCSlot,
  state: TState
) => {
  const instanceSourceNode = getSyntheticRootInstanceSourceNode(target, state);
  const contentNode = getInstanceSlotContent(slot.id, instanceSourceNode);
  if (contentNode) {
    return state;
  }

  state = persistInsertNode(
    createPCPlug(slot.id),
    instanceSourceNode,
    TreeMoveOffset.APPEND,
    state
  );

  return state;
};

const getSyntheticRootInstanceSourceNode = (
  target: SyntheticNode,
  state: RootState
) => {
  const document = getSyntheticVisibleNodeDocument(target.id, state.documents);
  const instanceId = getSyntheticInstancePath(target, document, state.graph)[0];
  const instanceSourceNode = getPCNode(
    instanceId,
    state.graph
  ) as PCComponentInstanceElement;
  return instanceSourceNode;
};

const getDragFilter = (item: any, state: RootState) => {
  // TODO - filter should check if is slot
  let filter = getInsertFilter(state);

  if (isFile(item) && isJavaScriptFile(item.uri)) {
    filter = (node: SyntheticVisibleNode) => {
      const sourceNode = getSyntheticSourceNode(node, state.graph);
      return (
        isSyntheticContentNode(node, state.graph) &&
        sourceNode.name === PCSourceTagNames.COMPONENT
      );
    };
  } else if (isInspectorNode(item)) {
    const oldFilter = filter;
    filter = (node: SyntheticVisibleNode) => {
      return (
        oldFilter(node) &&
        getSyntheticNodeSourceDependency(node, state.graph).uri ===
          state.activeEditorFilePath
      );
    };
    const sourceNode = getPCNode(item.sourceNodeId, state.graph);
    if (sourceNode.name === PCSourceTagNames.COMPONENT) {
      return () => false;
    }
  }

  return filter;
};
const getInsertFilter = (state: RootState) => {
  let filter = (node: SyntheticVisibleNode) => {
    const document = getSyntheticVisibleNodeDocument(node.id, state.documents);
    const sourceNode = getSyntheticSourceNode(node, state.graph);

    return (
      sourceNode.name !== PCSourceTagNames.STYLE_MIXIN &&
      Boolean(
        getInsertableSourceNodeFromSyntheticNode(node, document, state.graph)
      )
    );
  };

  return filter;
};

const setFileExpanded = (node: FSItem, value: boolean, state: RootState) => {
  state = updateRootState(
    {
      projectDirectory: updateFSItemAlts(
        updateNestedNode(node, state.projectDirectory, (node: FSItem) => ({
          ...node,
          expanded: value
        }))
      )
    },
    state
  );
  return state;
};

const getNewSyntheticVisibleNodeBounds = (
  newBounds: Bounds,
  node: SyntheticVisibleNode,
  state: RootState
) => {
  const currentBounds = getSelectionBounds(
    state.selectedInspectorNodes,
    state.documents,
    state.frames,
    state.graph
  );
  const innerBounds = getSyntheticVisibleNodeRelativeBounds(
    node,
    state.frames,
    state.graph
  );
  return scaleInnerBounds(innerBounds, currentBounds, newBounds);
};

const handleLoadedDroppedItem = (
  item,
  point: Point,
  editorUri: string,
  state: RootState,
  content?: Buffer
) => {
  const targetNodeId = getCanvasMouseTargetNodeIdFromPoint(
    state,
    point,
    getDragFilter(item, state)
  );

  let sourceNode: PCVisibleNode;

  if (isFile(item)) {
    let src = path.relative(path.dirname(editorUri), item.uri);

    if (src.charAt(0) !== ".") {
      src = "./" + src;
    }

    if (isImageUri(item.uri)) {
      sourceNode = createPCElement(
        "img",
        {},
        {
          src
        }
      );
      if (isSvgUri(item.uri)) {
        const source = content.toString("utf8");
        sourceNode = xmlToPCNode(source);
      }
    } else if (isJavaScriptFile(item.uri)) {
      return persistRootState(state => {
        return persistAddComponentController(
          (item as FSItem).uri,
          getSyntheticNodeById(targetNodeId, state.documents),
          state
        );
      }, state);
    }
  } else if (isInspectorNode(item)) {
    sourceNode = getSyntheticSourceNode(
      getInspectorSyntheticNode(item, state.documents),
      state.graph
    ) as PCVisibleNode;
  } else {
    sourceNode = cloneTreeNode((item as RegisteredComponent).template);
  }

  if (!sourceNode) {
    console.error(`Unrecognized dropped item.`);
    return state;
  }

  const targetId = getCanvasMouseTargetNodeIdFromPoint(
    state,
    point,
    node => node.name !== PCSourceTagNames.TEXT
  );
  let target: SyntheticVisibleNode | SyntheticDocument = targetId
    ? getSyntheticNodeById(targetId, state.documents)
    : getSyntheticDocumentByDependencyUri(
        editorUri,
        state.documents,
        state.graph
      );

  if (target.name === SYNTHETIC_DOCUMENT_NODE_NAME) {
    sourceNode = updatePCNodeMetadata(
      {
        [PCVisibleNodeMetadataKey.BOUNDS]: moveBounds(
          sourceNode.metadata[PCVisibleNodeMetadataKey.BOUNDS] ||
            DEFAULT_FRAME_BOUNDS,
          point
        )
      },
      sourceNode
    );
  }

  return persistRootState(
    browser =>
      persistInsertNode(
        sourceNode,
        getSyntheticSourceNode(target, state.graph),
        TreeMoveOffset.APPEND,
        browser
      ),
    state
  );
};

const getResizeActionBounds = (action: ResizerPathMoved | ResizerMoved) => {
  let {
    anchor,
    originalBounds,
    newBounds,
    sourceEvent
  } = action as ResizerPathMoved;

  const keepAspectRatio = sourceEvent.shiftKey;
  const keepCenter = sourceEvent.altKey;

  if (keepCenter) {
    // TODO - need to test. this might not work
    newBounds = keepBoundsCenter(newBounds, originalBounds, anchor);
  }

  if (keepAspectRatio) {
    newBounds = keepBoundsAspectRatio(
      newBounds,
      originalBounds,
      anchor,
      keepCenter ? { left: 0.5, top: 0.5 } : anchor
    );
  }

  return newBounds;
};

const isInputSelected = (state: RootState, doc: Document = document) => {
  // ick -- this needs to be moved into a saga

  if (doc.activeElement.tagName === "IFRAME") {
    return isInputSelected(
      state,
      (doc.activeElement as HTMLIFrameElement).contentDocument
    );
  }
  return (
    doc.activeElement &&
    /textarea|input|button/i.test(doc.activeElement.tagName)
  );
};

const shortcutReducer = (state: RootState, action: Action): RootState => {
  switch (action.type) {
    case SHORTCUT_QUICK_SEARCH_KEY_DOWN: {
      return isInputSelected(state)
        ? state
        : updateRootState(
            {
              showQuickSearch: !state.showQuickSearch
            },
            state
          );
    }
    case SHORTCUT_UNDO_KEY_DOWN: {
      return undo(state);
    }
    case SHORTCUT_REDO_KEY_DOWN: {
      return redo(state);
    }
    case SHORTCUT_T_KEY_DOWN: {
      return isInputSelected(state) ? state : setTool(ToolType.TEXT, state);
    }
    case SHORTCUT_R_KEY_DOWN: {
      return isInputSelected(state) ? state : setTool(ToolType.ELEMENT, state);
    }
    case SHORTCUT_C_KEY_DOWN: {
      return isInputSelected(state)
        ? state
        : setTool(ToolType.COMPONENT, state);
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_SELECT_PARENT_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      const document = getSyntheticVisibleNodeDocument(
        item.id,
        state.documents
      );
      const inspectorNode = getSyntheticInspectorNode(
        item,
        document,
        state.sourceNodeInspector,
        state.graph
      );
      const parent = getParentTreeNode(
        inspectorNode.id,
        state.sourceNodeInspector
      );
      state = parent ? selectInspectorNode(parent, state) : state;
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_SELECT_SOURCE_NODE_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = openSyntheticVisibleNodeOriginFile(
        getSyntheticNodeById(item.id, state.documents),
        state
      );
      return state;
    }

    case IMAGE_SOURCE_INPUT_CHANGED: {
      const { value } = action as ImageSourceInputChanged;
      const element = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      ) as SyntheticElement;
      state = persistRootState(state => {
        return persistAttribute("src", value, element, state);
      }, state);
      return state;
    }

    case CSS_INHERITED_FROM_LABEL_CLICKED: {
      const { inheritedFromNode } = action as CSSInheritedFromLabelClicked;
      state = selectInspectorNode(inheritedFromNode, state);
      return state;
    }

    case IMAGE_PATH_PICKED: {
      const { filePath } = action as ImagePathPicked;
      const node = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      const document = getSyntheticVisibleNodeDocument(
        node.id,
        state.documents
      );

      // we want to fetch the current URI of the selected synthetic element since the relative path
      // will need to be based on where the override currently is (_if_ there's an override, otherwise this URI will point to the original source node dep)
      const moduleUri = getSyntheticDocumentDependencyUri(
        document,
        state.graph
      );

      const relativePath = path.relative(
        path.dirname(stripProtocol(moduleUri)),
        filePath
      );

      if (node.name === "img") {
        state = persistRootState(state => {
          return persistAttribute(
            "src",
            relativePath,
            node as SyntheticElement,
            state
          );
        }, state);
      }
      return state;
    }
    case SYNTHETIC_NODE_CONTEXT_MENU_REMOVE_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = persistRootState(state => {
        return persistRemoveSyntheticVisibleNode(item, state);
      }, state);
      state = setSelectedInspectorNodes(state);
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_RENAME_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = {
        ...state,
        renameInspectorNodeId: getSyntheticInspectorNode(
          item,
          getSyntheticVisibleNodeDocument(item.id, state.documents),
          state.sourceNodeInspector,
          state.graph
        ).id
      };
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_SHOW_IN_CANVAS_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;

      if (!item) {
        return state;
      }

      const uri = getSyntheticDocumentDependencyUri(
        getSyntheticVisibleNodeDocument(item.id, state.documents),
        state.graph
      );
      state = centerEditorCanvasOrLater(state, uri);
      return state;
    }

    case PC_LAYER_DOUBLE_CLICKED: {
      const { item } = action as PCLayerRightClicked;
      state = {
        ...state,
        renameInspectorNodeId: item.id
      };
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_WRAP_IN_SLOT_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = wrapSyntheticNodeInSlot(item, state);
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TO_COMPONENT_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = convertSyntheticNodeToComponent(item, state);
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TO_STYLE_MIXIN_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = convertSyntheticStyleToMixin(item, state);
      return state;
    }

    case SYNTHETIC_NODE_CONTEXT_MENU_CONVERT_TEXT_STYLES_TO_MIXIN_CLICKED: {
      const { item } = action as SyntheticNodeContextMenuAction;
      state = convertSyntheticStyleToMixin(item, state, true);
      return state;
    }

    case SHORTCUT_CONVERT_TO_COMPONENT_KEY_DOWN: {
      // TODO - should be able to conver all selected nodes to components
      if (state.selectedInspectorNodes.length > 1) {
        return state;
      }

      state = convertSyntheticNodeToComponent(
        getInspectorSyntheticNode(
          state.selectedInspectorNodes[0],
          state.documents
        ),
        state
      );
      return state;
    }
    case SHORTCUT_WRAP_IN_SLOT_KEY_DOWN: {
      const selectedNode = getInspectorSyntheticNode(
        state.selectedInspectorNodes[0],
        state.documents
      );
      state = wrapSyntheticNodeInSlot(selectedNode, state);
      return state;
    }
    case SHORTCUT_ESCAPE_KEY_DOWN: {
      if (isInputSelected(state)) {
        return state;
      }
      if (state.toolType != null) {
        return setTool(null, state);
      } else {
        state = setSelectedInspectorNodes(state);
        state = setSelectedFileNodeIds(state);
        return state;
      }
    }
    case SHORTCUT_DELETE_KEY_DOWN: {
      if (isInputSelected(state) || state.selectedInspectorNodes.length === 0) {
        return state;
      }

      const firstNode = state.selectedInspectorNodes[0];

      const sourceNode = getInspectorSourceNode(
        firstNode,
        state.sourceNodeInspector,
        state.graph
      );

      if (!canRemovePCNode(sourceNode, state)) {
        return confirm(
          "Please remove all instances of component before deleting it.",
          ConfirmType.ERROR,
          state
        );
      }

      let parent: InspectorNode = getParentTreeNode(
        firstNode.id,
        state.sourceNodeInspector
      );
      const index = parent.children.findIndex(
        child => child.id === firstNode.id
      );

      state = persistRootState(state => {
        return state.selectedInspectorNodes.reduce((state, { id }) => {
          const inspectorNode = getNestedTreeNodeById(
            id,
            state.sourceNodeInspector
          );
          if (inspectorNodeInShadow(inspectorNode, state.sourceNodeInspector)) {
            const sourceNode = getInspectorSourceNode(
              inspectorNode,
              state.sourceNodeInspector,
              state.graph
            );

            // content, or slot. Ignore
            if (!isVisibleNode(sourceNode)) {
              return state;
            }
            const syntheticNode = getInspectorSyntheticNode(
              inspectorNode,
              state.documents
            );
            return persistSyntheticVisibleNodeStyle(
              { display: "none" },
              syntheticNode,
              null,
              state
            );
          }
          const assocSyntheticNode = getInspectorSyntheticNode(
            inspectorNode,
            state.documents
          );

          if (assocSyntheticNode) {
            state = removeSyntheticVisibleNode(assocSyntheticNode, state);
          }

          return persistRemovePCNode(sourceNode, state);
        }, state);
      }, state);

      parent = getNestedTreeNodeById(
        parent.id,
        state.sourceNodeInspector
      ) as InspectorNode;

      const nextChildren = parent.children.filter(
        child => child.sourceNodeId !== sourceNode.id
      );

      const nextSelectedNodeId = nextChildren.length
        ? nextChildren[clamp(index, 0, nextChildren.length - 1)].id
        : getParentTreeNode(parent.id, state.sourceNodeInspector).name !==
          InspectorTreeNodeName.ROOT
          ? parent.id
          : null;

      if (nextSelectedNodeId) {
        const nextInspectorNode: InspectorNode = getNestedTreeNodeById(
          nextSelectedNodeId,
          state.sourceNodeInspector
        );
        if (nextInspectorNode) {
          state = setSelectedInspectorNodes(state, nextInspectorNode);
        } else {
          // does not exist as rep
          state = updateRootState(
            { selectedInspectorNodes: EMPTY_ARRAY },
            state
          );
        }
      } else {
        // does not exist as rep
        state = updateRootState(
          {
            selectedInspectorNodes: EMPTY_ARRAY
          },
          state
        );
      }
    }
  }

  return state;
};

const clipboardReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case SYNTHETIC_NODES_PASTED: {
      const { clips } = action as SyntheticVisibleNodesPasted;
      const oldState = state;

      let offset: TreeMoveOffset = TreeMoveOffset.BEFORE;
      let targetNode: InspectorNode;
      let scopeNode: InspectorNode;

      if (state.selectedInspectorNodes.length) {
        scopeNode = targetNode = state.selectedInspectorNodes[0];
        scopeNode = getParentTreeNode(
          scopeNode.id,
          getParentTreeNode(scopeNode.id, state.sourceNodeInspector)
        );
      } else if (
        state.activeEditorFilePath &&
        isPaperclipUri(state.activeEditorFilePath)
      ) {
        offset = TreeMoveOffset.PREPEND;
        const module = state.graph[state.activeEditorFilePath].content;
        scopeNode = targetNode = getInspectorNodeByAssocId(
          module.id,
          state.sourceNodeInspector
        );
      }

      if (!targetNode) {
        return state;
      }

      state = persistRootState(
        state => persistAppendPCClips(clips, targetNode, offset, state),
        state
      );

      state = queueSelectInsertedSyntheticVisibleNodes(
        oldState,
        state,
        scopeNode
      );

      return state;
    }
  }

  return state;
};

const handleArtboardSelectionFromAction = <
  T extends { sourceEvent: React.MouseEvent<any> }
>(
  state: RootState,
  node: InspectorNode
) => {
  state = setSelectedInspectorNodes(state, node);
  return state;
};

const setCanvasZoom = (
  zoom: number,
  smooth: boolean = true,
  uri: string,
  state: RootState
) => {
  const editorWindow = getEditorWindowWithFileUri(uri, state);
  const openFile = getOpenFile(uri, state.openFiles);
  return updateOpenFileCanvas(
    {
      translate: centerTransformZoom(
        openFile.canvas.translate,
        editorWindow.container.getBoundingClientRect(),
        clamp(zoom, MIN_ZOOM, MAX_ZOOM),
        editorWindow.mousePosition
      )
    },
    uri,
    state
  );
};

const normalizeBounds = (translate: Translate, bounds: Bounds) => {
  return zoomBounds(
    shiftBounds(bounds, {
      left: -translate.left,
      top: -translate.top
    }),
    1 / translate.zoom
  );
};

const normalizePoint = (translate: Translate, point: Point) => {
  return zoomPoint(
    shiftPoint(point, {
      left: -translate.left,
      top: -translate.top
    }),
    1 / translate.zoom
  );
};

const normalizeZoom = zoom => {
  return zoom < 1 ? 1 / Math.round(1 / zoom) : Math.round(zoom);
};

const convertSyntheticStyleToMixin = (
  node: SyntheticVisibleNode,
  state: RootState,
  justTextStyles?: boolean
) => {
  const oldState = state;

  state = persistRootState(
    state =>
      persistConvertSyntheticVisibleNodeStyleToMixin(
        node,
        state.selectedVariant,
        state,
        justTextStyles
      ),
    state
  );

  state = setSelectedInspectorNodes(state);

  state = queueSelectInsertedSyntheticVisibleNodes(
    oldState,
    state,
    getInspectorNodeByAssocId(
      state.graph[state.activeEditorFilePath].content.id,
      state.sourceNodeInspector
    )
  );

  return state;
};

const convertSyntheticNodeToComponent = (
  { id }: SyntheticVisibleNode,
  state: RootState
) => {
  const oldState = state;

  state = persistRootState(
    state =>
      persistConvertNodeToComponent(
        getSyntheticNodeById(id, state.documents),
        state
      ),
    state
  );

  state = setSelectedInspectorNodes(state);

  state = queueSelectInsertedSyntheticVisibleNodes(
    oldState,
    state,
    getInspectorNodeByAssocId(
      state.graph[state.activeEditorFilePath].content.id,
      state.sourceNodeInspector
    )
  );
  return state;
};

const wrapSyntheticNodeInSlot = (
  { id }: SyntheticVisibleNode,
  state: RootState
) => {
  const node = getSyntheticNodeById(id, state.documents);

  const sourceNode = getSyntheticSourceNode(node, state.graph);
  const sourceModule = getPCNodeModule(sourceNode.id, state.graph);
  const contentNode = getPCNodeContentNode(sourceNode.id, sourceModule);

  if (
    syntheticNodeIsInShadow(
      node,
      getSyntheticVisibleNodeDocument(node.id, state.documents),
      state.graph
    )
  ) {
    return confirm(
      "Cannot perform this action for shadow elements.",
      ConfirmType.ERROR,
      state
    );
  }

  if (contentNode.name !== PCSourceTagNames.COMPONENT) {
    return confirm(
      "Slots are only supported for elements that are within a component.",
      ConfirmType.ERROR,
      state
    );
  }

  if (sourceNode.id === contentNode.id) {
    return confirm(
      "Cannot convert components into slots.",
      ConfirmType.ERROR,
      state
    );
  }

  state = persistRootState(state => {
    return persistWrapInSlot(node, state);
  }, state);

  return state;
};

const selectInspectorNode = (node: InspectorNode, state: RootState) => {
  state = updateSourceInspectorNode(state, sourceNodeInspector => {
    return expandInspectorNode(node, sourceNodeInspector);
  });

  state = updateRootState(
    {
      selectedInspectorNodes: [node]
    },
    state
  );
  return state;
};
