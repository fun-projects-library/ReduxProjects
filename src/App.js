import React from "react";
import {connect} from "react-redux";
import Counter from "./components/Counter"


function App(props) {
  // console.log(props)
  return (
    <>
      <Counter onIncrement={props.onIncrement} onDecrement={props.onDecrement} value={props.value}/>
    </>
    )
}

const mapStateToProps = (state) => {
  return {value: state};
}

const mapDispatchToProps = dispatch => {
  return {
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" })
}};


export default connect(mapStateToProps, mapDispatchToProps)(App);
