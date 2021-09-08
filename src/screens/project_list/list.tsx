import React from "react"
import {User} from './search-panel'

interface Project {
    id: string | number,
    name: string,
    personId: string,
    organization: string,
    created: string
}

// interface User {
//     id: string | number,
//     name: string
// }
interface ListProps {
    list: Project[],
    users: User[]
}
export const List = ({ list, users }: ListProps) => {
    return<table>
        <thead>
            <tr>
                <th>
                    名称
                </th>
                <th>
                    负责人
                </th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr>
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
                </tr>)
            }
        </tbody>
        </table>
}