import * as React from "react";
import {
  BaseFileNavigatorProps,
  FileNavigatorLayer,
  NewFileInput
} from "./view.pc";
import {
  Directory,
  memoize,
  FSItemTagNames,
  getNestedTreeNodeById,
  FSItem,
  getParentTreeNode,
  EMPTY_ARRAY,
  getFileFromUri
} from "tandem-common";
import { Dispatch } from "redux";
import { FileNavigatorContext, FileNavigatorContextProps } from "./contexts";
import { fileNavigatorNewFileEntered } from "../../../../../actions";
import { mapVariablesToCSSVarDropdownOptions } from "../../right-gutter/styles/pretty/panes/utils";
import {
  dropdownMenuOptionFromValue,
  DropdownMenuOption
} from "../../../../inputs/dropdown/controller";
export type Props = {
  activeEditorUri: string;
  rootDirectory: Directory;
  dispatch: Dispatch<any>;
  selectedFileNodeIds: string[];
  editingFileNameUri: string;
};

const generateFileNavigatorContext = memoize(
  (
    newFileInfo: NewFSItemInfo,
    selectedFileNodeIds: string[],
    onNewFileChangeComplete: any,
    onNewFileInputChange: any,
    onNewFileEscape: any,
    activeEditorUri: string,
    editingFileNameUri: string,
    dispatch: Dispatch<any>
  ): FileNavigatorContextProps => ({
    newFileInfo,
    selectedFileNodeIds,
    onNewFileChangeComplete,
    onNewFileInputChange,
    onNewFileEscape,
    dispatch,
    activeEditorUri,
    editingFileNameUri
  })
);

enum AddFileType {
  BLANK,
  COMPONENT,
  DIRECTORY
}

export type NewFSItemInfo = {
  fileType: AddFileType;
  directory: Directory;
};

type State = {
  newFSItemInfo?: NewFSItemInfo;
};

const ADD_FILE_OPTIONS: DropdownMenuOption[] = [
  {
    label: "Directory",
    value: AddFileType.DIRECTORY
  },
  {
    label: "Blank file",
    value: AddFileType.BLANK
  },
  {
    label: "Component file",
    value: AddFileType.COMPONENT
  }
];

export default (Base: React.ComponentClass<BaseFileNavigatorProps>) =>
  class FileNavigatorController extends React.PureComponent<Props, State> {
    state: State = {
      newFSItemInfo: null
    };
    onAddFolderButtonClick = () => {
      this.setAddingFSItem(AddFileType.DIRECTORY);
    };
    private onFileDropdownComplete = (value: AddFileType) => {
      this.setAddingFSItem(value);
    };
    onNewFileInputChange = (value: string) => {};
    onNewFileChangeComplete = (name: string) => {
      if (!name) {
        return this.onNewFileEscape();
      }
      const { newFSItemInfo } = this.state;

      if (
        newFSItemInfo.fileType === AddFileType.COMPONENT &&
        !/\.pc$/.test(name)
      ) {
        name += ".pc";
      }

      this.setState({
        ...this.state,
        newFSItemInfo: null
      });
      this.props.dispatch(
        fileNavigatorNewFileEntered(
          name,
          newFSItemInfo.fileType === AddFileType.DIRECTORY
            ? FSItemTagNames.DIRECTORY
            : FSItemTagNames.FILE,
          newFSItemInfo.directory.id
        )
      );
    };
    onNewFileEscape = () => {
      this.setState({ ...this.state, newFSItemInfo: null });
    };
    private setAddingFSItem = (type: AddFileType) => {
      const selectedFileNode: FSItem = getNestedTreeNodeById(
        this.props.selectedFileNodeIds[0],
        this.props.rootDirectory
      );

      const activeFileNode: FSItem =
        this.props.activeEditorUri &&
        getFileFromUri(this.props.activeEditorUri, this.props.rootDirectory);

      const targetFileNode = selectedFileNode || activeFileNode;

      const dirFile = targetFileNode
        ? targetFileNode.name === FSItemTagNames.DIRECTORY
          ? targetFileNode
          : getParentTreeNode(targetFileNode.id, this.props.rootDirectory)
        : this.props.rootDirectory;
      this.setState({
        ...this.state,
        newFSItemInfo: {
          fileType: type,
          directory: dirFile
        }
      });
    };
    render() {
      const {
        dispatch,
        rootDirectory,
        selectedFileNodeIds,
        activeEditorUri,
        editingFileNameUri,
        ...rest
      } = this.props;

      if (!rootDirectory) {
        return <Base content={EMPTY_ARRAY} addFileDropdownProps={null} />;
      }
      const {
        onNewFileChangeComplete,
        onFileDropdownComplete,
        onNewFileInputChange,
        onNewFileEscape
      } = this;
      const { newFSItemInfo } = this.state;

      const content = rootDirectory.children.map(child => {
        return <FileNavigatorLayer key={child.id} item={child as FSItem} />;
      });

      if (newFSItemInfo && rootDirectory.uri === newFSItemInfo.directory.uri) {
        content.unshift(
          <NewFileInput
            key="new-file-input"
            onChangeComplete={onNewFileChangeComplete}
            onChange={onNewFileInputChange as any}
            onEscape={onNewFileEscape}
          />
        );
      }

      return (
        <FileNavigatorContext.Provider
          value={generateFileNavigatorContext(
            newFSItemInfo,
            selectedFileNodeIds,
            onNewFileChangeComplete,
            onNewFileInputChange,
            onNewFileEscape,
            activeEditorUri,
            editingFileNameUri,
            dispatch
          )}
        >
          <Base
            {...rest}
            content={content}
            addFileDropdownProps={{
              onChangeComplete: onFileDropdownComplete,
              options: ADD_FILE_OPTIONS
            }}
          />
        </FileNavigatorContext.Provider>
      );
    }
  };
