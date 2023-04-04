import React from 'react';
export default class Empdetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> <h2>My name  {this.props.name}</h2>
                  <h2>My employee Id is  {this.props.empid}</h2>
                  <h2>And I'm working as  {this.props.desig}</h2>
            </div>
        );
        
    }
}