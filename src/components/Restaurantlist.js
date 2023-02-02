import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {
  const [restaurantlist,setRestaurantlist]=useState([])

  //to create a function for API call
  const getRestaurant=async()=>{
    //async await
    await fetch('/restaurants.json')  //Asynchronous call
    .then((data)=>data.json()
      .then((result)=>setRestaurantlist(result.restaurants))
      )
  }
  console.log(restaurantlist);

  useEffect(()=>{
    getRestaurant()
  },[])

  

  return (
    <Row>
      {
        restaurantlist.map((item)=>(
          <Restcard restaurant={item}/>
            
        ))
      }
    </Row>
  )
}

export default Restaurantlist