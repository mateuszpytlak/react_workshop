export type User = {
  id: number;
  nickname: string;
  age: number;
}

export const users: User[] = [
  { id: 1, nickname: "john - 45", age: 45 },
  { id: 2, nickname: "olivier - 32", age: 32 },
  { id: 3, nickname: "macgyver - 65", age: 65 },
];
