import React , {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Input extends Component{
    render(){
        return(
            <div className="col-12">
                <form className="input-group mb-3 justify-content-center" onSubmit={this.props.addToList}>
                    <div className="input-group-append">
                    <input onChange={(e)=>{
                        this.props.changeInput(e.target.value)
                    }}
                    value={this.props.value}  
                    type="text" className='form-control' placeholder='Agergar Tarea'/>
                    </div>
                    <div className="input-group-append">
                        <button onClick={this.props.addToList} type='button' className="input-group-text"><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Input