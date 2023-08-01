export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // use endpoint has the key.
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 0);
  }

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
