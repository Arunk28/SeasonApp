import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props)

        this.state ={lat:null,error:""}

        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({error:err.message})
            }
        );

    }
    render(){
        return (
        <div>
            <div>latitude:{this.state.lat}</div>
            <div>Error : {this.state.error}</div>
        </div>)
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'))