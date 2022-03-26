interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function getPerson(): Developer | Person {
  return {
    name: "Jung",
    age: 33,
    skill: "Frontend",
  };
}

const Jung = getPerson();

// 타입 단언을 사용한 방법
if ((Jung as Developer).skill) {
  let skill = (Jung as Developer).skill;
  console.log(skill);
} else if ((Jung as Person).age) {
  let age = (Jung as Person).age;
  console.log(age);
}

// 타입 가드를 사용한 방법
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(Jung)) {
  console.log(Jung.skill);
} else {
  console.log(Jung.age);
}
