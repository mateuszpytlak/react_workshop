import { Direction, useSortData } from "../../hooks/sortData";
import { Text } from "../../ui";
import { type User } from "../../utils/mockData";

type Props = {
    data: User[];
}

export const UsersList = ({ data }: Props) => {
    const sortedData = useSortData(data, 'age', Direction.DESC);

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
