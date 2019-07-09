import React,{Component} from 'react';


function A(WrapperedComponent){
  return  class A extends Component{
        render(){
            return (
                <div className="a-container">
                <div className="header">
                    <div>提示</div>
                    <div>X</div>
                    </div>
                    <div>
                       <WrapperedComponent>
                       </WrapperedComponent>
                    </div>
                </div>
            )
        }
    }
}
export default A;
