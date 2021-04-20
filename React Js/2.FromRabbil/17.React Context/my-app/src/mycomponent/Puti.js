import React, { Component, Fragment } from 'react';
import { PutiConsumer } from './MyContext';

class Puti extends Component {
    render() {
        return (
            <Fragment>
                <h1>
                    <PutiConsumer>
                        {
                            msg=>{
                                return msg;
                            }
                        }
                        
                    </PutiConsumer>
                </h1>
            </Fragment>
        );
    }
}

export default Puti;