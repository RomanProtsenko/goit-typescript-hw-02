interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = { key: 'age', value: 30 };
const pair2: KeyValuePair<string, string> = { key: 'name', value: 'John' };
const pair3: KeyValuePair<number, boolean> = { key: 1, value: true };
