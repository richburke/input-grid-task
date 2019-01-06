import React from 'react';
import Cell from '../cell';

const InputCell = ({
  value,
  rowIndex,
  columnIndex,
  onChange,
  onBlur,
}) => (
  <Cell>
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event, rowIndex, columnIndex)}
      onBlur={(event) => onBlur(event, rowIndex, columnIndex)}
    />
  </Cell>
);

export default InputCell;
