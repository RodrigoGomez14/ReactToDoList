import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './styles/Task.css'

class Task extends Component{
    state={
        active:true
    }
    changeTaskState=()=>{
        if(this.state.active){
            this.setState({
                active:false
            })
        }
        else{
            this.setState(
                {
                    active:true
                }
            )
        }
    }
    render(){
        if(this.state.active){
            return(
                <div className='task pl-4 pr-4'>
                    <h5 className='task-title' onClick={this.changeTaskState}>{this.props.task}</h5>
                    <FontAwesomeIcon className='icono' icon={faTrash} onClick={()=>{
                        this.props.onClick(this.props.task)
                    }}/>
                </div>
            )
        }
        else{
            return(
                <div className='task pl-4 pr-4'>
                    <h5 className='task-title' onClick={this.changeTaskState}><del>{this.props.task}</del></h5>
                    <FontAwesomeIcon className='icono' icon={faTrash} onClick={()=>{
                        this.props.onClick(this.props.task)
                    }}/>
                </div>
            )
        }
    }
}
export default Task