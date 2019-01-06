import { createStore } from 'redux';
import grid from './grid/reducer';

export default (args) => {  
  return createStore(grid, args);
};
