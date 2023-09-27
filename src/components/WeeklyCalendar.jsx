"use client"
import React, { useState, useRef, useEffect } from 'react';
import '@/app/SaudeEBemEstar/global.css';

const WeeklyCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayText, setDayText] = useState({});
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityDays, setActivityDays] = useState([]);
  const [spiritualActivityDays, setSpiritualActivityDays] = useState([]); // Adicionado
  const [calendarData, setCalendarData] = useState({});
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showDuplicatePopup, setShowDuplicatePopup] = useState(false);
  const calendarRef = useRef(null);
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const [selectedPanel, setSelectedPanel] = useState('Saúde Física');

  useEffect(() => {
    localStorage.setItem('selectedActivities', JSON.stringify(selectedActivities))
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleTextChange = (event) => {
    setDayText({ ...dayText, [selectedDay]: event.target.value });
  };

  const handleSelect = (activityType, activity, days) => {
    if (activity && days.length > 0) {
      const updatedCalendarData = { ...calendarData };
      let duplicateFound = false;

      for (const day of days) {
        if (updatedCalendarData[day]) {
          if (updatedCalendarData[day].includes(activity)) {
            duplicateFound = true;
            break;
          }
          updatedCalendarData[day].push(activity);
        } else {
          updatedCalendarData[day] = [activity];
        }
      }

      if (duplicateFound) {
        setShowDuplicatePopup(true);
        calendarRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        setCalendarData(updatedCalendarData);
        setSelectedActivities([...selectedActivities, { activity, days }]);
        setSelectedActivity(null);
        setActivityDays([]);
        setSpiritualActivityDays([]);
      }
    }
  };

  const closeDuplicatePopup = () => {
    setShowDuplicatePopup(false);
  };

  const cancelSelection = () => {
    setSelectedActivity(null);
    setActivityDays([]);
    setSpiritualActivityDays([]);
  };

  const renderSelectOptions = (options) => {
    return options.map((option) => (
      <option key={option} className='bg-white text-black' value={option}>
        {option}
      </option>
    ));
  };

  const [selectedPhysicalActivity, setSelectedPhysicalActivity] = useState(null);
  const [physicalActivityDays, setPhysicalActivityDays] = useState([]);

  const [selectedSpiritualActivity, setSelectedSpiritualActivity] = useState(null);

  const handlePhysicalActivitySelect = (activity) => {
    setSelectedPanel('Saúde Física');
    setSelectedSpiritualActivity(null);
    setSelectedActivity(activity);
  };

  const handleSpiritualActivitySelect = (activity) => {
    setSelectedPanel('Saúde Espiritual');
    setSelectedPhysicalActivity(null);
    setSelectedActivity(activity);
  };

  const handlePhysicalDaySelect = (day) => {
    if (physicalActivityDays.includes(day)) {
      setPhysicalActivityDays(physicalActivityDays.filter((d) => d !== day));
    } else {
      setPhysicalActivityDays([...physicalActivityDays, day]);
    }
  };

  const handleSpiritualDaySelect = (day) => {
    if (spiritualActivityDays.includes(day)) {
      setSpiritualActivityDays(spiritualActivityDays.filter((d) => d !== day));
    } else {
      setSpiritualActivityDays([...spiritualActivityDays, day]);
    }
  };

  const handlePhysicalConfirm = () => {
    handleSelect('Saúde Física', selectedActivity, physicalActivityDays);
  };

  const handleSpiritualConfirm = () => {
    handleSelect('Saúde Espiritual', selectedActivity, spiritualActivityDays);
  };

  // Adicione o estado para controlar a atividade selecionada para exclusão
  const [selectedActivityToDelete, setSelectedActivityToDelete] = useState(null);


  // Crie uma função para lidar com o clique no botão "Excluir" ao lado das atividades selecionadas
  const handleDeleteConfirm = () => {
    if (selectedActivityToDelete) {
      // Remova a atividade dos dias selecionados
      const updatedCalendarData = { ...calendarData };

      for (const day of selectedActivityToDelete.days) {
        if (updatedCalendarData[day]) {
          updatedCalendarData[day] = updatedCalendarData[day].filter(
            (activity) => activity !== selectedActivityToDelete.activity
          );
        }
      }

      setCalendarData(updatedCalendarData);

      // Remova a atividade da lista de atividades selecionadas
      const updatedSelectedActivities = selectedActivities.filter(
        (activityInfo) => activityInfo.activity !== selectedActivityToDelete.activity
      );

      setSelectedActivities(updatedSelectedActivities);
      setSelectedActivityToDelete(null);
    }
  };


  // Crie uma função para cancelar a exclusão
  const handleCancelDelete = () => {
    setSelectedActivityToDelete(null);
  };
  const handleDeleteActivity = (activityInfoToDelete) => {
    if (activityInfoToDelete) {
      // Remova a atividade dos dias selecionados
      const updatedCalendarData = { ...calendarData };

      for (const day of activityInfoToDelete.days) {
        if (updatedCalendarData[day]) {
          updatedCalendarData[day] = updatedCalendarData[day].filter(
            (activity) => activity !== activityInfoToDelete.activity
          );
        }
      }

      setCalendarData(updatedCalendarData);

      // Remova a atividade da lista de atividades selecionadas
      const updatedSelectedActivities = selectedActivities.filter(
        (activityInfo) => activityInfo.activity !== activityInfoToDelete.activity
      );

      setSelectedActivities(updatedSelectedActivities);
    }
  };


  return (
    <div className="text-center text-black p-10 w-75vw mx-auto" ref={calendarRef}>
      <div>
        {selectedActivity ? (
          <div className='flex flex-col justify-center items-center gap-5'>
            <p className='mont text-black text-3xl'>Selecione os dias da semana para: <span className='font-semibold'>{selectedActivity}</span></p>
            <div className='flex gap-2'>
              {daysOfWeek.map((day) => (
                <label key={day} className="mr-2 mont text-2xl">
                  {day}
                  <input
                    className='w-4 h-4'
                    type="checkbox"
                    checked={
                      selectedPanel === 'Saúde Física'
                        ? physicalActivityDays.includes(day)
                        : spiritualActivityDays.includes(day)
                    }
                    onChange={() =>
                      selectedPanel === 'Saúde Física'
                        ? handlePhysicalDaySelect(day)
                        : handleSpiritualDaySelect(day)
                    }
                  />
                </label>
              ))}
            </div>
            <div className='flex gap-10'>
              <button className='bg-[#AF75BF] rounded-3xl p-5 mont text-2xl' onClick={selectedPanel === 'Saúde Física' ? handlePhysicalConfirm : handleSpiritualConfirm}>
                Confirmar
              </button>
              <button className='bg-[#A65C41] rounded-3xl p-5 mont text-2xl' onClick={cancelSelection}>Cancelar</button>
            </div>

          </div>
        ) : (
          <div className='calendariocel flex justify-center items-center gap-20'>
            <select
              className='bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center text-white mont text-2xl h-auto text-center p-4'
              onChange={(e) => handlePhysicalActivitySelect(e.target.value)}
            >
              <option className='bg-white text-black'>Saúde Física</option>
              {renderSelectOptions(['Corrida', 'Natação', 'Musculação', 'Boxe', 'Ciclismo'])}
            </select>

            <select
              className='bg-[#7AA188] rounded-t-3xl w-2/5 flex justify-between items-center text-white mont text-2xl h-auto text-center p-4'
              onChange={(e) => handleSpiritualActivitySelect(e.target.value)}
            >
              <option className='bg-white text-black'>Saúde Espiritual</option>
              {renderSelectOptions(['Meditação', 'Terapia', 'Yoga', 'Auto-reflexão'])}
            </select>
          </div>
        )}
      </div>

      <table className="calendariocelresp table-auto mt-20 text-black">
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

      <div className="mt-10">
        <p className='mont text-black text-3xl'>Atividades Selecionadas:</p>
        <ul>
          {selectedActivities.map((activityInfo, index) => (
            <li
              className='mont text-black text-xl'
              key={index}>
              {activityInfo.activity} - {activityInfo.days.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      {showDuplicatePopup && (
        <div className="flex flex-col mt-5 gap-10">
          <p className='mont underline text-3xl text-red-800'>Já existe uma atividade igual para este dia. Tem certeza de que deseja adicionar novamente?</p>
          <div className='flex justify-center items-center gap-10'>
            <button
              className='bg-[#AF75BF] rounded-3xl p-5 mont text-2xl'
              onClick={selectedPanel === 'Saúde Física' ? handlePhysicalConfirm : handleSpiritualConfirm}
            >
              Confirmar
            </button>
            <button
              className='bg-[#A65C41] rounded-3xl p-5 mont text-2xl'
              onClick={closeDuplicatePopup}>Cancelar</button>
          </div>
        </div>
      )}
      {selectedActivities.map((activityInfo, index) => (
        <li
          className='mont text-black text-xl'
          key={index}>
          {activityInfo.activity} - {activityInfo.days.join(', ')}
          <button
            className='bg-[#A65C41] rounded-3xl p-2 mont text-base ml-3'
            onClick={() => handleDeleteActivity(activityInfo)}>
            Excluir
          </button>
        </li>
      ))}



    </div>
  );
};

export default WeeklyCalendar;