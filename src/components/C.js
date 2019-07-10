import React,{Component} from 'react';
import A from './A';

 class C extends Component{
     getName(){
         return '我是C组件'
     }
    render(){
        return (
            <div>
                <input type="text" {...this.props}/>
               <img src={require('../images/C.png')} alt=""/>
            </div>
        )
    }
}

export default A('预警')(C);