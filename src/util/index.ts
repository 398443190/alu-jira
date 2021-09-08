import { useEffect, useState } from "react"


// 在一个函数中，改变传入的对象是不对的
export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(object).forEach(key => {
        // @ts-ignore
        const value = object[key]
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const isFalsy = (value: any ) => value === 0? false: !value

// 自定义hook 必须以use开头
export const useMount = (callBack: ()=> void) => {
    useEffect(()=> {
        callBack()
    }, [])
}
export const debounce = (func: ()=> void, delay?: number) => {
    let timeout: number;
    return () => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func()
        },delay)
    }
}
export const useDebounce = (value: any, delay?:number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        // 每次在value 变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        // 每次在上一个useEffect 处理完以后在运行
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue
}