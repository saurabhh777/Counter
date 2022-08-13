import React,{Component} from "react";
class Counter extends Component{

    render(){
    console.log(this.props)
    return(
        <div className='row'>
            {this.props.children}
            <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                <button className="btn btn-secondery btn-sm m-2"
                onClick={()=>this.props.onIncrement(this.props.counter)}
                >
              +      
                </button>
                <button className="btn btn-secondery btn-sm m-2"
                onClick={()=>this.props.onDecrement(this.props.counter)}
                disabled={this.props.counter.value===0}
                >
                   - 
                </button>
    <button className="btn btn-danger btn-sm m-2"
    onClick={()=>{
        this.props.onDelete(this.props.counter.id)
    }}
    
    >
        X
    </button>
  </div>
        </div>
    )
}
formatCount(){
return this.props.counter.value === 0?"zero":this.props.counter.value    
}
getBadgeClasses(){
    let className="m-2 badge bg-";
    this.props.counter.value===0?
    (className+="warning text-dark")
    :(className+="primary")
    return className;

}








}
export default Counter;