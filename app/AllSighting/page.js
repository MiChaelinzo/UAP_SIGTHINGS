"use client"

import React, { useEffect, useState } from 'react';

export default function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/getData')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <h1 className="text-5xl text-center text-white font-tektur">All Sightings</h1>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
      </div>

      <div className="overflow-x-auto mx-4">
        <table className='w-full bg-white shadow-md rounded-lg mt-4'>
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-800">
              <th className="py-2 px-4 font-semibold text-sm">Event Date and Time</th>
              <th className="py-2 px-4 font-semibold text-sm">City</th>
              <th className="py-2 px-4 font-semibold text-sm">State Provinces</th>
              <th className="py-2 px-4 font-semibold text-sm">Shape</th>
              <th className="py-2 px-4 font-semibold text-sm">Duration</th>
              <th className="py-2 px-4 font-semibold text-sm">Summary</th>
              <th className="py-2 px-4 font-semibold text-sm">Posted At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`border-b-2 border-gray-800 ${index % 2 === 0 ? 'bg-gray-500' : ''}`}>
                <td className="py-2 px-4 text-sm">{row.event_date_time}</td>
                <td className="py-2 px-4 text-sm">{row.city}</td>
                <td className="py-2 px-4 text-sm">{row.state_provinces}</td>
                <td className="py-2 px-4 text-sm">{row.shape}</td>
                <td className="py-2 px-4 text-sm">{row.duration}</td>
                <td className="py-2 px-4 text-sm">{row.summary}</td>
                <td className="py-2 px-4 text-sm">{row.posted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}