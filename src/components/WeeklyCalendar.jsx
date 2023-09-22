"use client"
import React, { useState } from 'react';

const WeeklyCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayText, setDayText] = useState({});
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleTextChange = (event) => {
    setDayText({ ...dayText, [selectedDay]: event.target.value });
  };

  return (
    <div className="text-center text-black p-10">
      <table className="table-auto mt-4 text-black">
        <thead>
          <tr className='bg-[#AF75BF]'>
            {daysOfWeek.map((day) => (
              <th key={day} className="px-10 py-2 border-2 border-gray-400">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {daysOfWeek.map((day) => (
              <td
                key={day}
                className={`px-10 py-20 bg-[#FFFDFD] border-2 border-gray-400 my-2 mx-2`}
                onClick={() => handleDayClick(day)}
              >
                {selectedDay === day ? (
                  <textarea
                    value={dayText[selectedDay] || ''}
                    onChange={handleTextChange}
                    onBlur={() => setSelectedDay(null)}
                    autoFocus
                  />
                ) : (
                  dayText[day] || ''
                )}
              </td>
            ))}
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyCalendar;
