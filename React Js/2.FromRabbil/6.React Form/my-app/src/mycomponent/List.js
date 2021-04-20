import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class List extends Component {

    Mychild = (data)=>{
        return <li>{data}</li>
    }

    render() {
            const mylist = ['Dhaka','Rajshahi','Bogra','Tangail','Rangpur'];
            const listitem = mylist.map(this.Mychild)
            // const listitem = mylist.map((Mychild)=>{
            //     return <li>{Mychild}</li>
            // })

        return (
            <div>
                <h2 className="bg-dark my-3 text-light">List .....</h2>
                <ol>
                    {listitem}
                </ol>
            </div>
        );
    }
}

export default List;