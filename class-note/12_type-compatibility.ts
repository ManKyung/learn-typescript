// 인터페이스
interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
}

var developer: Developer1;
var person: Person1;

developer = person;
person = developer;

// 함수
var add1 = function (a: number) {
  console.log(a);
};

var sum1 = function (a: number, b: number) {
  console.log(a + b);
};

sum1 = add1;
add1 = sum1;

// 제네릭
interface Empty<T> {}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
