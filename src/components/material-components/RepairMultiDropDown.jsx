import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import repairServices from "../../data/repairServices";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "250",
    },
  },
};

export default function RepairMultiDropDown({
  handleServiceSelected,
  selectedServices,
  setSelectedServices,
}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedServices(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const removeService = (service) => {
    const value = service;
    setSelectedServices(
      selectedServices.filter((currentService) => currentService !== service)
    );
  };

  useEffect(() => {
    handleServiceSelected(selectedServices);
  }, [selectedServices]);

  return (
    <div className="">
      <FormControl sx={{ my: 1, width: 300 }}>
        <InputLabel id="services-multiple-checkbox-label">
          Select a service
        </InputLabel>
        <Select
          labelId="services-multiple-checkbox-label"
          id="services-multiple-checkbox"
          multiple
          value={selectedServices}
          onChange={handleChange}
          input={<OutlinedInput label="Select a service" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {repairServices.map((service) => (
            <MenuItem key={service.id} value={service.title}>
              <Checkbox
                checked={selectedServices.indexOf(service.title) > -1}
              />
              <ListItemText primary={service.title} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="roboto-font">
        {selectedServices.map((service, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <AiOutlineCloseCircle
              className="text-lg hover:text-red-500"
              onClick={() => removeService(service)}
            />
            <p>{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
