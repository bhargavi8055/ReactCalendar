import './App.css';
import CalendarComponent from './CalendarComponent';
import { useState } from 'react';
function App() {
  const [date,setDate]=useState(new Date());
  
 
  return (
    <div className="App">
      <CalendarComponent passedDate={date} />

      
    </div>
  );
}

export default App;
