import React ,{Component} from'react';
import Counter from "./counter";
class Counters extends Component{

    render(){
        return(
<div>
<button className='btn btn-sm btn-primary m-4'onClick={this.props.onReset}>Reset
    </button>
    {this.props.counters.map((c)=>(
    <Counter
    key={c.id}
    counter={c}
    onDelete={this.props.onDelete}
    onIncrement={this.props.onIncrement}
    onDecrement={this.props.onDecrement}
    
    >
<h5>Counter #{c.id}</h5>
    </Counter>
    
    ))}
</div>
        )
    }





}
export default Counters;