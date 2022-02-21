import React from "react";
// using this component as View component (Statless)
// 
const Form = (props) => {

    return (

        <form onSubmit={props.getWeather}>
            <input type='text' name="city" placeholder="Enter City" />
            <input type='text' name="country" placeholder="Enter Countery" />
            <button>Get Weather</button>
        </form>

    );

}
export default Form;