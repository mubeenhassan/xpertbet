export const showTextEllipsis = (text: string) => {
	if (window.innerWidth < 960 && text.length > 8) {
		return text.slice(0, 8) + '...'
	}
	return text
}
