import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function VehicleRadioGroup({
  handleRadioChange,
  radioButtonValue,
}) {
  return (
    <FormControl>
      <FormLabel
        id="vehicle-dropoff-radio-buttons-group-label"
        sx={{ fontFamily: "Roboto Flex Variable" }}
      >
        Vehicle drop off:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="vehicle-dropoff-radio-buttons-group-label"
        name="vehicle-dropoff-buttons-group"
        onChange={handleRadioChange}
        value={radioButtonValue}
      >
        <FormControlLabel
          value="dropping off"
          control={<Radio />}
          label="Dropping off vehicle"
        />
        <FormControlLabel
          value="waiting for vehicle"
          control={<Radio />}
          label="Waiting for vehicle"
        />
      </RadioGroup>
    </FormControl>
  );
}
