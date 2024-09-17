import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data , setData] = useState([])

  useEffect(()=>{
    getResult()
  }, [])

  const getResult =async ()=>{
    let result = await fetch('http://localhost:5000/health-records')
    result = await result.json()
    setData(result)
  }
  return (
  <>
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">  
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Health Record Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Body Temperature (°F)</th>
                <th className="px-4 py-2 text-left text-gray-600">Blood Pressure</th>
                <th className="px-4 py-2 text-left text-gray-600">Heart Rate (bpm)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr className="border-b" key={item._id}>
                  <td className="px-4 py-3">{item.datOfRecord }</td>
                  <td className="px-4 py-3">{item.bodyTemperature}</td>
                  <td className="px-4 py-3">{item.bloodPressure}</td>
                  <td className="px-4 py-3">{item.heartRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}
