/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}


const exampleOne: KeyValuePair<number,string> = {
  key: 22,
  value: "Hello",
}


const exampleTwo: KeyValuePair<string, number> = {
  key: "Hello",
  value: 22,
};

export {};