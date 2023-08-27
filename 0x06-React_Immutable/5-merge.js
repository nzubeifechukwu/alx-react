import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  return List(page1).withMutations((list) => list.concat(List(page2)));
};

export const mergeElements = (page1, page2) => {
  return List(Map(page1).merge(Map(page2)));
};
