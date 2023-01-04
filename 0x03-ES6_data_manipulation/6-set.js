export default function setFromArray(tab) {
  const myset = new Set();
  tab.map(((x) => myset.add(x)));
  return myset;
}
