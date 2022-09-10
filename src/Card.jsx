import React from "react";


export default function Card (props){
return(

  <div className="card-container">
   <img className="card--img" src={`../images/${props.img}`} alt="..."/>
   <img className="card--star" src="../images/star.png" alt="...."/>

   <div className="card--text">

   <p><b>{props.rating}</b> ({props.count}).{props.country}</p>
   <p>{props.title}</p>
   <p><b>From ${props.price}</b> /price</p>



   </div>


  </div>

)
}