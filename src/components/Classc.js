import React, { Component } from 'react'

export default class Classc extends Component {

    constructor(props){
        super(props)
        this.state ={cnt:0,};
    }
     inc = ()=>{
        this.setState({ cnt:this.state.cnt+1,});
    }
    dec = ()=>{
        this.setState({ cnt:this.state.cnt-1,});
    }


  render() {
    return (
      <div>
        <h1>this is done using class component</h1>
        <div>
            <h2>{this.state.cnt}</h2>
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>
        </div>

      </div>
    )
  }}

