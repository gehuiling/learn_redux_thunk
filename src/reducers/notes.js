const initState = []

const aboutNotes = (state=initState,action) => {
    switch(action.type) {
        case 'INIT_NOTES':
            return action.notes
        default:
            return state;   
    }
}

export default aboutNotes;