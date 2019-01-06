import React from 'react';
import { shallow } from 'enzyme';
import InputCell from './';

describe('InputCell', () => {
  it('should render correctly', () => {
    const component = shallow(<InputCell />);
    expect(component).toMatchSnapshot();
  });

  it('should contain an input', () => {
    const component = shallow(<InputCell />);
    expect(component.find('input')).toBeDefined();
  });

  it('should pass the value of the input to the onChange handler', () => {
    const onChangeMock = jest.fn();

    const component = shallow(
      <InputCell
        onChange={onChangeMock}
        rowIndex={1}
        columnIndex={5}
      />
    );
    component.find('input').simulate('change', { target: { value: '12.3' } });
    expect(onChangeMock).toBeCalledWith({ target: { value: '12.3'} }, 1, 5);
  });
});
