'use client';

import { EventInput, EventClickArg, EventContentArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

const events = [
  { title: "현장 점검", start: new Date("2024-7-02") },
  { title: "고객 미팅", start: new Date("2024-7-04") },
  { title: "워크숍", start: new Date("2024-7-22"), end: new Date("2024-7-26") }
];

const renderEventContent=(eventInfo:EventContentArg)=> {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

const Calendar = () => {
  
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
    />
  );
};

export default Calendar;