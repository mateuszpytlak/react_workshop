const users = [
  { id: 1, nickname: "john", age: 45 },
  { id: 2, nickname: "olivier", age: 32 },
  { id: 3, nickname: "macgyver", age: 65 },
];

const strTEST = ['john', 'oliver', 'mcgyver'];

const INCREASE = (a, b) => {
    return a - b;
}

const DECREASE = (a, b) => {
    return b - a;
}

console.log(INCREASE(strTEST));

export const sort = (field, direction) => {
    if (field === "nickname" ) {
        
    }
    if (direction === 'INC') {
        return 'a';
    } else {
        return 'b';
    }
};
