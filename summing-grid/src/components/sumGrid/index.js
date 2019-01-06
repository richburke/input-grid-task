import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addRow,
  applyCellValue
} from '../../common/store/grid/actions';
import {
  sumRow,
  cleanNumericInput,
  abbreviateNumber,
} from '../../common/utils';
import Cell from '../cell';
import InputCell from '../inputCell';

class SumGrid extends Component {
  constructor(props) {
    super(props);
    props.addRow(Array(props.inputCellsPerRow).fill(null));
  }

  handleCellInputChange = (event, rowIndex, columnIndex) => {
    const { applyCellValue } = this.props;
    
    const input = event.target.value.trim();
    applyCellValue(
      cleanNumericInput(input.length === 0
        ? 0
        : input
      ),
      rowIndex,
      columnIndex
    );
  }

  handleCellInputBlur = (event, rowIndex, columnIndex) => {
    const { applyCellValue } = this.props;

    const input = event.target.value.trim();
    applyCellValue(
      Number.parseFloat(
        cleanNumericInput(input.length === 0
          ? 0
          : input
        )
      ),
      rowIndex,
      columnIndex
    );
  }

  render() {
    const { rows } = this.props;

    const gridRows = rows.map((row, rowIndex) => {
      const currentRow = row.map((value, colIndex) => {
        const cellValue = value === null
        ? ''
        : value;

        return (<InputCell
          key={`${rowIndex}-${colIndex}`}
          value={cellValue}
          rowIndex={rowIndex}
          columnIndex={colIndex}
          onKeyPress={this.handleCellInputKeyPress}
          onChange={this.handleCellInputChange}
          onBlur={this.handleCellInputBlur}
        />);
      });
      return currentRow.concat(
        <Cell
          key={`${rowIndex}-${row.length}`}
        >
          {abbreviateNumber(sumRow(row))}
        </Cell>
      );
    });

    return (
      <div className="grid">
        {gridRows}
      </div>
    );
  }
}

SumGrid.propTypes = {
  inputCellsPerRow: PropTypes.number,
};

const mapStateToProps = (state) => ({
  rows: state.rows,
});

const mapDispatchToProps = (dispatch) => ({
  addRow: (row) => dispatch(addRow(row)),
  applyCellValue: (value, rowIndex, columnIndex) =>
    dispatch(applyCellValue(value, rowIndex, columnIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SumGrid); 
