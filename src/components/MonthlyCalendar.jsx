"use client"

import React, { useState } from 'react';

const MonthlyCalendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const weeks = [];

  let currentWeek = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    currentWeek.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const changeMonth = (increment) => {
    const newDate = new Date(year, month + increment);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth());
  };

  return (
    
    <div className="flex flex-col text-center mt-6 text-black">
      <div className="flex justify-between items-center">
        <button
          className="text-black hover:text-black"
          onClick={() => changeMonth(-1)}
        >
          &#8249; Mês Anterior
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[month]} {year}
        </h2>
        <button
          className="text-black hover:text-gray-800"
          onClick={() => changeMonth(1)}
        >
          Próximo Mês &#8250;
        </button>
      </div>
      <table className="table-auto mt-4 text-black">
        <thead>
          <tr className='bg-[#AF75BF]'>
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                // É nessa tag th que muda o espaçamento entre os dias
                // O px muda o espaçamento entre uma segunda e uma terça
              <th key={day} className="px-10 py-2">  
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          {weeks.map((week, index) => (
            <tr key={index} className=''>
              {week.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                //Aqui nós alteramos as div dos dias   
                  className={`px-10 py-10 bg-[#FFFDFD] border-2 border-gray-400  my-2 mx-2 ${
                    day === null ? 'text-black' : ''
                  }`}
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyCalendar;
