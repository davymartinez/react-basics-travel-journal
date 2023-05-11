// eslint-disable-next-line no-unused-vars
import React from "react"
import Header from "./components/Header.jsx"
import Journal from "./components/Journal.jsx"
import data from "./data.jsx"

export default function App() {
    const location = data.map(item => {
        return (
            <>
                <Journal
                    key={item.id} 
                    imageUrl={item.imageUrl}
                    title={item.title}
                    location={item.location}
                    googleMapsUrl={item.googleMapsUrl}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    description={item.description}
                />
                {!(data.lastIndexOf(item) === data.length-1) && <hr />}
            </>
        )
    })
    return (
        <div>
            <Header />
            {location}
        </div>
    )
}