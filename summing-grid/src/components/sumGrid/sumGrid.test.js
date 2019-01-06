import React from 'react';
import { shallow } from 'enzyme';
import SumGrid from './';
import Cell from '../cell';

describe('SumGrid', () => {
  it('should render correctly', () => {
    const component = shallow(<SumGrid />);
    expect(component).toMatchSnapshot();
  });

  it('should render its container <div>', () => {
    const component = shallow(<SumGrid />);
    expect(component.find('div.grid')).toBeDefined();
  });

  it('should render at least one Cell', () => {
    const component = shallow(<SumGrid />);
    expect(component.find(Cell)).toBeDefined();
  });
});
