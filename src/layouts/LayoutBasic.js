import React from 'react';
import NormalModes from '../components/normalmodes';
  
class Parent extends React.Component{    
    state = {
        num: 0,
    }
  
    handleCallback = (Data) =>{
        this.setState({num: Data})
    }
  
    render() {
        const {num} = this.state;
        return(
           <div>
             <h1> {num}</h1>
             <NormalModes lineCallback = {this.handleCallback}/>    
           </div>
        );
    }
}
  
export default Parent;