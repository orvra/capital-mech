import React from "react";
import HeaderHero from "../components/HeaderHero";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import TitleHeader from "../components/TitleHeader";
import AppointmentStep1 from "../components/AppointmentStep1";
import AppointmentStep2 from "../components/AppointmentStep2";
import AppointmentStep3 from "../components/AppointmentStep3";
import { useState, useEffect } from "react";

function BookAppointment({ ...location }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(true);

  //Variable set up for AppointStep1 component
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  //Variable set up for AppointStep2 component
  const [radioButtonValue, setRadioButtonValue] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleRadioChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const [serviceSelected, setServiceSelected] = useState(false);

  const handleServiceSelected = (value) => {
    console.log(value);
    if (value.length >= 1) {
      setServiceSelected(true);
    } else {
      setServiceSelected(false);
    }
  };

  //Variable set up for AppointStep3 component
  const [formSubmitted, setFormSubmitted] = useState(false);

  //Button disable logic
  useEffect(() => {
    isButtonDisabled();
    //console.log(selectedDate, "yamcha", selectedTime);
  }, [
    selectedDate,
    selectedTime,
    serviceSelected,
    radioButtonValue,
    currentStep,
    isError,
  ]);

  const isButtonDisabled = () => {
    if (
      currentStep === 1 &&
      selectedDate !== null &&
      selectedTime !== null &&
      !isError
    ) {
      setButtonDisable(false);
    } else if (
      currentStep === 2 &&
      radioButtonValue !== null &&
      serviceSelected
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  return (
    <div>
      <HeaderHero
        src="/images/hero/appointment_hero.jpg"
        title="Need an appointment? We got you covered."
      />
      <div className="max-w-[1400px] mx-auto px-4 min-[1400px]:px-0">
        <div className="roboto-font py-10 space-y-6">
          <h2 className="text-3xl font-semibold orange">{location.title}</h2>
          <p className="new-line text-gray-500">{location.address}</p>
          <div className="flex items-center space-x-2">
            <BiSolidPhoneCall className="groy text-2xl" />
            <h3 className="groy text-lg font-medium">{location.number}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdMail className="groy text-2xl" />
            <h3 className="groy text-lg font-medium">{location.email}</h3>
          </div>
          <div className="grid grid-cols-3 w-[470px] text-gray-500">
            <p>Monday</p>
            <p>08:00 AM - 06:00 PM</p>
            <p className="row-start-2">Tuesday</p>
            <p className="row-start-2">08:00 AM - 06:00 PM</p>
            <p className="row-start-3">Wednesday</p>
            <p className="row-start-3">08:00 AM - 06:00 PM</p>
            <p className="row-start-4">Thursday</p>
            <p className="row-start-4">08:00 AM - 06:00 PM</p>
            <p className="row-start-5">Friday</p>
            <p className="row-start-5">08:00 AM - 06:00 PM</p>
            <p className="row-start-6">Saturday</p>
            <p className="row-start-6">08:00 AM - 06:00 PM</p>
            <p className="row-start-7">Sunday</p>
            <p className="row-start-7">CLOSED</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center border p-4 rounded shadow space-y-4 mb-10">
          <div className="p-6 rounded-full gray-bg">
            <BsCalendar3 className="white-yellow text-5xl" />
          </div>
          <TitleHeader title="BOOK YOUR APPOINTMENT" />
          <div className="w-full flex justify-around ">
            <div
              className={
                currentStep === 1
                  ? "gray-bg px-5 py-2.5 rounded-full text-lg white-yellow"
                  : "bg-gray-200 text-white px-5 py-2.5 rounded-full text-lg"
              }
            >
              1
            </div>
            <div
              className={
                currentStep === 2
                  ? "gray-bg px-5 py-2.5 rounded-full text-lg white-yellow"
                  : "bg-gray-200 text-white px-5 py-2.5 rounded-full text-lg"
              }
            >
              2
            </div>
            <div
              className={
                currentStep === 3
                  ? "gray-bg px-5 py-2.5 rounded-full text-lg white-yellow"
                  : "bg-gray-200 text-white px-5 py-2.5 rounded-full text-lg"
              }
            >
              3
            </div>
          </div>

          {currentStep === 1 ? (
            <AppointmentStep1
              handleDateChange={handleDateChange}
              selectedDate={selectedDate}
              handleTimeChange={handleTimeChange}
              selectedTime={selectedTime}
              setIsError={setIsError}
            />
          ) : currentStep === 2 ? (
            <AppointmentStep2
              handleServiceSelected={handleServiceSelected}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
              handleRadioChange={handleRadioChange}
              radioButtonValue={radioButtonValue}
            />
          ) : currentStep === 3 ? (
            <AppointmentStep3
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
          ) : null}
          {currentStep != 3 && (
            <button
              className={
                !buttonDisable
                  ? "gray-bg white-yellow w-full font-semibold py-2 px-12 border border-gray-400 rounded shadow-md hover:bg-black"
                  : "bg-gray-200 text-white w-full font-semibold py-2 px-12 border rounded shadow-md"
              }
              onClick={() => {
                currentStep == 3
                  ? setCurrentStep(1)
                  : setCurrentStep(currentStep + 1);
                console.log(currentStep);
              }}
              disabled={buttonDisable}
            >
              NEXT
            </button>
          )}
          {currentStep > 1 && !formSubmitted && (
            <button
              className="gray-bg orange w-full font-semibold py-2 px-12 border b order-gray-400 rounded shadow-md hover:bg-black"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              PREV
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
