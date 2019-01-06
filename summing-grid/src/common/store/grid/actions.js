import {
  ADD_ROW,
  APPLY_CELL_VALUE,
} from './types';

export const addRow = (inputValues) => {
  return {
    type: ADD_ROW,
    row: [inputValues]
  }
};

export const applyCellValue = (value, rowIndex, columnIndex) => {
  return {
    type: APPLY_CELL_VALUE,
    info: {
      value,
      rowIndex,
      columnIndex,
    }
  }
};
