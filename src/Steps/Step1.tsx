import React, { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { StepProps } from "../types/dataRegistration";
import IsValid from "./IsValid";

const Step1 = memo( ({ setCurrentStep, showEnabled }: StepProps) => {
	const [attendees, setAttendees] = useState<string[]|never[]>([]);
	const [attendeesNumber, setAttendeesNumber] = useState(0);
	const [isValid, setIsValid] = useState(false);
	const options = Array.from({length: 5}, (e, i) => i + 1);
	const changeAttendeesNum = useCallback((event:ChangeEvent<HTMLSelectElement>) => {
		if (event.target.value !== '') {
			console.info(event.target.value);
			setAttendeesNumber(parseInt(event.target.value));
		}
	}, []);
	
	const changeAttendee = useCallback((event:ChangeEvent<HTMLInputElement>, index:number) => {
		setAttendees(currentState => {
			const newArrayState = [...currentState];
			newArrayState[index] = event.target.value;
			return [...newArrayState];
		})
	}, []);
	
	useEffect(() => {
		const newArray = Array.from({length: attendeesNumber}, () => '');
		setAttendees(newArray);
	}, [attendeesNumber]);
	
	useEffect(() => {
		if (attendees.length === 0 || attendees.some(el => el === "" || el.length < 3)) {
			setIsValid(false)
		} else {
			setIsValid(true)
		}
	}, [attendees]);

	useEffect(() => {
		if (isValid) {
			setCurrentStep && setCurrentStep(2);
		}
	}, [isValid]);

	console.info('ATTENDEEES', attendees, 'ISVALID', isValid);
	return(
		<div className={`col-4 bgGreen ${showEnabled ? 'enabled' : 'disabled'}`}>
			<h3>Step 1</h3>
			<p>
				<label htmlFor="attendeesSelect">How many people will be attending? </label>
				<select id="attendeesSelect" onChange={event => changeAttendeesNum(event)}>
					<option value="">Plase Choose</option>
					{
						options.map((opt, index) => <option value={opt} key={'opt_'+index}>{opt}</option>)
					}
				</select>
			</p>
			{
				attendeesNumber > 0
					&& <div>
						<h4>Please provide full names:</h4>
						{
							attendees?.length > 0 && attendees?.map(
								(att, index) => <div key={'att'+index} className="mb-10">
									<label htmlFor={'attendee_'+index}>Attendee {index+1} Name: </label>
									<input name={'attendee_'+index} type="text" value={attendees[index]} onChange={event => changeAttendee(event, index)} id={'attendee_'+index} />
								</div>
							)
						}
					</div>
			}
			{
				isValid && <IsValid />
			}
		</div>
	)
});

export default Step1;