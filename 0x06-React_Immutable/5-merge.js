import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  return page1.withMutations((list) => list.concat(page2));
}

export const mergeElements = (page1, page2) => {
  return List(Map(page1).merge(Map(page2)));
}
