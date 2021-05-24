import React from 'react';
import { connect } from 'react-redux';
import getNotes from '../actions/syncom';

class Syncom extends React.Component{
    constructor(){
        super();
        this.state = {
            showNotes:[],
        }
    }
    
    componentDidMount() {
        this.props.getNotes()
        .then(
            data =>  {
                // console.log(data)
                this.setState({showNotes:data.notes})
            },
            error => {console.log(error,'error happend!')}
        )
    }

    render() {
        return (
            <div>
            <hr />
                <h1 style={{color:'blue'}}>redux-thunk</h1>
                <ul>
                    {this.state.showNotes.map(note => <li key={note.id}>{note.content}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        notes:state.notes
    }
}

export default connect(mapStateToProps,{getNotes})(Syncom);