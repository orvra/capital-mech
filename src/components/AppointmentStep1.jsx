import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";

function AppointmentStep1({
  handleDateChange,
  handleTimeChange,
  selectedDate,
  selectedTime,
  setIsError,
}) {
  const isTimeDisabled = (value, view) => {
    if (view === "hours") {
      const selectedHour = value ? value.hour() : null;
      const selectedMinute = value ? value.minute() : null;

      // Check if the selected hour is within the range of 8 AM to 5 PM and minutes are zero
      return !(selectedHour >= 8 && selectedHour <= 17 && selectedMinute === 0);
    }
    return false;
  };

  const isSundayDisabled = (date) => {
    // Create a new Date object from the provided date
    const newDate = new Date(date);

    // Check if the day of the week is Sunday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    return newDate.getDay() === 0;
  };

  const handleError = (error, value) => {
    if (error !== null) {
      console.log(error);
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div className="roboto-font w-full pt-4 groy space-y-4">
      <div>
        <label className="block pb-1">Select a date:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              width: "100%",
              "& input": { height: "10px", fontSize: "14px" },
            }}
            onChange={handleDateChange}
            value={selectedDate}
            disablePast
            onError={handleError}
            shouldDisableDate={isSundayDisabled}
          />
        </LocalizationProvider>
      </div>

      <div>
        <label className="block pb-1">Select a time:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopTimePicker
            sx={{
              width: "100%",
              "& input": { height: "10px", fontSize: "14px" },
            }}
            onChange={handleTimeChange}
            value={selectedTime}
            timeSteps={{ hours: 1, minutes: 60 }}
            views={["hours", "minutes"]}
            shouldDisableTime={isTimeDisabled}
            skipDisabled
            ampm={true}
            onError={handleError}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default AppointmentStep1;
