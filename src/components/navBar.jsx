import React,{Component} from "react";
class navBar extends Component{
    render(){
        return(
        <nav className="navbar navbar-light bg-light ">
            <div className='container-fluid'>
                <span className="navbar-brand mb-0 h1">Active Counter
                <span className='badge rounded-pill bg-info text-dark'>
                {this.props.totalActiveCounters}</span></span>
            </div>
        </nav>
        );
    }
}
 export default navBar