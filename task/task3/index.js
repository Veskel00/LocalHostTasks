import data from './example';

function reducer(acc, cur) {
  return { ...acc, [cur.id]: cur };
}

function filterWith(arr, filter) {
  if (filter.length <= 2) {
    return [];
  } else {
  }
}

export default filterWith;
