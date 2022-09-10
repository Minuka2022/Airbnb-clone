import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/


export default function App() {
    const cards = data.map(items => {
        return (
            <Card
              img = {items.coverImg}
              rating={items.stats.rating}
              count={items.stats.reviewCount}
              country={items.location}
              title={items.title}
              price={items.price}
            />
        )
    })

        
    
    return (
        <div>
            <Navbar/>
            <Hero/>
            {cards}
        </div> 
    )
}