import { writable } from "svelte/store";

import { 
  defaultPageContent,
  addRow as EditorAddRow,
  deleteRow as EditorDeleteRow,
  addColumn as EditorAddColumn,
  deleteColumn as EditorDeleteColumn,
  dragResizeColumn as EditordragResizeColumn
} from "./pageEditor";

export const PageEditorStore = writable(defaultPageContent);

export function addRow(rowIndex: number) {
  PageEditorStore.update((page) => EditorAddRow(page, rowIndex));
};

export function deleteRow(rowIndex: number) {
  PageEditorStore.update((page) => EditorDeleteRow(page, rowIndex));
};

export function addColumn(rowIndex: number) {
  PageEditorStore.update((page) => EditorAddColumn(page, rowIndex));
};

export function deleteColumn(rowIndex: number, columnIndex: number) {
  PageEditorStore.update((page) => EditorDeleteColumn(page, rowIndex, columnIndex));
};

export function dragResizeColumn(rowIndex: number, columnIndex: number, width: number) {
  PageEditorStore.update((page) => EditordragResizeColumn(page, rowIndex, columnIndex, width));
};

export function setPage(page: any) {
  PageEditorStore.set(page);
};

// TODO - fix colum widths when column is moved between rows
export function setRow(rowId: string, row: any) {
  PageEditorStore.update((page) => {
    const rowIndex = page.findIndex(row => row.id === rowId);
    page[rowIndex].content = row;
    return page;
  });
};
