import { connect } from 'react-redux';
import { increment,decrement } from '../actions/counter';

const Counter = ({number,increment,decrement})=> {

    function handleIncrement() {
        // props.dispatch(increment());
        // props.increment();
        increment();
    }

    function handleDecrement() {
        // props.dispatch(decrement());
        // props.decrement();
        decrement();
    }

    return (
        <div>
            <h1 style={{color:'blue'}}> 同步action </h1>
            <button onClick={handleIncrement}>+</button>
            {/* <h1>{props.counter}</h1> */}
            <h1>{number}</h1>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

const mapStateToProps = (state)=> {
    // console.log(state)
    return {
        number:state.counter.number
    }
}


export default connect(
    mapStateToProps,
    {increment,decrement}
)(Counter);