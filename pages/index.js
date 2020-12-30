// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import dayName from '../utils/day-name'

export default function Home() {

  const [forecastList, setForecastList] = useState([])
  const [cityname, setCityname] = useState("Dhaka")

  useEffect(async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&units=metric&APPID=3e00ee3cdf8e40b757ebe9e6a03f8f9d`)
    const forecastList = await response.json();
    setForecastList(forecastList.list)
    console.log(forecastList)
  }, [cityname])
  return (
    <div className="sectionPT sectionPB">
      <div className="container">
        <div class="form-group row">
          <label for="staticEmail" class="col-md-3 col-form-label">Choose A Location</label>
          <div class="col-sm-5">
            <select className="form-control mb-5" onChange={e => setCityname(e.target.value)}>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Barishal">Barishal</option>
              <option value="Rangpur">Rangpur</option>
            </select>
          </div>
        </div>
        <div className="row">
          {
            (forecastList.length > 0) ?
              forecastList.map(item => {
                return (
                  <div className="col-md-6 col-lg-4" key={item.dt}>
                    <div className="single_forecast card shadow-sm mb-4 p-3" >
                      <div className="card-body">
                        <div className="top">
                          <h5>{dayName(item.dt)} <span className="temp">{item.temp.min} &#8451; - {item.temp.max} &#8451;</span> </h5>
                          <p>{item.weather[0].main}</p>
                        </div>

                        <Link className="btn" href={{
                          pathname: `forecastdetails/${item.dt}`,
                          query: { data: JSON.stringify(item), cityname },
                        }}>
                          <a className="btn btn-primary btn-sm">More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }) : <p className="loading">Loading...</p>
          }
        </div>
      </div>
    </div>
  )
}
