import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import DateRangePickerExporter from './components/DateRangePickerExporter';
import { DateRange } from './types';

function App() {

  const [open, setOpen] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | null>(null)

  console.log("dateRange =", dateRange)

  const cancelRangePicker = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Show Date Range</button>
      <DateRangePickerExporter open={open} toggle={() => setOpen(!open)} onChange={(range: DateRange) => setDateRange(range)} onCancel={cancelRangePicker} />
    </div>
  );
}

export default App;
