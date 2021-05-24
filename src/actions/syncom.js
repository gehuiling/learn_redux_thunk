import axios from 'axios';
import { initNotes } from '../actions/notes';

// const promise1 = axios.get('http://localhost:3001');
// promise1.then(response => {
//     console.log(response.data);
// })

function fetchNotes() {
    return axios.get('http://localhost:3001');
}



function getNotes() {
    return function(dispatch) {
        return fetchNotes().then(
            notes =>dispatch(initNotes(notes)),
            error => {console.log('error')})
    }
}

export default getNotes;