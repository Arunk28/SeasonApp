import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            position=>console.log(position),
            err=>console.log(err)
        );

        return <div>Hi there</div>
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'))