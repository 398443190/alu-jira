import React from "react"


export interface User {
    id: string | number,
    name: string
}
interface SearchPanelProps {
    users: User[],
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void;
}


export const SearchPanel = ({users, param, setParam }:SearchPanelProps) => {

    return <form action="111">
        <input type="text"  value={param.name} onChange={evt => setParam({
            ...param,
            name: evt.target.value
        })}/>
        <select value={param.personId} onChange={evt => {
            setParam({
                ...param,
                personId:evt.target.value
            })
        }}>
            <option value={''}>负责人</option>
            {
                users.map(item => <option value={item.id}>{item.name}</option>)
            }
        </select>
    </form>
}