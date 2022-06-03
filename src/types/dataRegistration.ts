export type dataRegistration = {
	people: string[]|null,
	companyNameBadge: string|null,
	specialAccomodation: string|null,
	readyToRock: boolean|null
}

export type setDataRegistration<dataRegistration> = dataRegistration | ((prevState: dataRegistration) => dataRegistration);

export type StepProps = {
	setCurrentStep?: (step:number) => void | undefined
    showEnabled: boolean
}