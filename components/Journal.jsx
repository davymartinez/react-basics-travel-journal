/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Journal(props) {
    return (
        <div className="container">
            <section className="location">
                <img className="location-img" src={props.imageUrl}/>
                <div className="location-right-col">
                    <div className="location-data">
                        <img className="location-icon" src="../images/location-icon.png"/>
                        <p className="location-country">{props.location}</p>
                        <a className="gmaps-link" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="location-title">{props.title}</h1>
                    <h2 className="travel-dates">{props.startDate} - {props.endDate}</h2>
                    <p className="description">
                        {props.description}
                    </p>
                </div>
            </section>
        </div>
    )
}