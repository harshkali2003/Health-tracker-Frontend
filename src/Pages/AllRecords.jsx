import React, { useEffect, useState } from "react";
import updatelogo from "../assets/Logo/update.jpg";
import deletelogo from "../assets/Logo/delete.jpg";
import { Link } from "react-router-dom";


export default function AllRecords() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    let result = await fetch("http://localhost:5000/health-records");
    result = await result.json();
    setData(result);
  };

  const deleteRecord = async (id) => {
    let result = await fetch(`http://localhost:5000/health-records/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getResult();
    }
  };


  const handleSearch =async (e) =>{
    let key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json()
      if(result){
        setData(result)
      }
      else{
        getResult()
      }
    }
  }
  return (
    <>
    <div className='flex justify-center items-center bg-gray-100'>
    <input type="text" placeholder="search here" className='border-2 rounded-xl text-red-500' onChange={handleSearch}/>
  </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-4xl p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            All Records
          </h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="table-auto w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600">Date</th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Body Temperature (°F)
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Blood Pressure
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Heart Rate (bpm)
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Edit
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr className="border-b" key={item._id}>
                    <td className="px-4 py-3">{item._id}</td>
                    <td className="px-4 py-3">{item.datOfRecord}</td>
                    <td className="px-4 py-3">{item.bodyTemperature}</td>
                    <td className="px-4 py-3">{item.bloodPressure}</td>
                    <td className="px-4 py-3">{item.heartRate}</td>
                    <td className="px-4 py-3">
                      <button>
                        <Link to={"/update/" +item._id}>
                        <img src={updatelogo} alt="update" className="h-20 w-20" />
                        </Link>
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={()=> deleteRecord(item._id)}>
                        <img
                          src={deletelogo}
                          alt="delete"
                          className="h-20 w-36"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
