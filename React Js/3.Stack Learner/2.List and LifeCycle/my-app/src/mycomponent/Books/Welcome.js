import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Book from './Book/Book';

class Welcome extends Component {
    render() {
        return (
            <div className="container">
                {this.props.person.map(persons=>{
                    return(
                        <Book key={persons.id} 
                            deletehandler={this.props.deletehandler} 
                            edithandler={this.props.edithandler}
                            Name={persons}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Welcome;