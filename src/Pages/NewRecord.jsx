import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function NewRecord() {
    const [date , setDate] = useState("")
    const [bodyTemperature , setBodyTemperature] = useState("")
    const [bloodPressure , setBloodPressure] = useState("")
    const [heartRate , setHeartRate] = useState("")
    const navigate = useNavigate()

    const handleClick = async (e) =>{
        e.preventDefault()
        let data = await fetch('http://localhost:5000/health-records' , {
            method: "post",
            body:JSON.stringify({date , bodyTemperature , bloodPressure , heartRate}),
            headers:{'Content-Type' : 'application/json'}
        })
        let result = await data.json()
        if(result){
            alert('Record added successfully')
            navigate('/')
        }else{
            alert('something went wrong')
        }
    }
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Health Record</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date} onChange={(e)=>{setDate(e.target.value)}}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700">Body Temperature</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Body Temperature"
              value={bodyTemperature} onChange={(e)=>{setBodyTemperature(e.target.value)}}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <select className="mt-1 block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="Celsius">°C</option>
              <option value="Fahrenheit">°F</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">
            Blood Pressure (systolic/diastolic)
          </label>
          <input
            type="text"
            placeholder="120/80"
            value={bloodPressure} onChange={(e)=>{setBloodPressure(e.target.value)}}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700">
            Heart Rate (beats per minute)
          </label>
          <input
            type="number"
            placeholder="Heart Rate"
            value={heartRate} onChange={(e)=>{setHeartRate(e.target.value)}}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         onClick={handleClick}
         >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
