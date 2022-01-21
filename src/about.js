import { Component } from "react";
import axios from 'axios';
import './about.css';
class About extends Component
{
    constructor()
    {
        super();  
        //state
        this.state={ name :"rameshchennai"};
       this.state={
           box:[]
       }
      //  this.state={ elements:[]};
        
      //  console.log(this.props.address);
        
       //alert(address);

    }

    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(x=>this.setState({box:x.data}))
        // axios.get("https://jsonplaceholder.typicode.com/posts").then(x=>{this.setState({elements:x.data})})
        // .catch(err=>console.log(err));
    }

    ss=()=>{
       this.setState({name:"rameshkaraikudi"})
   }
    render()
    {

        
        //const {getvalue}=this.state;
        return(<div>
            {this.state.box.map(list=><div  key={list.id} >{list.body}</div>)}
   {/* {this.state.elements.map(home => <div key={home.id}>{home.body}</div>)} */}

            <h1>pudukkottai&&{this.props.address}</h1>
            {/* <h2>{this.state.name}</h2>
            {this.state} */}
            <button onClick={this.ss}>change</button>
        </div>)
    }
}

export default About