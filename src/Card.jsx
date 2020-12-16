import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Card = () => {
    let [val, i] = useState("");
    let [city, i1] = useState({ name: "", temp: "" });
    useEffect(async () => {
        try {
            let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=4b9e98115ec924b5a412bd007974b309`)
            console.log(data.data.main.temp);
            i1({ name: val, temp: data.data.main.temp });
        }
        catch {
            if (val != "") {
                console.log("error");
                i1({ name: "oops data not found", temp: "" });
            }
            else {
                i1({ name: "", temp: "" })
            }
        }
    }, [val])
    const fun = (e) => {
        i(e.target.value);
    }
    return (
        <>
            <div className="container">
                <div className="row m-sm-5">
                    <div className="col-md-6 m-auto cardd shadow rounded">
                        <form>
                            <h1 className="text-center text-black-50">Weather App</h1>
                            <input type="search" className="form-control" onChange={fun} value={val} />
                            <h3 className="text-center text-black-50 text-justify my-3">{city.name}</h3>
                            <p className="text-center text-black-50 text-justify">{city.temp}</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;