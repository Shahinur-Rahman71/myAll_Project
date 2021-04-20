import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css';
import axios from 'axios'

class MyTable extends Component {

    constructor(){
        super();
        this.state ={
            Alldata: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({Alldata: response.data})
        })
        .catch(error=>{
            alert("Please see your code again");
        })
    }

    render() {

        const data =this.state.Alldata;      
        const columns = [
            {Header: 'Country Name',accessor: 'name'},
            {Header: 'Capital',accessor: 'capital'},
            {Header: 'Population',accessor: 'population'}
        ]
        
        return (
            <div>               
                <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize={10}  
                  pageSizeOptions={[10,20,30]}  
              />              
            </div>
        );

    }
}

export default MyTable;