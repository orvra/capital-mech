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
}) {
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
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default AppointmentStep1;
