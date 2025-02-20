import { Text } from "../../ui";
import { type User } from "../../utils/mockData";

type Props = {
    data: User[];
}

type DataKey = keyof User;
enum Direction {
    ASC = 'ascending',
    DESC = 'descending',
}

export const UsersList = ({ data }: Props) => {

    const sortData = (data: User[], field: DataKey, direction?: Direction) => {
        return data.sort((a, b) => {
            const nameA = a[field];
            const nameB = b[field];

            if (direction === Direction.ASC) {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            } else {
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
    
            }

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
    }

    const sortedData = sortData(data, 'nickname', Direction.DESC);

    return (
        <div>
            {sortedData.map((user) => {
                return (
                    <Text key={user.id}>{user.nickname}</Text>
                )
            })}
        </div>
    )
}
