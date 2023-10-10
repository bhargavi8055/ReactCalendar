
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
function getCustomWeekdays() {
    const weekdays = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
       
    return weekdays;
  }
export default function CalendarComponent({passedDate}){
    
    const customWeekdays = getCustomWeekdays();
    // console.log(customWeekdays,date.getDay())
    const [date,setDate]=useState(passedDate);
    const onChange =(date)=>{
        setDate(date);
        const customWeekdays = getCustomWeekdays();
      }
   
    return(
        <>
           <Calendar onChange={onChange} value={passedDate} calendarType='US' formatShortWeekday={(locale, date) => customWeekdays[date.getDay()]}/>
        </>
    );

}

  
  