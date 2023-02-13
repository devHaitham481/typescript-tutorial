function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

getRandomElement<number>(['string']);

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const man: IMan<string, number> = {
  name: 'man',
  age: 45,
};

interface IMan<K, V> {
  name: K;
  age: V;
}

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
