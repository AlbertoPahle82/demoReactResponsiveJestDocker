import React, { memo, useState } from 'react';
import './App.css';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
// import { dataRegistration } from './types/dataRegistration';

const App = memo(() => {
	const [currentStep, setCurrentStep] = useState(1);
	/* const [registrationData, setRegistrationData] = useState<dataRegistration>({
		people: [],
		companyNameBadge: null,
		specialAccomodation: null,
		readyToRock: null
	});
	*/
	return (
		<div className="col-12">
			<form>
				<h1>Seminar <span className="color-blue">Registration</span></h1>
				<div className="flex-container">
					<Step1 setCurrentStep={setCurrentStep} showEnabled={true}/>
					<Step2 setCurrentStep={setCurrentStep} showEnabled={currentStep >= 2}/>
					<Step3 showEnabled={currentStep >= 3}/>
				</div>
			</form>
		</div>
	);
});

export default App;
