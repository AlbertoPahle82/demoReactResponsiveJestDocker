import React, { memo, useState } from "react";
import { StepProps } from "../types/dataRegistration";

const Step3 = memo( ({ showEnabled }: StepProps) => {
	const [isReady, setIsReady] = useState(false);
	return (
		<div className={`col-4 bgOrange ${showEnabled ? 'enabled' : 'disabled'}`}>
			<h3>Step 3</h3>
			<p>
				<label htmlFor="readyRock">Are you ready to rock?</label>
				<input disabled={!showEnabled} type="checkbox" id="readyRock" name="readyRock" onChange={event => setIsReady(event.target.checked)}/>
			</p>
			<button id="submitButton" type="submit" disabled={!isReady}>Complete Registration</button> 
		</div>
	);
});

export default Step3;
