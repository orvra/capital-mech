const repairServices = [
    {
      id: 1,
      src: "/images/services/oil_change.jpg",
      title: "Oil Change",
      icon: "ImDroplet",
      para: "Regularly changing your vehicle's oil is crucial for its performance and longevity. Our professional oil change service ensures that your engine stays clean and properly lubricated, preventing unnecessary wear and tear. We use premium synthetic oils that meet the highest industry standards, providing superior protection and enhancing fuel efficiency. Our certified technicians perform a thorough inspection of your vehicle's fluid levels and filters, ensuring that everything is in optimal condition. With our oil change service, you can enjoy peace of mind, knowing that your engine is well taken care of.",
      header: "Our Oil Change Service",
      headerText: "Our oil change service is designed to keep your vehicle's engine running smoothly. With our expert technicians and high-quality oil, we ensure that your engine remains in top condition, providing you with optimal performance and efficiency. We follow a rigorous process to remove the old oil, replace the oil filter, and fill your engine with the right amount of fresh oil. Whether you drive a compact car or a heavy-duty truck, we have the expertise and resources to handle your oil change needs. Maintaining your vehicle's engine through regular oil changes is an investment in its long-term health.",
      subHeader: "Signs your vehicle needs an oil change",
      subHeaderText: "Here are signs that indicate your vehicle may need an oil change:\n\n- Dark or dirty oil\n- Engine knocking sounds\n- Illuminated oil change light on your dashboard\n\nIf you've traveled a significant number of miles since your last oil change, it's advisable to schedule a service. Regular oil changes are essential for preventing engine sludge buildup, reducing friction, and preserving your vehicle's resale value. Don't neglect this vital aspect of car maintenance."
    },
    {
      id: 2,
      src: "/images/services/brake_repair.jpg",
      title: "Brake Repair",
      icon: "IoAlertCircleSharp",
      para: "Regular maintenance of your vehicle's braking system is crucial to ensure safety on the road. Our professional brake repair service covers everything from brake pad replacement to rotor resurfacing. We use high-quality brake components to guarantee optimal performance and stopping power. Whether you hear squeaking or experience reduced braking efficiency, our certified technicians will diagnose and fix the issue, so you can drive with confidence.",
      header: "Our Brake Repair Service",
      headerText: "Our brake repair service is dedicated to keeping your vehicle's brakes in top condition. We provide comprehensive brake inspections and repairs to ensure your safety on the road. From brake pad replacement to rotor resurfacing, we cover it all. Whether you drive a compact car or a heavy-duty truck, our expertise extends to all vehicle types. Don't compromise your safety; trust our team for efficient brake repairs.",
      subHeader: "Signs your vehicle needs brake repair",
      subHeaderText: "Here are signs that indicate your vehicle may need brake repair:\n\n- Squeaking or squealing sounds when braking\n- Reduced braking performance\n- Vibration in the brake pedal\n- Warning lights on the dashboard\n\nIf you experience any of these symptoms, it's essential to have your brakes inspected and repaired promptly for your safety on the road."
    },
    {
      id: 3,
      src: "/images/services/exhaust.jpg",
      title: "Exhaust System Repair",
      icon: "IoCloud",
      para: "Your vehicle's exhaust system plays a vital role in reducing harmful emissions and maintaining engine performance. Our exhaust system repair service covers everything from muffler replacement to exhaust pipe repair. Our certified technicians will diagnose and address issues like excessive noise or increased emissions to keep your vehicle running smoothly.",
      header: "Our Exhaust System Repair Service",
      headerText: "Our exhaust system repair service is designed to ensure your vehicle's exhaust system functions efficiently. We provide comprehensive inspections and repairs, addressing issues like muffler replacement and exhaust pipe repair. Whether you drive a compact car or a heavy-duty truck, our team has the expertise to handle it all. Keep your vehicle running smoothly and environmentally friendly with our exhaust system repair service.",
      subHeader: "Signs your vehicle needs exhaust system repair",
      subHeaderText: "Here are signs that indicate your vehicle may need exhaust system repair:\n\n- Increased exhaust noise\n- Rattling sounds under the vehicle\n- Strong exhaust odors\n- Reduced fuel efficiency\n\nIf you notice any of these symptoms, it's crucial to have your exhaust system inspected and repaired to prevent environmental pollution and maintain engine performance."
    },
    {
      id: 4,
      src: "/images/services/shocks.jpg",
      title: "Suspension Repair",
      icon: "GiSpring",
      para: "A properly functioning suspension system is essential for a smooth and comfortable ride. Our suspension repair service covers shock absorber replacement, strut repair, and more. Whether you experience a bumpy ride or notice uneven tire wear, our expert technicians will diagnose and fix suspension issues to enhance your driving experience.",
      header: "Our Suspension Repair Service",
      headerText: "Our suspension repair service is focused on providing a smooth and comfortable ride. We offer comprehensive suspension inspections and repairs, including shock absorber replacement and strut repair. Whether you drive a compact car or a heavy-duty truck, our team has the expertise to address all suspension issues. Don't compromise your ride quality; trust our experts for suspension repairs.",
      subHeader: "Signs your vehicle needs suspension repair",
      subHeaderText: "Here are signs that indicate your vehicle may need suspension repair:\n\n- Bumpy or uncomfortable ride\n- Uneven tire wear\n- Vehicle nose-dives when braking\n- Vehicle sways or leans during turns\n\nIf you experience any of these symptoms, it's crucial to have your suspension system inspected and repaired to ensure a comfortable and safe ride."
    },
    {
      id: 5,
      src: "/images/services/tire_change.jpg",
      title: "Tire Services",
      icon: "GiCarWheel",
      para: "Maintaining your vehicle's tires is essential for safety and optimal performance. Our tire services cover tire rotation, balancing, and replacement. Whether you need new tires or routine maintenance, our certified technicians will ensure your tires are in top condition, providing you with a smooth and safe ride.",
      header: "Our Tire Services",
      headerText: "Our tire services focus on ensuring your vehicle's tires are in the best condition. We offer tire rotation, balancing, and replacement to maintain safety and performance. Whether you drive a compact car or a heavy-duty truck, our team has the expertise to handle all your tire needs. Trust us for a smooth and safe ride.",
      subHeader: "Signs your vehicle needs tire services",
      subHeaderText: "Here are signs that indicate your vehicle may need tire services:\n\n- Uneven tire wear\n- Vibration in the steering wheel\n- Reduced tire tread depth\n- Frequent tire pressure issues\n\nIf you notice any of these signs, it's essential to have your tires inspected and serviced for a safer and more comfortable driving experience."
    },
    {
      id: 6,
      src: "/images/services/electric_car.jpg",
      title: "Electric Vehicle Support",
      icon: "GiElectric",
      para: "As the popularity of electric vehicles (EVs) grows, we offer comprehensive support for EV owners. Our electric vehicle support includes charging station installation, battery maintenance, and diagnostics. Whether you drive a fully electric or hybrid vehicle, our experts have the knowledge to keep your EV running smoothly.",
      header: "Our Electric Vehicle Support",
      headerText: "We provide comprehensive support for electric vehicle (EV) owners, including charging station installation, battery maintenance, and diagnostics. Whether you drive a fully electric car or a hybrid vehicle, our experts have the expertise to ensure your EV runs smoothly and efficiently. Count on us for all your EV needs.",
      subHeader: "Why choose electric vehicle support",
      subHeaderText: "Choosing our electric vehicle support offers several benefits:\n\n- Convenient charging solutions\n- Extending battery life\n- Maximizing EV performance\n- Expert diagnostics and maintenance\n\nExperience the advantages of electric vehicle ownership with our support services."
    },
    {
      id: 7,
      src: "/images/services/maintenance_package.jpg",
      title: "Maintenance Packages",
      icon: "BsFillBox2HeartFill",
      para: "Regular maintenance is the key to keeping your vehicle in top condition. Our maintenance packages offer a comprehensive approach to vehicle care. Whether you need routine oil changes, filter replacements, or other essential services, we have a package that suits your needs and budget.",
      header: "Our Maintenance Packages",
      headerText: "Our maintenance packages are designed to simplify vehicle care. We offer comprehensive packages that cover routine oil changes, filter replacements, and other essential services. Whether you drive a compact car or a heavy-duty truck, we have the right package to keep your vehicle in top condition. Choose our maintenance packages for peace of mind and optimal vehicle performance.",
      subHeader: "Benefits of our maintenance packages",
      subHeaderText: "Choosing our maintenance packages offers several benefits:\n\n- Convenient and cost-effective\n- Preventive maintenance for longevity\n- Regular inspections for early issue detection\n- Expert care from certified technicians\n\nEnsure your vehicle's health and performance with our maintenance packages."
    },
    {
      id: 8,
      src: "/images/services/alignment.jpg",
      title: "Wheel Alignment",
      icon: "BsAlignMiddle",
      para: "Proper wheel alignment is essential for tire longevity and vehicle handling. Our wheel alignment service ensures that your wheels are correctly aligned, preventing uneven tire wear and improving handling. Whether your vehicle pulls to one side or you've hit a pothole, our certified technicians will align your wheels to perfection.",
      header: "Our Wheel Alignment Service",
      headerText: "Our wheel alignment service is dedicated to ensuring that your vehicle's wheels are correctly aligned. We address issues like uneven tire wear and handling problems by aligning your wheels with precision. Whether you drive a compact car or a heavy-duty truck, our expert technicians can align your wheels to perfection. Trust us for a smoother and safer ride.",
      subHeader: "Signs your vehicle needs wheel alignment",
      subHeaderText: "Here are signs that indicate your vehicle may need wheel alignment:\n\n- Vehicle pulling to one side\n- Uneven tire wear\n- Steering wheel off-center\n- Handling problems\n\nIf you notice any of these signs, it's crucial to have your wheel alignment checked and corrected for safety and performance."
    },
    {
      id: 9,
      src: "/images/services/inspection.jpg",
      title: "Vehicle Inspections",
      icon: "FcInspection",
      para: "Regular vehicle inspections are essential for safety and reliability. Our inspection services cover comprehensive assessments of your vehicle's components, from brakes to lights. Whether you need a pre-purchase inspection or routine maintenance check, our certified technicians ensure that your vehicle is in optimal condition.",
      header: "Our Vehicle Inspection Services",
      headerText: "Our vehicle inspection services focus on safety and reliability. We offer comprehensive assessments of your vehicle's components, including brakes, lights, and more. Whether you're in need of a pre-purchase inspection or routine maintenance check, our certified technicians ensure that your vehicle is in optimal condition. Trust us for peace of mind and a well-maintained vehicle.",
      subHeader: "Why choose vehicle inspections",
      subHeaderText: "Choosing our vehicle inspection services offers several benefits:\n\n- Safety and peace of mind\n- Early issue detection\n- Reliable vehicle performance\n- Expert inspections by certified technicians\n\nEnsure your vehicle is in top condition with our inspection services."
    },
    {
      id: 10,
      src: "/images/services/diagnostic.jpg",
      title: "Diagnostic Services",
      icon: "MdOutlinePermDeviceInformation",
      para: "When your vehicle experiences issues or warning lights, our diagnostic services are your solution. Our expert technicians use state-of-the-art diagnostic equipment to identify and resolve problems. We provide you with detailed reports and expert recommendations to keep your vehicle running smoothly.",
      header: "Our Diagnostic Services",
      headerText: "Our diagnostic services are designed to resolve issues and keep your vehicle running smoothly. We use advanced diagnostic equipment and techniques to identify and resolve problems with precision. Whether you're dealing with warning lights or performance issues, our expert technicians provide detailed reports and recommendations. Count on us for reliable diagnostics and repairs.",
      subHeader: "Why choose diagnostic services",
      subHeaderText: "Choosing our diagnostic services offers several benefits:\n\n- Precise issue identification\n- Expert recommendations\n- Efficient problem resolution\n- Reliable vehicle performance\n\nEnsure your vehicle is problem-free with our diagnostic services."
    },
    {
      id: 11,
      src: "/images/services/hvac.jpg",
      title: "HVAC Service",
      icon: "MdHvac",
      para: "A properly functioning HVAC system is essential for comfortable driving. Our HVAC service covers air conditioning and heating system repairs. Whether you're facing cooling issues in the summer or heating problems in the winter, our certified technicians will diagnose and repair your HVAC system for a comfortable and enjoyable ride.",
      header: "Our HVAC Service",
      headerText: "Our HVAC service is dedicated to providing you with a comfortable driving experience. We offer air conditioning and heating system repairs to address cooling and heating issues. Whether it's the scorching heat of summer or the chill of winter, our expert technicians will ensure your HVAC system is in top condition for a pleasant ride. Trust us for year-round comfort.",
      subHeader: "Signs your vehicle needs HVAC service",
      subHeaderText: "Here are signs that indicate your vehicle may need HVAC service:\n\n- Weak or no airflow from vents\n- Inadequate cooling or heating\n- Unusual odors from the HVAC system\n- Unresponsive climate control\n\nIf you experience any of these symptoms, it's essential to have your HVAC system inspected and repaired for a comfortable and enjoyable ride."
    },
    {
      id: 12,
      src: "/images/services/lights.jpg",
      title: "Lighting and Accessories",
      icon: "FaLightbulb",
      para: "Proper lighting is crucial for vehicle safety and visibility. Our lighting and accessories services cover everything from headlight and taillight replacements to custom lighting upgrades. Whether you need a quick bulb replacement or want to enhance your vehicle's appearance, our certified technicians have you covered.",
      header: "Our Lighting and Accessories Services",
      headerText: "Proper lighting is essential for vehicle safety and style. We offer comprehensive lighting and accessories services, including headlight and taillight replacements and custom lighting upgrades. Whether you need a quick bulb replacement or want to enhance your vehicle's appearance, our certified technicians are ready to assist. Trust us for safe and stylish lighting solutions.",
      subHeader: "Why choose lighting and accessories services",
      subHeaderText: "Choosing our lighting and accessories services offers several benefits:\n\n- Improved safety and visibility\n- Enhanced vehicle appearance\n- Expert installations by certified technicians\n- Custom lighting options\n\nUpgrade your vehicle's lighting and style with our services."
    },
    {
      id: 13,
      src: "/images/services/cooling_system.jpg",
      title: "Cooling System Maintenance",
      icon: "FaThermometerHalf",
      para: "Your vehicle's cooling system is vital for engine temperature control. Our cooling system maintenance service covers radiator repairs, coolant flushes, and thermostat replacements. Whether your engine is running too hot or you need preventive maintenance, our certified technicians will ensure your cooling system is in top condition.",
      header: "Our Cooling System Maintenance Service",
      headerText: "Your vehicle's cooling system is crucial for engine temperature control. We provide comprehensive cooling system maintenance services, including radiator repairs, coolant flushes, and thermostat replacements. Whether your engine is running too hot or you need preventive maintenance, our certified technicians will ensure your cooling system is in top condition. Trust us for a cool and trouble-free engine.",
      subHeader: "Signs your vehicle needs cooling system maintenance",
      subHeaderText: "Here are signs that indicate your vehicle may need cooling system maintenance:\n\n- Engine overheating\n- Low coolant levels or leaks\n- Discolored or dirty coolant\n- Heating system issues\n\nIf you notice any of these symptoms, it's essential to have your cooling system inspected and serviced for a properly functioning engine."
    },
    {
      id: 14,
      src: "/images/services/battery.jpg",
      title: "Battery Care",
      icon: "BiSolidCarBattery",
      para: "A reliable battery is essential for starting your vehicle. Our battery care service includes battery testing, charging, and replacement. Whether your vehicle struggles to start or you want to prevent unexpected breakdowns, our certified technicians will ensure your battery is in excellent condition.",
      header: "Our Battery Care Service",
      headerText: "A reliable battery is crucial for a trouble-free start. We offer comprehensive battery care services, including battery testing, charging, and replacement. Whether your vehicle struggles to start or you want to prevent unexpected breakdowns, our certified technicians will ensure your battery is in excellent condition. Trust us for a reliable and stress-free start.",
      subHeader: "Signs your vehicle needs battery care",
      subHeaderText: "Here are signs that indicate your vehicle may need battery care:\n\n- Slow or weak engine cranking\n- Dashboard warning lights\n- Age of the battery (typically over three years)\n- Frequent jump-starts\n\nIf you experience any of these signs, it's essential to have your battery inspected and serviced for reliable vehicle starting."
    },
    {
      id: 15,
      src: "/images/services/engine.jpg",
      title: "Engine Services",
      icon: "PiEngineFill",
      para: "Your vehicle's engine is the heart of its performance and reliability. Our engine services encompass a wide range of diagnostics, repairs, and maintenance to ensure your engine operates at its best. Whether you're experiencing reduced power, unusual noises, or warning lights on your dashboard, our certified technicians will diagnose and address the issues, restoring your engine's power and efficiency.",
      header: "Our Engine Services",
      headerText: "At the core of your vehicle's performance and reliability lies its engine. Our engine services are comprehensive, including expert diagnostics, repairs, and maintenance. If you encounter issues such as reduced power, unusual noises, or warning lights on your dashboard, our certified technicians will thoroughly diagnose and address the problems, reviving your engine's power and efficiency. Trust us for top-notch engine care.",
      subHeader: "Signs your vehicle needs engine services",
      subHeaderText: "Here are signs that may indicate your vehicle needs engine services:\n\n- Reduced engine power\n- Unusual engine noises\n- Check engine or warning lights\n- Poor fuel efficiency\n\nIf you notice any of these symptoms, it's crucial to have your engine inspected and serviced to ensure optimal vehicle performance and reliability."
    },
  ];
  
  export default repairServices;