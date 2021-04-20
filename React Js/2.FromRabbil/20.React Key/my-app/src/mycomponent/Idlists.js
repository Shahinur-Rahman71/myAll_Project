import React, { Component, Fragment } from 'react';


 const MenuBlog=(props)=>{
    const thisdata=props.data;

    const tittlebar = (
        <ol>
            {
                thisdata.map((tittlebars)=>{
                    return <li key={tittlebars.id}>{tittlebars.tittle}</li>
                })
            }
        </ol>
    );

    const content= thisdata.map((shows)=>{
        return (
            <Fragment key={shows.id}>
                <h3>{shows.tittle}: {shows.content}</h3>
            </Fragment>
        ) 
    });


    return(
        <Fragment>
            <hr></hr>
            {tittlebar}
           <hr></hr>
           {content}
        </Fragment>
    );


}


class Idlists extends Component {
    
    render() {
        const data=[
            {
                id: 1, tittle: 'first',content: 'Welcome to ReactJs!!'
            },
            {
                id: 2, tittle: 'second',content: 'I am shahinur rahman'
            },
            {
                id: 3, tittle: 'third',content: 'I live in bangladesh at rajshahi.'
            }
        ]
        return (
            <Fragment>
                <MenuBlog data={data}/>
            </Fragment>
        );
    }
}

export default Idlists;