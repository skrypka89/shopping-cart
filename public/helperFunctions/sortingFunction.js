//Sorting function by price and heading
export default function sortingFunction(a, b, prop1, prop2, reverse = false) {
  if (a[prop1] < b[prop1]) return -1;
  if (a[prop1] > b[prop1]) return 1;
  if (a[prop1] == b[prop1] && prop2) {
    if (reverse) return sortingFunction(b, a, prop2);
    else return sortingFunction(a, b, prop2);
  }

  return 0;
}