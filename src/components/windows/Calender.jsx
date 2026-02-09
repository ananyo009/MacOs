import React from 'react'
import Window from './window'
import "./calender.scss"

const Calender = ({windowname,windowstate ,setwindowstate}) => {
  return (
      <Window windowname={windowname} setwindowstate={setwindowstate} width='55vw'>
          <div className="calender-view">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FKolkata&showPrint=0&src=YW5hbnlvbWl0cmEzMTBAZ21haWwuY29t&src=MWMzNjEwNzg2ZGYwYjg4ZjNkMDE5NWYxZWFjMDc2Zjg5N2RkNWQ5ZjVhZGQ3MzQ1NTljMjhlNzVkY2NkMGMxNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23d50000&color=%230b8043"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="yes"
        title="Google Calendar"
              ></iframe>
          </div>
    </Window>
  );
}

export default Calender