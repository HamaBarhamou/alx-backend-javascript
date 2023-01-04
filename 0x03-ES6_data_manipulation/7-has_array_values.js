export default function hasValuesFromArray(set, array) {
  const result = array.map((e) => set.has(e));
  if (result.length === 1 && result[0] === true) return true;
  return false;
}
