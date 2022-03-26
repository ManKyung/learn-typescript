// 타입 추론 1
let a = 10;

function sum(b = 10) {
  var c = "10";
  return b + c;
}

// 타입 추론 2
// interface Dropdown<T> {
//   value: T;
//   message: string;
// }

// const items: Dropdown<number> = {
//   value: 10,
//   message: "Hello",
// };

// 타입 추론 3
interface Dropdown<T> {
  value: T;
  message: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  title: string;
  tag: K;
}

const detailed: DetailedDropdown<string> = {
  title: "title",
  message: "message",
  value: "this is value",
  tag: "Tag",
};
