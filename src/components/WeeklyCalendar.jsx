"use client"
// Commit
import React, { useState, useRef } from 'react';

const WeeklyCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayText, setDayText] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityDays, setActivityDays] = useState([]);
  const [calendarData, setCalendarData] = useState({});
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showDuplicatePopup, setShowDuplicatePopup] = useState(false);
  const calendarRef = useRef(null);
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [selectedPanel, setSelectedPanel] = useState('Saúde Física');

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleTextChange = (event) => {
    setDayText({ ...dayText, [selectedDay]: event.target.value });
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  const handleDaySelect = (day) => {
    if (activityDays.includes(day)) {
      setActivityDays(activityDays.filter((d) => d !== day));
    } else {
      setActivityDays([...activityDays, day]);
    }
  };

  const handleConfirm = () => {
    if (selectedActivity && activityDays.length > 0) {
      const updatedCalendarData = { ...calendarData };
      let duplicateFound = false;

      for (const day of activityDays) {
        if (updatedCalendarData[day]) {
          if (updatedCalendarData[day].includes(selectedActivity)) {
            duplicateFound = true;
            break;
          }
          updatedCalendarData[day].push(selectedActivity);
        } else {
          updatedCalendarData[day] = [selectedActivity];
        }
      }

      if (duplicateFound) {
        setShowDuplicatePopup(true);
        calendarRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        setCalendarData(updatedCalendarData);
        setSelectedActivities([...selectedActivities, { activity: selectedActivity, days: [...activityDays] }]);
        setSelectedActivity(null);
        setActivityDays([]);
      }
    }
  };

  const closeDuplicatePopup = () => {
    setShowDuplicatePopup(false);
  };

  const cancelSelection = () => {
    setSelectedActivity(null);
    setActivityDays([]);
  };

  return (
    <div className="text-center text-black p-10 w-75vw mx-auto" ref={calendarRef}>
      <div>
        {selectedActivity ? (
          <div>
            <p>Selecione os dias da semana para: {selectedActivity}</p>
            {daysOfWeek.map((day) => (
              <label key={day} className="mr-2">
                {day}
                <input
                  type="checkbox"
                  checked={activityDays.includes(day)}
                  onChange={() => handleDaySelect(day)}
                />
              </label>
            ))}
            <button onClick={handleConfirm}>Confirmar</button>
            <button onClick={cancelSelection}>Cancelar</button>
          </div>
        ) : (
          <div>
            <p>Selecione uma atividade:</p>
            <select onChange={(e) => handleActivitySelect(e.target.value)}>
              <option value="">Selecione uma atividade</option>
              <option value="Corrida">Corrida</option>
              <option value="Natação">Natação</option>
              <option value="Musculação">Musculação</option>
              <option value="Boxe">Boxe</option>
              <option value="Ciclismo">Ciclismo</option>
              <option value="Meditação" className="text-slate-700">Meditação</option>
              <option value="Terapia" className="text-slate-700">Terapia</option>
              <option value="Yoga" className="text-slate-700">Yoga</option>
              <option value="Auto-reflexão" className="text-slate-700">Auto-reflexão</option>
            </select>
          </div>
        )}
      </div>

      <table className="table-auto mt-4 text-black">
        <thead>
          <tr className="bg-[#AF75BF]">
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
                className={`px-20 py-20 bg-[#FFFDFD] border-2 border-gray-400 my-2 mx-2 ${selectedActivity && 'text-slate-900'}`}
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
                  dayText[day] || (
                    calendarData[day] ? (
                      <div className="activity-marker">
                        {calendarData[day].map((activity, index) => (
                          <div key={index}>Atividade: {activity}</div>
                        ))}
                      </div>
                    ) : ''
                  )
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <p>Atividades Selecionadas:</p>
        <ul>
          {selectedActivities.map((activityInfo, index) => (
            <li key={index}>
              {activityInfo.activity} - {activityInfo.days.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      {showDuplicatePopup && (
        <div className="popup">
          <p>Já existe uma atividade igual para este dia. Tem certeza de que deseja adicionar novamente?</p>
          <button onClick={closeDuplicatePopup}>Cancelar</button>
          <button onClick={handleConfirm}>Confirmar</button>
        </div>
      )}
    </div>
  );
};

export default WeeklyCalendar;
