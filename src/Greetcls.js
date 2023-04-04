import React from 'react';
export default class Greetcls extends React.Component{
    constructor(props){
        super(props);
        console.log("Name is"+this.props.name)
    }
    render(){
        return <h2>i am a {this.props.name}!</h2>
    }
}