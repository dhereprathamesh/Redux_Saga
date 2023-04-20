import React, { Component } from 'react'
import { connect } from 'react-redux';
import { decrementAsync, incrementAsync } from '../Store/Counter/counter.action';
import { bindActionCreators } from 'redux' 

class Counter extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {increment,decrement,counter} = this.props;
    return (
      <div>
        <h1>Counter : {counter}</h1>
        <button  onClick={increment}>Increment</button>
        <button  onClick={decrement}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    counter: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch)=> 
bindActionCreators(
  {
    increment: incrementAsync,
    decrement: decrementAsync,
},dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
