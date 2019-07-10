import React,{Component} from 'react';


export default (title)=>WrapperedComponent=> class A extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
       }
       onInputChange=(e)=>{
        this.setState({
            value:e.target.value
        })   
    }
        render(){
            const {age,...otherProps}=this.props;
            const newProps={
                value:this.state.value,
                onChange:this.onInputChange,
            };
            return (
                <div className="a-container">
                <div className="header">
                    <div>{title}</div>
                    <div>X</div>
                    </div>
                    <div>
                       <WrapperedComponent sex={'男'}{...otherProps}  {...newProps}/>
                    </div>
                </div>
            )
        }
}
