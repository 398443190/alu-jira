import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import qs from 'qs'
import { cleanObject, useMount,useDebounce } from "../../util"

// js 的错误大都是在runtime（运行时）发现的 ts 可以在静态检测 也就是编写时候检测
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {


    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [users, setUsers] = useState([])

    const [list, setList] = useState([])

    const debounceParam = useDebounce(param, 500)
    useEffect(() => {
        let data = qs.stringify(cleanObject(debounceParam))
        console.log(data, 'data')
        fetch(`${apiUrl}/projects?${data}`).then(async res => {
            if (res.ok) {
                setList(await res.json())
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json())
            }
        })
    })


    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List  users={users} list={list}/>
    </div>
}