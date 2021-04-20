import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class Findnode extends Component{

    Edit(){
        var imgId = document.getElementById("imgid");
        ReactDOM.findDOMNode(imgId).innerHTML="hi....";
        // ReactDOM.findDOMNode(imgId).src="";
    }
    render(){
        return(
            <div>
                <button className="btn btn-success btn-block my-5">Find Dom Node</button>
                <button className="btn btn-success" onClick={this.Edit}>Change Img</button><br></br>
                {/* <img src="" alt="Sorry" id="imgid"></img> */}
                <h1 id="imgid">hi</h1>
            </div>
        )
        
        
    }
}

export default Findnode;