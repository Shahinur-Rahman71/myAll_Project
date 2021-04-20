import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
class Book extends Component {
    state={
        iseditable: false
    }

    changehandler=(event)=>{
        if(event.key==='Enter'){
            this.setState({
                iseditable: false
            })
        }
    }
    componentWillUnmount(){
        console.log("Book componentWillUnmount");
    }

    render() {
        let output= this.state.iseditable ? ( 
            <input 
                onChange={e=>
                    this.props.edithandler(e.target.value, this.props.Name.id)
                } 
                onKeyPress={this.changehandler}
                type="text" 
                value={this.props.Name.bookname}
            />
            ): (<p>{this.props.Name.bookname}</p>)

        return (
            <li className="list-group-item d-flex">

                {output}
                <span className="ml-auto">{this.props.Name.author}</span>
                
                <div className="mx-4">
                    <span 
                        onClick={()=>this.setState({iseditable: true})} 
                        style={  {cursor: 'pointer'}} className="mx-2">
                        <i className="fas fa-edit"></i>
                    </span>

                    <span 
                        style={{cursor: 'pointer'}} 
                        onClick={()=>this.props.deletehandler(this.props.Name.id)}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>

            </li>
        );
    }
}

export default Book;