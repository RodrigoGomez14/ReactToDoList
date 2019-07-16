import React, {Component} from 'react'
import Task from '../components/Task'
import Input from '../components/Input'
class ToDoList extends Component{
    state={
        input:'',
        list:[]
    }
    changeInput=(input)=>{
        this.setState({
            input:input
        })
    }
    addToList=(e)=>{
        e.preventDefault()
        if(this.state.input){
            let listArray=this.state.list
            listArray.push(this.state.input)
            this.setState({
                list:listArray,
                input:''
            })
        }
    }
    removeItemFromArr( arr, item ) {
        return arr.filter( function( e ) {
            return e !== item;
        } );
    };
    deleteTask=(task)=>{
        let listArray=this.removeItemFromArr(this.state.list,task)
        this.setState({
            list:listArray,
        })
}
    render(){
        return(
                <div className="container">
                    <div className="row">
                            {this.state.list.map(tasks=>(
                                <div className='col-4 offset-4 text-center form-group' key={tasks.id}>
                                    <Task task={tasks} onClick={this.deleteTask} />
                                </div>
                            ))}
                    </div>
                    <div className="row">
                        <Input addToList={this.addToList} changeInput={this.changeInput} value={this.state.input}/>
                    </div>
                </div>
        )
    }
}
export default ToDoList