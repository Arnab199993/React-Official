import React,{useState} from 'react'
import { useEffect } from 'react';
import Lifecycleclass from './Lifecycleclass';

const Lifecycle = () => {
  const [state,setState]=useState(true);


  /**
   * componentDidMount(){

  // you can use these method for your own purpose -->
  //load iniotial data from api -->
  console.log("The component mounted......")

}

counter part in functional components 

useEffect(()=>{

},[])


   */

/**
 * 
 * 
 * 
 *   componentDidUpdate(){
    console.log("The component updated......")

  }
 * 
 * Counter part - 
useEffect(()=>{

})

or 

useEffect(()=>{

},[dependency])





 */

/**
 * 
 * 
  componentWillUnmount(){
   // alert("hello")
    console.log("The component unmounted......")

  }

  counterPart -



useEffect(()=>{

  return ()=>{

    /// this will be called when component gets unmounted -------->
  }

},[])

 */



  const showUnmount=()=>{

    setState(!state);

  }
  return (
    <div>
     <button onClick={showUnmount}>
      Hide Component

     </button>

{
  state?<Lifecycleclass/>:""
}




    </div>
  )
}

export default Lifecycle