import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { generateDate, Months } from "../util/calender";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Events from "../Data/data";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState } from "@devexpress/dx-react-scheduler";

const days = ["S", "M", "T", "W", "T", "F", "S"];

function Booking() {
  const currentDate = dayjs("2021-04-03");
  const [events, setEvents] = useState([]);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [today, setToday] = useState(currentDate);
  useEffect(() => {
    setEvents(Events);
  }, [selectDate]);
  return (
    <>
      <div className="lg:flex lg:w-[75vw]  mx-auto lg:divide-x-2  h-screen items-center lg:mt-0 mt-5 ">
        <div className="w-[50%]">
          <div className="flex">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month()));
              }}
            />
            <div className=" h-5 grid place-content-center">
              <h1 className="font-bold ">
                {Months[today.month() - 1]}, {today.year()}
              </h1>
            </div>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
          <div className=" w-96 grid grid-cols-7">
            {days.map((data) => (
              <p className="font-bold h-14  text-gray-500 grid place-content-center">
                {data}
              </p>
            ))}
          </div>
          <div className="w-96 h-96 grid grid-cols-7 mt-2">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div
                  key={index}
                  className="text-sm font-medium h-14 border-t grid place-content-center cursor-pointer"
                >
                  <p
                    className={`
                   ${currentMonth ? "" : "text-gray-400"} ${
                      today ? " bg-red-600 text-white" : ""
                    }
                  w-10 h-10 grid place-content-center rounded-full hover:bg-black transition-all hover:text-white
                  ${
                    selectDate.toDate().toDateString() ==
                    date.toDate().toDateString()
                      ? "bg-black text-white"
                      : ""
                  }
                `}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="h-full overflow-scroll w-[50%] px-2 mt-7">
          <div className=" w-full">
            <Paper>
              <Scheduler data={events}>
                <ViewState
                  currentDate={`${selectDate.year()}-${selectDate.month()}-${selectDate.date()}`}
                />
                <DayView startDayHour={12} endDayHour={24} />
                <Appointments />
              </Scheduler>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}
export default Booking;
