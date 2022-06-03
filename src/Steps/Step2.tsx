import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { StepProps } from "../types/dataRegistration";
import IsValid from "./IsValid";

const Step2 = memo( ({ setCurrentStep, showEnabled }: StepProps) => {
	const [hasBadge, setHasBadge] = useState<boolean | undefined>();
	const [hasAccomodation, setHasAccomodation] = useState<boolean | undefined>();
	const [isValid, setIsValid] = useState(false);
	const changeBadgeRadio = (event:ChangeEvent<HTMLInputElement>) => {
		setHasBadge(event.target.value === 'Yes');
	};
	const changeAccomodationRadio = (event:ChangeEvent<HTMLInputElement>) => {
		setHasAccomodation(event.target.value === 'Yes');
	};

	useEffect(() => {
		setIsValid(hasBadge !== undefined && hasAccomodation !== undefined);
	}, [hasBadge, hasAccomodation]);

	useEffect(() => {
		if (isValid) {
			setCurrentStep && setCurrentStep(3);
		}
	}, [isValid]);

	return (
		<div className={`col-4 bgAzure ${showEnabled ? 'enabled' : 'disabled'}`}>
			<h3>Step 2</h3>
			<div className="mb-10 mt-10">
				<span className="font-italic">Would you like your company name on your badges?</span>
				<input disabled={!showEnabled} type="radio" value="Yes" id="badgeYes" name="badge" onChange={event => changeBadgeRadio(event)} />
				<label htmlFor="badgeYes">Yes</label>
				<input disabled={!showEnabled} type="radio" value="No" id="badgeNo" name="badge" onChange={event => changeBadgeRadio(event)} />
				<label htmlFor="badgeNo">No</label>
			</div>
			{
				hasBadge
					&& <div className="mb-10 mt-10">
						<label htmlFor="badgeName">Company name </label><input disabled={!showEnabled} id="badgeName" type="text"/>
					</div>
			}
			<div className="mb-10 mt-10">
				<span className="font-italic">Will anyone in your group require special accomodations?</span>
				<input disabled={!showEnabled} type="radio" value="Yes" id="accomodationYes" name="accomodation" onChange={event => changeAccomodationRadio(event)}/>
				<label htmlFor="accomodationYes">Yes</label>
				<input disabled={!showEnabled} type="radio" value="No" id="accomodationNo" name="accomodation" onChange={event => changeAccomodationRadio(event)}/>
				<label htmlFor="accomodationNo">No</label>
			</div>
			{
				isValid && <IsValid />
			}
		</div>
	);
});

export default Step2;
