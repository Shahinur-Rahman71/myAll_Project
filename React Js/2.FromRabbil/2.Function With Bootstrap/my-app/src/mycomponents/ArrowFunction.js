import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Alarm = (a) => {
     alert(a);
}
const Arrow = () => {
    return(
        <button onClick={Alarm.bind(this,"Hello, I am Alarm.")} className="btn btn-success">Arrow Function</button>
    );
}

export default Arrow