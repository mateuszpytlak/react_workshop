import { User } from "../utils/mockData";


type DataKey = keyof User;
export enum Direction {
    ASC = 'ascending',
    DESC = 'descending',
}

export const useSortData = (
  data: User[],
  field: DataKey,
  direction: Direction = Direction.ASC
) => {
  return data.sort((a, b) => {
    const nameA = a[field];
    const nameB = b[field];

    return (
      (nameA > nameB ? 1 : nameA < nameB ? -1 : 0) *
      (direction === Direction.ASC ? 1 : -1)
    );
  });
};
