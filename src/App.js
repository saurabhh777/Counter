import NavBar from "./components/navBar";
import Counters from "./components/counters"
import React,{Component} from "react";
class App extends Component{
  constructor(){
    super();
   this.handleDelete=this.handleDelete.bind(this);
   this.handleIncrement=this.handleIncrement.bind(this); 
  this.handleDecrement=this.handleDecrement.bind(this)
  this.handleReset=this.handleReset.bind(this)
  this.getActiveCountersCount=this.getActiveCountersCount.bind(this)
  
  }
state={
  counters:[
{id:0,value:3},
{id:1,value:5},
{id:2,value:6},
{id:3,value:8},
{id:4,value:9},

]
}
handleIncrement(counter){
  const newCounters=[...this.state.counters];
  let c={...counter};
  const index=this.state.counters.indexOf(counter)
c.value++;
newCounters[index]=c;
this.setState({counters:newCounters})
}
handleDecrement(counter){
  const newCounters=[...this.state.counters];
  let c={...counter};
  const index=this.state.counters.indexOf(counter)
  c.value--;
  newCounters[index]=c;
  this.setState({counters:newCounters})
}

handleDelete(id){
  const newCounters=this.state.counters.filter((c)=>c.id !==id);
  this.setState({counters:newCounters});
}
handleReset(){
  const newCounters=this.state.counters.map((c)=>({
    id:c.id,
    value:0,
  }))
  this.setState({counters:newCounters});
}
getActiveCountersCount(){
  return this.state.counters.filter((c)=>c.value>0).length;
}
render(){
  return(
<div>
  <NavBar totalActiveCounters={this.getActiveCountersCount()}/>
<main>
  <Counters
  counters={this.state.counters}
  onDelete={this.handleDelete}
  onIncrement={this.handleIncrement}
  onDecrement={this.handleDecrement}
  onReset={this.handleReset}
  
  />
</main>



</div>

  )
}





}

export default App;
