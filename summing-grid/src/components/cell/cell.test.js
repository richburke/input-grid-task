import React from 'react';
import { shallow } from 'enzyme';
import Cell from './';

describe('Cell', () => {
  it('should render correctly', () => {
    const component = shallow(<Cell />);
    expect(component).toMatchSnapshot();
  });

  it('should render its container <div>', () => {
    const component = shallow(<Cell />);
    expect(component.find('div.grid-cell')).toBeDefined();
  });
  
  it('should contain the child passed to it', () => {
    const component = shallow(
      <Cell>
        <div key='cell-contents' />
      </Cell>
    );
    expect(component.contains(<div key='cell-contents' />)).toBeTruthy();
  });
});
