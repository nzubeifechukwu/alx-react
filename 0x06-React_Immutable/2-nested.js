import { getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  //return fromJS(object).getIn(array, undefined);
  return getIn(object, array, undefined);
}
