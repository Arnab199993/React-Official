import React, { Component } from 'react'

 class  Lifecycleclass extends Component {

  constructor(){
    super();

     // 

     this.state={
      name:"",
      input:""
     }

  }



  // Lifecycle Observation ---->

  // Three life cycle phases
  // Mounting --->
  //Gets called only once during the lifecycle
componentDidMount(){

  // you can use these method for your own purpose -->
  //load iniotial data from api -->
  console.log("The component mounted......")

}
  // Updation 

  componentDidUpdate(){
    console.log("The component updated......")

  }
  // Unmounting 


  componentWillUnmount(){
   // alert("hello")
   // api call again to tell the backedn 
    console.log("The component unmounted......")

  }



  handleClick=()=>{

    this.setState({...this.state,name:"Johnny"})

  }

  handleChange=(event)=>{
    this.setState({...this.state,input:event.target.value})

  }




  render() {
    return (
      <div>

        <h1>Life Cycle Class Component</h1>
        {this.state.name}
        {this.state.input}
      <input type="text" onChange={this.handleChange} />

        <button onClick={this.handleClick} >
          Click ME
        </button>
      </div>
    )
  }
}

export default Lifecycleclass