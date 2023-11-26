import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function AppointmentStep1({
  handleDateChange,
  handleTimeChange,
  selectedDate,
  selectedTime,
  setIsError,
}) {
  const isTimeDisabled = (value, view) => {
    // Disable times that are not 8 AM, 10 AM, 12 PM, 2 PM, or 4 PM
    if (view === "hours") {
      const selectedHour = value ? value.hour() : null;
      const selectedMinute = value ? value.minute() : null;
      const allowedTimes = [
        { hour: 8, minute: 0 },
        { hour: 10, minute: 0 },
        { hour: 12, minute: 0 },
        { hour: 14, minute: 0 },
        { hour: 16, minute: 0 },
      ];

      // Check if the selected hour and minute combination is in the allowed times
      return !allowedTimes.some(
        (time) => time.hour === selectedHour && time.minute === selectedMinute
      );
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
          <TimePicker
            sx={{
              width: "100%",
              "& input": { height: "10px", fontSize: "14px" },
            }}
            onChange={handleTimeChange}
            value={selectedTime}
            timeSteps={{ minutes: 120 }}
            views={["hours", "minutes"]}
            shouldDisableTime={isTimeDisabled}
            ampm={true}
            onError={handleError}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default AppointmentStep1;
