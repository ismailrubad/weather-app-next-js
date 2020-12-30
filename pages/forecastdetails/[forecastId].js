import React from 'react'
import { useRouter } from 'next/router'
import dayName from '../../utils/day-name'

export default function ForecastDetails() {
   const { query } = useRouter();
   console.log(query)
   const weatherData = JSON.parse(query.data);
   function getLocalTime(timestamp) {
      var timestamp = timestamp * 1000;
      return new Date(timestamp).toLocaleTimeString();
   }
   return (
      <div className="sectionPT sectionPB">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="text-ceter mb-5">
                     <h2 className="">{query.cityname}   </h2>
                  </div>
               </div>
               <div className="col-md-8 col-lg-6 col_center">
                  <div className="single_forecast card shadow-sm mb-4 p-3" >
                     <div className="card-body">
                        <div className="top">
                           <h5 className="mb-3">{dayName(weatherData.dt)} <span className="temp">{weatherData.temp.min} &#8451; - {weatherData.temp.max} &#8451;</span> </h5>
                           <p className="mb-1"> <strong>Sky:</strong> {weatherData.weather[0].main}</p>
                           <p className="mb-1"> <strong>Cloud:</strong> {weatherData.clouds}</p>
                           <p className="mb-1"> <strong>Humidity:</strong> {weatherData.humidity} %</p>
                           <p className="mb-1"> <strong>Sunrise:</strong> {getLocalTime(weatherData.sunrise)} </p>
                           <p className="mb-1"> <strong>Sunset:</strong> {getLocalTime(weatherData.sunset)} </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}
