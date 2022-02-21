import React from "react";

//this is stateless component to view
const Weather = (props) => {

    return (
        <div className="info">
            {/* use If condition المختصرة using && operator */}
            {
                props.icon &&
                <img alt="weather-state" style={{ width: '100px' }} src={props.icon} />
            }
            {
                props.city &&
                <p className="info-key">City:
                    <span className="info-value">{props.city} </span>
                </p>
            }
            {
                props.country &&
                <p className="info-key">country:
                    <span className="info-value">{props.country} </span>
                </p>
            }
            {
                props.temperature &&
                <p className="info-key">temperature:
                    <span className="info-value">{props.temperature} </span>
                </p>
            }
            {
                props.humidity &&
                <p className="info-key">humidity:
                    <span className="info-value">{props.humidity} </span>
                </p>
            }
            {
                props.description &&
                <p className="info-key">Description:
                    <span className="info-value">{props.description} </span>
                </p>
            }
            {
                props.erorr &&
                <p className="info-key">Erorr:
                    <span className="info-value">{props.erorr} </span>
                </p>
            }
        </div>

    );

}
export default Weather;