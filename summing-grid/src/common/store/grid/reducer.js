import {
  ADD_ROW,
  APPLY_CELL_VALUE,
} from './types';

const initialState = {
  rows: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_ROW:
    return {
      ...state,
      rows: state.rows.concat(action.row),
    };

  case APPLY_CELL_VALUE: {
    const { value, rowIndex, columnIndex } = action.info;
    const rows = state.rows.slice(0);

    if ('undefined' === typeof rows[rowIndex]
      || 'undefined' === typeof rows[rowIndex][columnIndex]) {
        throw Error('Attempting to set a value for a cell that doesn\'t exist');
    }
    rows[rowIndex][columnIndex] = value;

    return {
      ...state,
      rows,
    };
  }

  default:
    return state;
  }
};

export default reducer;
