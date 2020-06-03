export const addLine = (line) => {
    return{
        type: 'ADD_LINE',
        line
    }
}

export const addEvent = (id, event) => {
    return{
        type: 'ADD_EVENT',
        id,
        event
    }
}