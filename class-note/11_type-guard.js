function getPerson() {
    return {
        name: "Jung",
        age: 33,
        skill: "Frontend"
    };
}
var Jung = getPerson();
// console.log(Jung.skill )
if (Jung.skill) {
    var skill = Jung.skill;
    console.log(skill);
}
