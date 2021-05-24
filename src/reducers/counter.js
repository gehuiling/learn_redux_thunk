const initState = {
    number:0
}

const changeCounter = (state=initState,action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                number:++state.number
            }
        case 'DECREMENT':
            return {
                number:--state.number
            }
        default:
            return state;
    }
}

export default changeCounter;