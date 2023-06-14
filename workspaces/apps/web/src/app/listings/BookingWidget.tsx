import { useState } from 'react';

export default function BookingWidget() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  return (
    <div className="mx-auto p-4 bg-gray-50">
      
      <div className="mt-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:[#ff9292] focus:border-[#ff9292] sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:[#ff9292] focus:border-[#ff9292] sm:text-sm"
        />
      </div>
      <button className="w-full py-2 px-4 mt-4 bg-[#ff9292] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff9292] focus:outline-none">
        Book Now
      </button>
    </div>
  );
}