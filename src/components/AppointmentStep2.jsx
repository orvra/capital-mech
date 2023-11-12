import React from "react";
import RepairMultiDropDown from "./material-components/RepairMultiDropDown";
import VehicleRadioGroup from "./material-components/VehicleRadioGroup";

function AppointmentStep2({
  handleRadioChange,
  radioButtonValue,
  handleServiceSelected,
  selectedServices,
  setSelectedServices,
}) {
  return (
    <div className="roboto-font groy pt-6 self-start">
      <p>Select your repair service:</p>
      <RepairMultiDropDown
        handleServiceSelected={handleServiceSelected}
        selectedServices={selectedServices}
        setSelectedServices={setSelectedServices}
      />
      <div className="pt-4">
        <VehicleRadioGroup
          handleRadioChange={handleRadioChange}
          radioButtonValue={radioButtonValue}
        />
      </div>
    </div>
  );
}

export default AppointmentStep2;
