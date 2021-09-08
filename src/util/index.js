// 在一个函数中，改变传入的对象是不对的
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const isFalsy = (value) => value === 0? false: !value