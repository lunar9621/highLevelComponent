import React,{Component} from 'react';
import A from './A';

 class C extends Component{
    render(){
        return (
            <div>
               <img src={require('../images/C.png')} alt=""/>
            </div>
        )
    }
}

export default A(C);