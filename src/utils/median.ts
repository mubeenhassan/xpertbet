export const getMedianValue = (valueOne: number, valueTwo: number) => {
	const median = (valueOne + valueTwo) / 2
	return Math.round(median)
}

export const getExactMedianValue = (valueOne: number, valueTwo: number) => {
	const median = (valueOne + valueTwo) / 2
	return median
}
