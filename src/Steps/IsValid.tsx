import React, { memo } from "react";
import doneIcon from './../images/green-check-icon.svg'

const IsValid = memo(() => {
	return (
		<div className="isValid">
			<div className="isValidIcon">
				<img src={doneIcon} alt="is valid!" width="70px" />
			</div>
		</div>
	);
});

export default IsValid;
