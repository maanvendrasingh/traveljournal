import React from "react";
import locationicon from "../images/location-icon.png";


export default function Card(props) {
  return (
    <section>
      <div className="section">
        <div className="section-header">
          <img src={props.item.imageUrl} className="section-icon" />

          <div className="section-content">
            <img
              src={locationicon}
              className="section-nav-icon"
            />
            <span className="section-country">{props.item.location}</span>
            <a target="_blank" href={props.item.googleMapsUrl}>
              <span className="section-location">View on Google Maps</span>
            </a>

            <h1>{props.item.title}</h1>
            <p className="section-date">
              <b>{props.item.startDate} - {props.item.endDate}</b>
            </p>
            <p className="section-desc">
              {props.item.description}
            </p>
          </div>
        </div>
        <hr></hr>
      </div>
    </section>
  );
}
