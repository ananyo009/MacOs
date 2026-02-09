import React, { useState, useEffect } from 'react'
import '../components/datetime.scss'

const Datetime = () => {

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const [date1, setDate1] = useState(0);
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
      // Update immediately on mount
      const updateDateTime = () => {
        const date = new Date();
        setDate1(date.getDate());
        setDay(date.getDay());
        setMonth(date.getMonth());
        setTimeString(
          date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
        );
      };

      updateDateTime();

      // Set up interval to update every second
      const interval = setInterval(updateDateTime, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="date-time">
      <p>{date1}</p>
      <p>{months[month]}</p>
      <p>{days[day]}</p>
      <p>{timeString}</p>
    </div>
  );
}

export default Datetime