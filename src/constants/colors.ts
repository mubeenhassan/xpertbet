const GOALS_AVERAGE_COLOR = {
	'3.5': '#63be7b',
	'3.4': '#6fc27c',
	'3.3': '#7bc57d',
	'3.2': '#87c97e',
	'3.1': '#93cc7e',
	'3': '#9fd07f',
	'2.9': '#abd380',
	'2.8': '#b7d780',
	'2.7': '#c3da81',
	'2.6': '#cfde82',
	'2.5': '#dbe182',
	'2.4': '#e7e583',
	'2.3': '#f3e884',
	'2.2': '#ffeb84',
	'2.1': '#fede81',
	'2': '#fdd17f',
	'1.9': '#fcc47c',
	'1.8': '#fcb77a',
	'1.7': '#fbaa77',
	'1.6': '#fa9d75',
	'1.5': '#fa9072',
	'1.4': '#f98370',
	'1.3': '#f8766d',
	'1.2': '#f8696b'
} as { [key: string]: string }

export function getGoalColor(value: number) {
	if (value <= 1.2) return GOALS_AVERAGE_COLOR['1.2']
	if (value >= 3.5) return GOALS_AVERAGE_COLOR['3.5']

	const roundedValue = Math.floor(value * 10) / 10
	const key = String(roundedValue)
	return GOALS_AVERAGE_COLOR[key]
}

const CORNERS_AVERAGE_COLOR = {
	'12': '#63be7b',
	'11.9': '#69c07c',
	'11.8': '#6ec27c',
	'11.7': '#74c37c',
	'11.6': '#79c57d',
	'11.5': '#7ec67d',
	'11.4': '#84c87d',
	'11.3': '#89c97e',
	'11.2': '#8fcb7e',
	'11.1': '#94cc7e',
	'11': '#99ce7f',
	'10.9': '#9fd07f',
	'10.8': '#a4d17f',
	'10.7': '#a9d380',
	'10.6': '#afd480',
	'10.5': '#b4d680',
	'10.4': '#bad780',
	'10.3': '#bfd981',
	'10.2': '#c4da81',
	'10.1': '#cadc81',
	'10': '#cfde82',
	'9.9': '#d4df82',
	'9.8': '#dae182',
	'9.7': '#dfe283',
	'9.6': '#e5e483',
	'9.5': '#eae583',
	'9.4': '#efe784',
	'9.3': '#f5e884',
	'9.2': '#faea84',
	'9.1': '#ffeb84',
	'9': '#fee282',
	'8.9': '#feda80',
	'8.8': '#fdd27f',
	'8.7': '#fdca7d',
	'8.6': '#fcc27c',
	'8.5': '#fcba7a',
	'8.4': '#fbb279',
	'8.3': '#fbaa77',
	'8.2': '#fba175',
	'8.1': '#fa9974',
	'8': '#fa9172',
	'7.9': '#f98971',
	'7.8': '#f9816f',
	'7.7': '#f8796e',
	'7.6': '#f8716c',
	'7.5': '#f8696b'
} as { [key: string]: string }

export function getCornersAverageColor(value: number) {
	if (value < 7.6) return CORNERS_AVERAGE_COLOR['7.6']
	if (value > 12) return CORNERS_AVERAGE_COLOR['12']

	const roundedValue = Math.floor(value * 10) / 10
	const key = String(roundedValue)
	return CORNERS_AVERAGE_COLOR[key]
}

export const PERCENTAGE_COLOR = {
	'100': '#63be7b',
	'99': '#63be7b',
	'98': '#63be7b',
	'97': '#63be7b',
	'96': '#63be7b',
	'95': '#63be7b',
	'94': '#63be7b',
	'93': '#63be7b',
	'92': '#63be7b',
	'91': '#63be7b',
	'90': '#63be7b',
	'89': '#67c07c',
	'88': '#6bc17c',
	'87': '#6fc27c',
	'86': '#73c37c',
	'85': '#77c47d',
	'84': '#7bc57d',
	'83': '#7bc57d',
	'82': '#83c77d',
	'81': '#83c77d',
	'80': '#8aca7e',
	'79': '#8ecb7e',
	'78': '#92cc7e',
	'77': '#96cd7e',
	'76': '#9ace7f',
	'75': '#9ecf7f',
	'74': '#a2d07f',
	'73': '#a6d27f',
	'72': '#aad380',
	'71': '#aed480',
	'70': '#b1d580',
	'69': '#b5d680',
	'68': '#b9d780',
	'67': '#bdd881',
	'66': '#c1da81',
	'65': '#c5db81',
	'64': '#c9dc81',
	'63': '#cddd82',
	'62': '#d1de82',
	'61': '#d5df82',
	'60': '#d8e082',
	'59': '#dce182',
	'58': '#e0e383',
	'57': '#e4e483',
	'56': '#e8e583',
	'55': '#ece683',
	'54': '#f0e784',
	'53': '#f4e884',
	'52': '#f8e984',
	'51': '#fcea84',
	'50': '#ffeb84',
	'49': '#fee783',
	'48': '#fee482',
	'47': '#fee182',
	'46': '#fede81',
	'45': '#feda80',
	'44': '#fdd780',
	'43': '#fdd47f',
	'42': '#fdd17f',
	'41': '#fdcd7e',
	'40': '#fdca7d',
	'39': '#fdc77d',
	'38': '#fcc47c',
	'37': '#fcc07b',
	'36': '#fcbd7b',
	'35': '#fcba7a',
	'34': '#fcb77a',
	'33': '#fcb379',
	'32': '#fbb078',
	'31': '#fbad78',
	'30': '#fbaa77',
	'29': '#fba676',
	'28': '#fba376',
	'27': '#faa075',
	'26': '#fa9d75',
	'25': '#fa9974',
	'24': '#fa9673',
	'23': '#fa9673',
	'22': '#fa9072',
	'21': '#f98c71',
	'20': '#f98971',
	'19': '#f98670',
	'18': '#f98370',
	'17': '#f97f6f',
	'16': '#f97c6e',
	'15': '#f8796e',
	'14': '#f8766d',
	'13': '#f8726c',
	'12': '#f86f6c',
	'11': '#f86c6b',
	'10': '#f8696b',
	'9': '#f8696b',
	'8': '#f8696b',
	'7': '#f8696b',
	'6': '#f8696b',
	'5': '#f8696b',
	'4': '#f8696b',
	'3': '#f8696b',
	'2': '#f8696b',
	'1': '#f8696b',
	'0': '#f8696b'
} as { [key: string]: string }

const YELLOW_CARDS_AVERAGE_COLOR = {
	'5.5': '#63be7b',
	'5.4': '#70c27c',
	'5.3': '#7cc67d',
	'5.2': '#89c97e',
	'5.1': '#95cd7e',
	'5': '#a2d07f',
	'4.9': '#aed480',
	'4.8': '#bbd881',
	'4.7': '#c7db81',
	'4.6': '#d4df82',
	'4.5': '#e0e383',
	'4.4': '#ede683',
	'4.3': '#f9ea84',
	'4.2': '#fee582',
	'4.1': '#fedb80',
	'4': '#fdd17f',
	'3.9': '#fdc67d',
	'3.8': '#fcbc7b',
	'3.7': '#fbb179',
	'3.6': '#fba777',
	'3.5': '#fa9d75',
	'3.4': '#fa9273',
	'3.3': '#f98871',
	'3.2': '#f97d6f',
	'3.1': '#f8736d',
	'3': '#f8696b'
} as { [key: string]: string }

export function getYellowCardsAverageColor(value: number) {
	if (value < 3.1) return YELLOW_CARDS_AVERAGE_COLOR['3.1']
	if (value > 5.5) return YELLOW_CARDS_AVERAGE_COLOR['5.5']
	if (value >= 5.4) return YELLOW_CARDS_AVERAGE_COLOR['5.4']

	const roundedValue = Math.floor(value * 10) / 10
	const key = String(roundedValue)
	return YELLOW_CARDS_AVERAGE_COLOR[key]
}

const PPG_COLOR_SCHEME = {
	'0.9': '#f97a65',
	'1': '#fa8c5f',
	'1.1': '#fb9e59',
	'1.2': '#fcaf53',
	'1.3': '#fdc14d',
	'1.4': '#ffd347',
	'1.5': '#e0cf51',
	'1.6': '#c1cb5b',
	'1.7': '#a2c766',
	'1.8': '#83c370',
	'1.9': '#63be7b'
} as { [key: string]: string }

export function getPPGColor(value: number) {
	if (value < 0.9) return '#f8696b'
	if (value >= 1.9) return '#63be7b'

	const roundedValue = Math.floor(value * 10) / 10
	const key = String(roundedValue)
	return PPG_COLOR_SCHEME[key]
}

export const WDL_COLOR_SCHEME = {
	V: '#24b424',
	E: '#ffc000',
	Î: '#b40f04'
} as { [key: string]: string }

const MEDIE_GOLURI_COLOR_SCHEME = {
	'3.5': '#63be7b',
	'3.4': '#6fc27c',
	'3.3': '#7bc57d',
	'3.2': '#87c97e',
	'3.1': '#93cc7e',
	'3': '#9fd07f',
	'2.9': '#abd380',
	'2.8': '#b7d780',
	'2.7': '#c3da81',
	'2.6': '#cfde82',
	'2.5': '#dbe182',
	'2.4': '#e7e583',
	'2.3': '#f3e884',
	'2.2': '#ffeb84',
	'2.1': '#fede81',
	'2': '#fdd17f',
	'1.9': '#fcc47c',
	'1.8': '#fcb77a',
	'1.7': '#fbaa77',
	'1.6': '#fa9d75',
	'1.5': '#fa9072',
	'1.4': '#f98370',
	'1.3': '#f8766d'
} as { [key: string]: string }

export function getMedieGoluriColor(value: number) {
	if (value > 3.5) return '#63be7b'
	if (value < 1.3) return '#f8696b'

	const valueKeys = Object.keys(MEDIE_GOLURI_COLOR_SCHEME)
		.map(parseFloat)
		.sort((a, b) => b - a)

	for (let i = 0; i < valueKeys.length - 1; i++) {
		if (value > valueKeys[i + 1] && value <= valueKeys[i]) {
			return MEDIE_GOLURI_COLOR_SCHEME[valueKeys[i].toString()]
		}
	}

	return '#f8696b'
}

const xG_COLOR_SCHEME = [
	{ upperBound: 0.6, color: '#f8696b' },
	{ upperBound: 0.7, color: '#f97e6f' },
	{ upperBound: 0.8, color: '#fa9473' },
	{ upperBound: 0.9, color: '#fbaa77' },
	{ upperBound: 1, color: '#fcbf7b' },
	{ upperBound: 1.0, color: '#fcbf7b' },
	{ upperBound: 1.1, color: '#fdd57f' },
	{ upperBound: 1.2, color: '#ffeb84' },
	{ upperBound: 1.3, color: '#e6e483' },
	{ upperBound: 1.4, color: '#ccdd82' },
	{ upperBound: 1.5, color: '#b2d580' },
	{ upperBound: 1.6, color: '#98ce7f' },
	{ upperBound: 1.7, color: '#8aca7e' },
	{ upperBound: 1.8, color: '#7dc67d' },
	{ upperBound: Infinity, color: '#63be7b' }
]

export function getXGColor(value: number) {
	for (const { upperBound, color } of xG_COLOR_SCHEME) {
		if (value < upperBound) {
			return color
		}
	}
	return '#f8696b'
}

const PERCENTAGE_STAT_COLOR = {
	'90': '#63be7b',
	'89': '#67c07c',
	'88': '#6bc17c',
	'87': '#6fc27c',
	'86': '#73c37c',
	'85': '#77c47d',
	'84': '#7bc57d',
	'83': '#7bc57d',
	'82': '#83c77d',
	'81': '#83c77d',
	'80': '#8aca7e',
	'79': '#8ecb7e',
	'78': '#92cc7e',
	'77': '#96cd7e',
	'76': '#9ace7f',
	'75': '#9ecf7f',
	'74': '#a2d07f',
	'73': '#a6d27f',
	'72': '#aad380',
	'71': '#aed480',
	'70': '#b1d580',
	'69': '#b5d680',
	'68': '#b9d780',
	'67': '#bdd881',
	'66': '#c1da81',
	'65': '#c5db81',
	'64': '#c9dc81',
	'63': '#cddd82',
	'62': '#d1de82',
	'61': '#d5df82',
	'60': '#d8e082',
	'59': '#dce182',
	'58': '#e0e383',
	'57': '#e4e483',
	'56': '#e8e583',
	'55': '#ece683',
	'54': '#f0e784',
	'53': '#f4e884',
	'52': '#f8e984',
	'51': '#fcea84',
	'50': '#ffeb84',
	'49': '#fee783',
	'48': '#fee482',
	'47': '#fee182',
	'46': '#fede81',
	'45': '#feda80',
	'44': '#fdd780',
	'43': '#fdd47f',
	'42': '#fdd17f',
	'41': '#fdcd7e',
	'40': '#fdca7d',
	'39': '#fdc77d',
	'38': '#fcc47c',
	'37': '#fcc07b',
	'36': '#fcbd7b',
	'35': '#fcba7a',
	'34': '#fcb77a',
	'33': '#fcb379',
	'32': '#fbb078',
	'31': '#fbad78',
	'30': '#fbaa77',
	'29': '#fba676',
	'28': '#fba376',
	'27': '#faa075',
	'26': '#fa9d75',
	'25': '#fa9974',
	'24': '#fa9673',
	'23': '#fa9673',
	'22': '#fa9072',
	'21': '#f98c71',
	'20': '#f98971',
	'19': '#f98670',
	'18': '#f98370',
	'17': '#f97f6f',
	'16': '#f97c6e',
	'15': '#f8796e',
	'14': '#f8766d',
	'13': '#f8726c',
	'12': '#f86f6c',
	'11': '#f86c6b'
} as { [key: string]: string }

export function getStatPercentageColor(value: number) {
	if (value > 90) return '#63be7b'
	if (value < 11) return '#f8696b'

	const valueKeys = Object.keys(PERCENTAGE_STAT_COLOR)
		.map(parseFloat)
		.sort((a, b) => b - a)

	for (let i = 0; i < valueKeys.length; i++) {
		if (value >= valueKeys[i]) {
			return PERCENTAGE_STAT_COLOR[valueKeys[i].toString()]
		}
	}

	return '#f8696b'
}

const MEDIE_CORNERS_COLOR = {
	'12.0': '#63be7b',
	'11.9': '#69c07c',
	'11.8': '#6ec27c',
	'11.7': '#74c37c',
	'11.6': '#79c57d',
	'11.5': '#7ec67d',
	'11.4': '#84c87d',
	'11.3': '#89c97e',
	'11.2': '#8fcb7e',
	'11.1': '#94cc7e',
	'11.0': '#99ce7f',
	'10.9': '#9fd07f',
	'10.8': '#a4d17f',
	'10.7': '#a9d380',
	'10.6': '#afd480',
	'10.5': '#b4d680',
	'10.4': '#bad780',
	'10.3': '#bfd981',
	'10.2': '#c4da81',
	'10.1': '#cadc81',
	'10': '#cfde82',
	'9.9': '#d4df82',
	'9.8': '#dae182',
	'9.7': '#dfe283',
	'9.6': '#e5e483',
	'9.5': '#eae583',
	'9.4': '#efe784',
	'9.3': '#f5e884',
	'9.2': '#faea84',
	'9.1': 'vffeb84',
	'9': '#fee282',
	'8.9': '#feda80',
	'8.8': '#fdd27f',
	'8.7': '#fdca7d',
	'8.6': '#fcc27c',
	'8.5': '#fcba7a',
	'8.4': '#fbb279',
	'8.3': '#fbaa77',
	'8.2': '#fba175',
	'8.1': '#fa9974',
	'8': '#fa9172',
	'7.9': '#f98971',
	'7.8': '#f9816f',
	'7.7': '#f8796e',
	'7.6': '#f8716c'
} as { [key: string]: string }

export function getMedieCornersColor(value: number) {
	if (value > 12.0) return '#63be7b'
	if (value < 7.6) return '#f8696b'

	const valueKeys = Object.keys(MEDIE_CORNERS_COLOR)
		.map(parseFloat)
		.sort((a, b) => b - a)

	for (let i = 0; i < valueKeys.length; i++) {
		if (value >= valueKeys[i]) {
			return MEDIE_CORNERS_COLOR[valueKeys[i].toString()]
		}
	}

	return '#f8696b'
}

const CARTONASE_AVERAGE_COLOR = {
	'5.5': '#63be7b',
	'5.4': '#70c27c',
	'5.3': '#7cc67d',
	'5.2': '#89c97e',
	'5.1': '#95cd7e',
	'5': '#a2d07f',
	'4.9': '#aed480',
	'4.8': '#bbd881',
	'4.7': '#c7db81',
	'4.6': '#d4df82',
	'4.5': '#e0e383',
	'4.4': '#ede683',
	'4.3': '#f9ea84',
	'4.2': '#fee582',
	'4.1': '#fedb80',
	'4': '#fdd17f',
	'3.9': '#fdc67d',
	'3.8': '#fcbc7b',
	'3.7': '#fbb179',
	'3.6': '#fba777',
	'3.5': '#fa9d75',
	'3.4': '#fa9273',
	'3.3': '#f98871',
	'3.2': '#f97d6f',
	'3.1': '#f8736d',
	'3': '#f8696b'
} as { [key: string]: string }

export function getCartonaseColor(value: number) {
	if (value > 5.5) return '#63be7b'
	if (value < 3.1) return '#f8696b'

	const valueKeys = Object.keys(CARTONASE_AVERAGE_COLOR)
		.map(parseFloat)
		.sort((a, b) => b - a)

	for (let i = 0; i < valueKeys.length; i++) {
		if (value >= valueKeys[i]) {
			return CARTONASE_AVERAGE_COLOR[valueKeys[i].toString()]
		}
	}

	return '#f8696b'
}

const MEDIE_GOLURI_COLOR_MAP = [
	{ upperBound: 0.7, color: '#f8696b' },
	{ upperBound: 0.8, color: '#f97d6e' },
	{ upperBound: 0.9, color: '#fa9272' },
	{ upperBound: 1.0, color: '#fba676' },
	{ upperBound: 1, color: '#fba676' },
	{ upperBound: 1.1, color: '#fcbb7a' },
	{ upperBound: 1.2, color: '#fdd07e' },
	{ upperBound: 1.3, color: '#fee482' },
	{ upperBound: 1.4, color: '#f6e984' },
	{ upperBound: 1.5, color: '#e9e583' },
	{ upperBound: 1.6, color: '#dbe182' },
	{ upperBound: 1.7, color: '#cedd82' },
	{ upperBound: 1.8, color: '#c1d981' },
	{ upperBound: 1.9, color: '#b4d680' },
	{ upperBound: 2.0, color: '#a6d27f' },
	{ upperBound: 2, color: '#a6d27f' },
	{ upperBound: 2.1, color: '#99ce7f' },
	{ upperBound: 2.2, color: '#8bca7e' },
	{ upperBound: 2.3, color: '#7ec67d' },
	{ upperBound: 2.4, color: '#71c27c' },
	{ upperBound: 2.5, color: '#63be7b' },
	{ upperBound: Infinity, color: '#63be7b' }
]

export function getMedieGoluriColorForValue(value: number) {
	for (const { upperBound, color } of MEDIE_GOLURI_COLOR_MAP) {
		if (value < upperBound) {
			return color
		}
	}
	return '#f8696b'
}

export const getMedieTotalGoluriColorForValue = (value: number) => {
	if (value > 3.5) return '#63be7b'
	if (value > 3.4) return '#6fc27c'
	if (value > 3.3) return '#7bc57d'
	if (value > 3.2) return '#87c97e'
	if (value > 3.1) return '#93cc7e'
	if (value > 3.0) return '#9fd07f'
	if (value > 2.9) return '#abd380'
	if (value > 2.8) return '#b7d780'
	if (value > 2.7) return '#c3da81'
	if (value > 2.6) return '#cfde82'
	if (value > 2.5) return '#dbe182'
	if (value > 2.4) return '#e7e583'
	if (value > 2.3) return '#f3e884'
	if (value > 2.2) return '#ffeb84'
	if (value > 2.1) return '#fede81'
	if (value > 2.0) return '#fdd17f'
	if (value > 2) return '#fdd17f'
	if (value > 1.9) return '#fcc47c'
	if (value > 1.8) return '#fcb77a'
	if (value > 1.7) return '#fbaa77'
	if (value > 1.6) return '#fa9d75'
	if (value > 1.5) return '#fa9072'
	if (value > 1.4) return '#f98370'
	if (value > 1.3) return '#f8766d'
	return '#f8696b'
}

export const getPesteColorForValue = (value: number) => {
	if (value >= 90) return '#63be7b'
	if (value === 89) return '#67c07c'
	if (value === 88) return '#6bc17c'
	if (value === 87) return '#6fc27c'
	if (value === 86) return '#73c37c'
	if (value === 85) return '#77c47d'
	if (value === 84) return '#7bc57d'
	if (value === 83) return '#7bc57d'
	if (value === 82) return '#83c77d'
	if (value === 81) return '#83c77d'
	if (value === 80) return '#8aca7e'
	if (value === 79) return '#8ecb7e'
	if (value === 78) return '#92cc7e'
	if (value === 77) return '#96cd7e'
	if (value === 76) return '#9ace7f'
	if (value === 75) return '#9ecf7f'
	if (value === 74) return '#a2d07f'
	if (value === 73) return '#a6d27f'
	if (value === 72) return '#aad380'
	if (value === 71) return '#aed480'
	if (value === 70) return '#b1d580'
	if (value === 69) return '#b5d680'
	if (value === 68) return '#b9d780'
	if (value === 67) return '#bdd881'
	if (value === 66) return '#c1da81'
	if (value === 65) return '#c5db81'
	if (value === 64) return '#c9dc81'
	if (value === 63) return '#cddd82'
	if (value === 62) return '#d1de82'
	if (value === 61) return '#d5df82'
	if (value === 60) return '#d8e082'
	if (value === 59) return '#dce182'
	if (value === 58) return '#e0e383'
	if (value === 57) return '#e4e483'
	if (value === 56) return '#e8e583'
	if (value === 55) return '#ece683'
	if (value === 54) return '#f0e784'
	if (value === 53) return '#f4e884'
	if (value === 52) return '#f8e984'
	if (value === 51) return '#fcea84'
	if (value === 50) return '#ffeb84'
	if (value === 49) return '#fee783'
	if (value === 48) return '#fee482'
	if (value === 47) return '#fee182'
	if (value === 46) return '#fede81'
	if (value === 45) return '#feda80'
	if (value === 44) return '#fdd780'
	if (value === 43) return '#fdd47f'
	if (value === 42) return '#fdd17f'
	if (value === 41) return '#fdcd7e'
	if (value === 40) return '#fdca7d'
	if (value === 39) return '#fdc77d'
	if (value === 38) return '#fcc47c'
	if (value === 37) return '#fcc07b'
	if (value === 36) return '#fcbd7b'
	if (value === 35) return '#fcba7a'
	if (value === 34) return '#fcb77a'
	if (value === 33) return '#fcb379'
	if (value === 32) return '#fbb078'
	if (value === 31) return '#fbad78'
	if (value === 30) return '#fbaa77'
	if (value === 29) return '#fba676'
	if (value === 28) return '#fba376'
	if (value === 27) return '#faa075'
	if (value === 26) return '#fa9d75'
	if (value === 25) return '#fa9974'
	if (value === 24) return '#fa9673'
	if (value === 23) return '#fa9673'
	if (value === 22) return '#fa9072'
	if (value === 21) return '#f98c71'
	if (value === 20) return '#f98971'
	if (value === 19) return '#f98670'
	if (value === 18) return '#f98370'
	if (value === 17) return '#f97f6f'
	if (value === 16) return '#f97c6e'
	if (value === 15) return '#f8796e'
	if (value === 14) return '#f8766d'
	if (value === 13) return '#f8726c'
	if (value === 12) return '#f86f6c'
	if (value === 11) return '#f86c6b'
	return '#f8696b'
}

export const getMedieColorForValue = (value: number) => {
	if (value > 2.5) return '#63be7b'
	if (value > 2.4) return '#71c27c'
	if (value > 2.3) return '#7ec67d'
	if (value > 2.2) return '#8bca7e'
	if (value > 2.1) return '#99ce7f'
	if (value > 2.0) return '#a6d27f'
	if (value > 2) return '#a6d27f'
	if (value > 1.9) return '#b4d680'
	if (value > 1.8) return '#c1d981'
	if (value > 1.7) return '#cedd82'
	if (value > 1.6) return '#dbe182'
	if (value > 1.5) return '#e9e583'
	if (value > 1.4) return '#f6e984'
	if (value > 1.3) return '#fee482'
	if (value > 1.2) return '#fdd07e'
	if (value > 1.1) return '#fcbb7a'
	if (value > 1.0) return '#fba676'
	if (value > 1) return '#fba676'
	if (value > 0.9) return '#fa9272'
	if (value > 0.8) return '#f97d6e'
	if (value < 0.7) return '#f8696b'

	return '#f8696b'
}

export const getMedieTotalSuturiColorForValue = (value: number) => {
	if (value > 28.4) return '#63be7b'
	if (value > 28.3) return '#68c07c'
	if (value > 28.2) return '#6cc17c'
	if (value > 28.1) return '#70c27c'
	if (value > 28.0) return '#74c37c'
	if (value > 27.9) return '#78c57d'
	if (value > 27.8) return '#7dc67d'
	if (value > 27.7) return '#81c77d'
	if (value > 27.6) return '#85c87d'
	if (value > 27.5) return '#89c97e'
	if (value > 27.4) return '#8dcb7e'
	if (value > 27.3) return '#92cc7e'
	if (value > 27.2) return '#96cd7e'
	if (value > 27.1) return '#9ace7f'
	if (value > 27.0) return '#9ecf7f'
	if (value > 26.9) return '#a2d17f'
	if (value > 26.8) return '#a7d27f'
	if (value > 26.7) return '#abd380'
	if (value > 26.6) return '#afd480'
	if (value > 26.5) return '#b3d580'
	if (value > 26.4) return '#b7d780'
	if (value > 26.3) return '#bcd881'
	if (value > 26.2) return '#c0d981'
	if (value > 26.1) return '#c4da81'
	if (value > 26.0) return '#c8dc81'
	if (value > 25.9) return '#ccdd82'
	if (value > 25.8) return '#d1de82'
	if (value > 25.7) return '#d5df82'
	if (value > 25.6) return '#d9e082'
	if (value > 25.5) return '#dde283'
	if (value > 25.4) return '#e1e383'
	if (value > 25.3) return '#e5e483'
	if (value > 25.2) return '#eae583'
	if (value > 25.1) return '#eee683'
	if (value > 25.0) return '#f2e884'
	if (value > 24.9) return '#f6e984'
	if (value > 24.8) return '#faea84'
	if (value > 24.7) return '#ffeb84'
	if (value > 24.6) return '#fee683'
	if (value > 24.5) return '#fee082'
	if (value > 24.4) return '#fedb80'
	if (value > 24.3) return '#fdd57f'
	if (value > 24.2) return '#fdcf7e'
	if (value > 24.1) return '#fdc97d'
	if (value > 24.0) return '#fcc47c'
	if (value > 23.9) return '#fcbe7b'
	if (value > 23.8) return '#fcb87a'
	if (value > 23.7) return '#fbb379'
	if (value > 23.6) return '#fbad78'
	if (value > 23.5) return '#fba777'
	if (value > 23.4) return '#fba275'
	if (value > 23.3) return '#fa9c74'
	if (value > 23.2) return '#fa9673'
	if (value > 23.1) return '#fa9072'
	if (value > 23.0) return '#f98b71'
	if (value > 22.9) return '#f98570'
	if (value > 22.8) return '#f97f6f'
	if (value > 22.7) return '#f87a6e'
	if (value > 22.6) return '#f8746d'
	if (value > 22.5) return '#f86e6c'
	return '#f8696b'
}

export const getMedieTotalPoartaColorForValue = (value: number) => {
	if (value > 10.5) return '#63be7b'
	if (value > 10.4) return '#6cc17c'
	if (value > 10.3) return '#74c37c'
	if (value > 10.2) return '#7cc57d'
	if (value > 10.1) return '#84c87d'
	if (value > 10.0) return '#8cca7e'
	if (value > 9.9) return '#93cc7e'
	if (value > 9.8) return '#9bcf7f'
	if (value > 9.7) return '#a3d17f'
	if (value > 9.6) return '#abd380'
	if (value > 9.5) return '#b3d680'
	if (value > 9.4) return '#bcd881'
	if (value > 9.3) return '#c4da81'
	if (value > 9.2) return '#ccdd82'
	if (value > 9.1) return '#d4df82'
	if (value > 9.0) return '#dce182'
	if (value > 8.9) return '#e4e383'
	if (value > 8.8) return '#ece683'
	if (value > 8.7) return '#f3e884'
	if (value > 8.6) return '#fbea84'
	if (value > 8.5) return '#fee482'
	if (value > 8.4) return '#fed880'
	if (value > 8.3) return '#fdcc7e'
	if (value > 8.2) return '#fcbf7b'
	if (value > 8.1) return '#fbb379'
	if (value > 8.0) return '#fba676'
	if (value > 7.9) return '#fa9a74'
	if (value > 7.8) return '#fa8e72'
	if (value > 7.7) return '#f9816f'
	if (value > 7.6) return '#f8756d'
	if (value > 7.5) return '#f8696b'
	return '#f8696b'
}

export const getPoartaPerGoluriColorForValue = (value: number) => {
	if (value < 2.65) return '#63be7b'
	if (value < 2.7) return '#6bc07b'
	if (value < 2.75) return '#73c27b'
	if (value < 2.8) return '#7cc57c'
	if (value < 2.85) return '#84c77c'
	if (value < 2.9) return '#8cca7d'
	if (value < 2.95) return '#95cc7d'
	if (value < 3.0) return '#9dce7e'
	if (value < 3.05) return '#a6d17e'
	if (value < 3.1) return '#aed37f'
	if (value < 3.15) return '#b6d67f'
	if (value < 3.2) return '#bfd880'
	if (value < 3.25) return '#c7db80'
	if (value < 3.3) return '#d0dd81'
	if (value < 3.35) return '#d8df81'
	if (value < 3.4) return '#e0e282'
	if (value < 3.45) return '#e9e482'
	if (value < 3.5) return '#f1e783'
	if (value < 3.55) return '#f9e983'
	if (value < 3.6) return '#ffe784'
	if (value < 3.65) return '#ffdd82'
	if (value < 3.7) return '#fed280'
	if (value < 3.75) return '#fec87e'
	if (value < 3.8) return '#fdbd7c'
	if (value < 3.85) return '#fcb37a'
	if (value < 3.9) return '#fca878'
	if (value < 3.95) return '#fb9e76'
	if (value < 4.0) return '#fb9374'
	if (value < 4.05) return '#fa8972'
	if (value < 4.1) return '#fa7e70'
	if (value < 4.15) return '#f9746e'
	return '#f8696b'
}

export const getSuturiPercentageColorForValue = (value: number) => {
	if (value >= 90) return '#63be7b'
	if (value === 89) return '#67c07c'
	if (value === 88) return '#6bc17c'
	if (value === 87) return '#6fc27c'
	if (value === 86) return '#73c37c'
	if (value === 85) return '#77c47d'
	if (value === 84) return '#7bc57d'
	if (value === 83) return '#7bc57d'
	if (value === 82) return '#83c77d'
	if (value === 81) return '#83c77d'
	if (value === 80) return '#8aca7e'
	if (value === 79) return '#8ecb7e'
	if (value === 78) return '#92cc7e'
	if (value === 77) return '#96cd7e'
	if (value === 76) return '#9ace7f'
	if (value === 75) return '#9ecf7f'
	if (value === 74) return '#a2d07f'
	if (value === 73) return '#a6d27f'
	if (value === 72) return '#aad380'
	if (value === 71) return '#aed480'
	if (value === 70) return '#b1d580'
	if (value === 69) return '#b5d680'
	if (value === 68) return '#b9d780'
	if (value === 67) return '#bdd881'
	if (value === 66) return '#c1da81'
	if (value === 65) return '#c5db81'
	if (value === 64) return '#c9dc81'
	if (value === 63) return '#cddd82'
	if (value === 62) return '#d1de82'
	if (value === 61) return '#d5df82'
	if (value === 60) return '#d8e082'
	if (value === 59) return '#dce182'
	if (value === 58) return '#e0e383'
	if (value === 57) return '#e4e483'
	if (value === 56) return '#e8e583'
	if (value === 55) return '#ece683'
	if (value === 54) return '#f0e784'
	if (value === 53) return '#f4e884'
	if (value === 52) return '#f8e984'
	if (value === 51) return '#fcea84'
	if (value === 50) return '#ffeb84'
	if (value === 49) return '#fee783'
	if (value === 48) return '#fee482'
	if (value === 47) return '#fee182'
	if (value === 46) return '#fede81'
	if (value === 45) return '#feda80'
	if (value === 44) return '#fdd780'
	if (value === 43) return '#fdd47f'
	if (value === 42) return '#fdd17f'
	if (value === 41) return '#fdcd7e'
	if (value === 40) return '#fdca7d'
	if (value === 39) return '#fdc77d'
	if (value === 38) return '#fcc47c'
	if (value === 37) return '#fcc07b'
	if (value === 36) return '#fcbd7b'
	if (value === 35) return '#fcba7a'
	if (value === 34) return '#fcb77a'
	if (value === 33) return '#fcb379'
	if (value === 32) return '#fbb078'
	if (value === 31) return '#fbad78'
	if (value === 30) return '#fbaa77'
	if (value === 29) return '#fba676'
	if (value === 28) return '#fba376'
	if (value === 27) return '#faa075'
	if (value === 26) return '#fa9d75'
	if (value === 25) return '#fa9974'
	if (value === 24) return '#fa9673'
	if (value === 23) return '#fa9673'
	if (value === 22) return '#fa9072'
	if (value === 21) return '#f98c71'
	if (value === 20) return '#f98971'
	if (value === 19) return '#f98670'
	if (value === 18) return '#f98370'
	if (value === 17) return '#f97f6f'
	if (value === 16) return '#f97c6e'
	if (value === 15) return '#f8796e'
	if (value === 14) return '#f8766d'
	if (value === 13) return '#f8726c'
	if (value === 12) return '#f86f6c'
	if (value === 11) return '#f86c6b'
	return '#f8696b'
}

export const getMedieCornereColorForValue = (value: number) => {
	if (value > 7.4) return '#63be7b'
	if (value > 7.3) return '#6ac07c'
	if (value > 7.2) return '#71c27c'
	if (value > 7.1) return '#77c47d'
	if (value > 7.0) return '#7ec67d'
	if (value > 6.9) return '#84c87d'
	if (value > 6.8) return '#8bca7e'
	if (value > 6.7) return '#91cc7e'
	if (value > 6.6) return '#98ce7f'
	if (value > 6.5) return '#9ecf7f'
	if (value > 6.4) return '#a5d17f'
	if (value > 6.3) return '#abd380'
	if (value > 6.2) return '#b2d580'
	if (value > 6.1) return '#b8d780'
	if (value > 6.0) return '#bfd981'
	if (value > 5.9) return '#c5db81'
	if (value > 5.8) return '#ccdd82'
	if (value > 5.7) return '#d2de82'
	if (value > 5.6) return '#d9e082'
	if (value > 5.5) return '#dfe283'
	if (value > 5.4) return '#e5e483'
	if (value > 5.3) return '#ece683'
	if (value > 5.2) return '#f2e884'
	if (value > 5.1) return '#f9ea84'
	if (value > 5.0) return '#ffeb84'
	if (value > 4.9) return '#fee282'
	if (value > 4.8) return '#feda80'
	if (value > 4.7) return '#fdd27f'
	if (value > 4.6) return '#fdca7d'
	if (value > 4.5) return '#fcc27c'
	if (value > 4.4) return '#fcba7a'
	if (value > 4.3) return '#fbb279'
	if (value > 4.2) return '#fba977'
	if (value > 4.1) return '#fba175'
	if (value > 4.0) return '#fa9974'
	if (value > 3.9) return '#fa9172'
	if (value > 3.8) return '#f98971'
	if (value > 3.7) return '#f9816f'
	if (value > 3.6) return '#f8796e'
	if (value > 3.5) return '#f8716c'
	return '#f8696b'
}

export const getMedieTotalCornereColorForValue = (value: number) => {
	if (value > 12.0) return '#63be7b'
	if (value > 11.8) return '#69c07c'
	if (value > 11.7) return '#6fc27c'
	if (value > 11.6) return '#75c47d'
	if (value > 11.5) return '#7bc57d'
	if (value > 11.4) return '#80c77d'
	if (value > 11.3) return '#86c97e'
	if (value > 11.2) return '#8cca7e'
	if (value > 11.1) return '#92cc7e'
	if (value > 11.0) return '#98ce7f'
	if (value > 10.9) return '#9dcf7f'
	if (value > 10.8) return '#a3d17f'
	if (value > 10.7) return '#a9d380'
	if (value > 10.6) return '#afd480'
	if (value > 10.5) return '#b4d680'
	if (value > 10.4) return '#bad881'
	if (value > 10.3) return '#c0d981'
	if (value > 10.2) return '#c6db81'
	if (value > 10.1) return '#ccdd82'
	if (value > 10.0) return '#d1de82'
	if (value > 9.9) return '#d7e082'
	if (value > 9.8) return '#dde182'
	if (value > 9.7) return '#e3e383'
	if (value > 9.6) return '#e8e583'
	if (value > 9.5) return '#eee683'
	if (value > 9.4) return '#f4e884'
	if (value > 9.3) return '#faea84'
	if (value > 9.2) return '#ffeb84'
	if (value > 9.1) return '#fee382'
	if (value > 9.0) return '#fedc81'
	if (value > 8.9) return '#fdd57f'
	if (value > 8.8) return '#fdce7e'
	if (value > 8.7) return '#fdc67d'
	if (value > 8.6) return '#fcbf7b'
	if (value > 8.5) return '#fcb87a'
	if (value > 8.4) return '#fbb178'
	if (value > 8.3) return '#fbaa77'
	if (value > 8.2) return '#fba276'
	if (value > 8.1) return '#fa9b74'
	if (value > 8.0) return '#fa9473'
	if (value > 7.9) return '#f98d71'
	if (value > 7.8) return '#f98570'
	if (value > 7.7) return '#f97e6f'
	if (value > 7.6) return '#f8776d'
	if (value > 7.5) return '#f8706c'
	return '#f8696b'
}

export const getCornerePercentageColorForValue = (value: number) => {
	if (value > 90) return '#63be7b'
	if (value === 89) return '#67c07c'
	if (value === 88) return '#6bc17c'
	if (value === 87) return '#6fc27c'
	if (value === 86) return '#73c37c'
	if (value === 85) return '#77c47d'
	if (value === 84) return '#7bc57d'
	if (value === 83) return '#7bc57d'
	if (value === 82) return '#83c77d'
	if (value === 81) return '#83c77d'
	if (value === 80) return '#8aca7e'
	if (value === 79) return '#8ecb7e'
	if (value === 78) return '#92cc7e'
	if (value === 77) return '#96cd7e'
	if (value === 76) return '#9ace7f'
	if (value === 75) return '#9ecf7f'
	if (value === 74) return '#a2d07f'
	if (value === 73) return '#a6d27f'
	if (value === 72) return '#aad380'
	if (value === 71) return '#aed480'
	if (value === 70) return '#b1d580'
	if (value === 69) return '#b5d680'
	if (value === 68) return '#b9d780'
	if (value === 67) return '#bdd881'
	if (value === 66) return '#c1da81'
	if (value === 65) return '#c5db81'
	if (value === 64) return '#c9dc81'
	if (value === 63) return '#cddd82'
	if (value === 62) return '#d1de82'
	if (value === 61) return '#d5df82'
	if (value === 60) return '#d8e082'
	if (value === 59) return '#dce182'
	if (value === 58) return '#e0e383'
	if (value === 57) return '#e4e483'
	if (value === 56) return '#e8e583'
	if (value === 55) return '#ece683'
	if (value === 54) return '#f0e784'
	if (value === 53) return '#f4e884'
	if (value === 52) return '#f8e984'
	if (value === 51) return '#fcea84'
	if (value === 50) return '#ffeb84'
	if (value === 49) return '#fee783'
	if (value === 48) return '#fee482'
	if (value === 47) return '#fee182'
	if (value === 46) return '#fede81'
	if (value === 45) return '#feda80'
	if (value === 44) return '#fdd780'
	if (value === 43) return '#fdd47f'
	if (value === 42) return '#fdd17f'
	if (value === 41) return '#fdcd7e'
	if (value === 40) return '#fdca7d'
	if (value === 39) return '#fdc77d'
	if (value === 38) return '#fcc47c'
	if (value === 37) return '#fcc07b'
	if (value === 36) return '#fcbd7b'
	if (value === 35) return '#fcba7a'
	if (value === 34) return '#fcb77a'
	if (value === 33) return '#fcb379'
	if (value === 32) return '#fbb078'
	if (value === 31) return '#fbad78'
	if (value === 30) return '#fbaa77'
	if (value === 29) return '#fba676'
	if (value === 28) return '#fba376'
	if (value === 27) return '#faa075'
	if (value === 26) return '#fa9d75'
	if (value === 25) return '#fa9974'
	if (value === 24) return '#fa9673'
	if (value === 23) return '#fa9673'
	if (value === 22) return '#fa9072'
	if (value === 21) return '#f98c71'
	if (value === 20) return '#f98971'
	if (value === 19) return '#f98670'
	if (value === 18) return '#f98370'
	if (value === 17) return '#f97f6f'
	if (value === 16) return '#f97c6e'
	if (value === 15) return '#f8796e'
	if (value === 14) return '#f8766d'
	if (value === 13) return '#f8726c'
	if (value === 12) return '#f86f6c'
	if (value === 11) return '#f86c6b'
	return '#f8696b'
}

export const getMedieSuturiTeamColorForValue = (value: number) => {
	if (value > 17.5) return '#63be7b'
	if (value > 17.4) return '#69c07c'
	if (value > 17.3) return '#6fc27c'
	if (value > 17.2) return '#75c37c'
	if (value > 17.1) return '#7ac57d'
	if (value > 17.0) return '#80c77d'
	if (value > 16.9) return '#86c87d'
	if (value > 16.8) return '#8bca7e'
	if (value > 16.7) return '#91cc7e'
	if (value > 16.6) return '#97cd7e'
	if (value > 16.5) return '#9ccf7f'
	if (value > 16.4) return '#a2d17f'
	if (value > 16.3) return '#a8d27f'
	if (value > 16.2) return '#add480'
	if (value > 16.1) return '#b3d580'
	if (value > 16.0) return '#b9d780'
	if (value > 15.9) return '#bed981'
	if (value > 15.8) return '#c4da81'
	if (value > 15.7) return '#cadc81'
	if (value > 15.6) return '#cfde82'
	if (value > 15.5) return '#d5df82'
	if (value > 15.4) return '#dbe182'
	if (value > 15.3) return '#e0e283'
	if (value > 15.2) return '#e6e483'
	if (value > 15.1) return '#ece683'
	if (value > 15.0) return '#f1e784'
	if (value > 14.9) return '#f7e984'
	if (value > 14.8) return '#fdeb84'
	if (value > 14.7) return '#fee883'
	if (value > 14.6) return '#fee382'
	if (value > 14.5) return '#fedf81'
	if (value > 14.4) return '#feda80'
	if (value > 14.3) return '#fdd57f'
	if (value > 14.2) return '#fdd17f'
	if (value > 14.1) return '#fdcc7e'
	if (value > 14.0) return '#fdc77d'
	if (value > 13.9) return '#fcc27c'
	if (value > 13.8) return '#fcbe7b'
	if (value > 13.7) return '#fcb97a'
	if (value > 13.6) return '#fcb479'
	if (value > 13.5) return '#fbaf78'
	if (value > 13.4) return '#fbab77'
	if (value > 13.3) return '#fba676'
	if (value > 13.2) return '#fba175'
	if (value > 13.1) return '#fa9c74'
	if (value > 13.0) return '#fa9874'
	if (value > 12.9) return '#fa9373'
	if (value > 12.8) return '#fa8e72'
	if (value > 12.7) return '#f98a71'
	if (value > 12.6) return '#f98570'
	if (value > 12.5) return '#f9806f'
	if (value > 12.4) return '#f97b6e'
	if (value > 12.3) return '#f8776d'
	if (value > 12.2) return '#f8726c'
	if (value > 12.1) return '#f86d6b'
	return '#f8696b'
}

export const getMedieSuturiPoartaColorForValue = (value: number) => {
	if (value > 7.0) return '#63be7b'
	if (value > 6.9) return '#6cc17c'
	if (value > 6.8) return '#74c37c'
	if (value > 6.7) return '#7cc67d'
	if (value > 6.6) return '#85c87d'
	if (value > 6.5) return '#8dca7e'
	if (value > 6.4) return '#95cd7e'
	if (value > 6.3) return '#9dcf7f'
	if (value > 6.2) return '#a6d27f'
	if (value > 6.1) return '#aed480'
	if (value > 6.0) return '#b6d680'
	if (value > 5.9) return '#bed981'
	if (value > 5.8) return '#c7db81'
	if (value > 5.7) return '#cfdd82'
	if (value > 5.6) return '#d7e082'
	if (value > 5.5) return '#dfe283'
	if (value > 5.4) return '#e8e583'
	if (value > 5.3) return '#f0e784'
	if (value > 5.2) return '#f8e984'
	if (value > 5.1) return '#fee983'
	if (value > 5.0) return '#fede81'
	if (value > 4.9) return '#fdd27f'
	if (value > 4.8) return '#fdc67d'
	if (value > 4.7) return '#fcba7a'
	if (value > 4.6) return '#fbaf78'
	if (value > 4.5) return '#fba376'
	if (value > 4.4) return '#fa9774'
	if (value > 4.3) return '#f98c71'
	if (value > 4.2) return '#f9806f'
	if (value > 4.1) return '#f8746d'
	return '#f8696b'
}

export const getMedieFaulturiColorForValue = (value: number) => {
	if (value > 14.0) return '#63be7b'
	if (value > 13.9) return '#68c07c'
	if (value > 13.8) return '#6cc17c'
	if (value > 13.7) return '#71c27c'
	if (value > 13.6) return '#75c37c'
	if (value > 13.5) return '#79c57d'
	if (value > 13.4) return '#7dc67d'
	if (value > 13.3) return '#82c77d'
	if (value > 13.2) return '#86c97e'
	if (value > 13.1) return '#8aca7e'
	if (value > 13.0) return '#8fcb7e'
	if (value > 12.9) return '#93cc7e'
	if (value > 12.8) return '#97cd7e'
	if (value > 12.7) return '#9ccf7f'
	if (value > 12.6) return '#a0d07f'
	if (value > 12.5) return '#a5d17f'
	if (value > 12.4) return '#a9d27f'
	if (value > 12.3) return '#add480'
	if (value > 12.2) return '#b2d580'
	if (value > 12.1) return '#b6d680'
	if (value > 12.0) return '#bad780'
	if (value > 11.9) return '#bed981'
	if (value > 11.8) return '#c3da81'
	if (value > 11.7) return '#c7db81'
	if (value > 11.6) return '#ccdd82'
	if (value > 11.5) return '#d0de82'
	if (value > 11.4) return '#d4df82'
	if (value > 11.3) return '#d8e082'
	if (value > 11.2) return '#dde283'
	if (value > 11.1) return '#e1e383'
	if (value > 11.0) return '#e6e483'
	if (value > 10.9) return '#eae583'
	if (value > 10.8) return '#eee683'
	if (value > 10.7) return '#f3e884'
	if (value > 10.6) return '#f7e984'
	if (value > 10.5) return '#fbea84'
	if (value > 10.4) return '#ffeb84'
	if (value > 10.3) return '#fee582'
	if (value > 10.2) return '#fee081'
	if (value > 10.1) return '#feda80'
	if (value > 10.0) return '#fdd57f'
	if (value > 9.9) return '#fdcf7e'
	if (value > 9.8) return '#fdca7d'
	if (value > 9.7) return '#fcc57c'
	if (value > 9.6) return '#fcbf7b'
	if (value > 9.5) return '#fcba7a'
	if (value > 9.4) return '#fcb479'
	if (value > 9.3) return '#fbaf78'
	if (value > 9.2) return '#fbaa77'
	if (value > 9.1) return '#fba476'
	if (value > 9.0) return '#fa9f75'
	if (value > 8.9) return '#fa9974'
	if (value > 8.8) return '#fa9473'
	if (value > 8.7) return '#fa8e72'
	if (value > 8.6) return '#f98971'
	if (value > 8.5) return '#f98470'
	if (value > 8.4) return '#f97e6f'
	if (value > 8.3) return '#f8796e'
	if (value > 8.2) return '#f8736d'
	if (value > 8.1) return '#f86e6c'
	return '#f8696b'
}

export const getTotalMedieFaulturiColorForValue = (value: number) => {
	if (value > 25.0) return '#63be7b'
	if (value > 24.9) return '#69c07c'
	if (value > 24.8) return '#6ec17c'
	if (value > 24.7) return '#73c37c'
	if (value > 24.6) return '#78c47d'
	if (value > 24.5) return '#7dc67d'
	if (value > 24.4) return '#83c87d'
	if (value > 24.3) return '#88c97e'
	if (value > 24.2) return '#8dcb7e'
	if (value > 24.1) return '#92cc7e'
	if (value > 24.0) return '#98ce7f'
	if (value > 23.9) return '#9dcf7f'
	if (value > 23.8) return '#a2d07f'
	if (value > 23.7) return '#a7d27f'
	if (value > 23.6) return '#acd380'
	if (value > 23.5) return '#b1d580'
	if (value > 23.4) return '#b7d780'
	if (value > 23.3) return '#bcd881'
	if (value > 23.2) return '#c1da81'
	if (value > 23.1) return '#c6db81'
	if (value > 23.0) return '#ccdd82'
	if (value > 22.9) return '#d1de82'
	if (value > 22.8) return '#d6df82'
	if (value > 22.7) return '#dbe182'
	if (value > 22.6) return '#e0e283'
	if (value > 22.5) return '#e5e483'
	if (value > 22.4) return '#ebe683'
	if (value > 22.3) return '#f0e784'
	if (value > 22.2) return '#f5e984'
	if (value > 22.1) return '#faea84'
	if (value > 22.0) return '#ffeb84'
	if (value > 21.9) return '#fee482'
	if (value > 21.8) return '#fede81'
	if (value > 21.7) return '#fdd780'
	if (value > 21.6) return '#fdd17f'
	if (value > 21.5) return '#fdca7d'
	if (value > 21.4) return '#fcc37c'
	if (value > 21.3) return '#fcbd7b'
	if (value > 21.2) return '#fcb679'
	if (value > 21.1) return '#fbb078'
	if (value > 21.0) return '#fba977'
	if (value > 20.9) return '#fba376'
	if (value > 20.8) return '#fa9c74'
	if (value > 20.7) return '#fa9673'
	if (value > 20.6) return '#fa8f72'
	if (value > 20.5) return '#fa8f72'
	if (value > 20.4) return '#f9826f'
	if (value > 20.3) return '#f97c6e'
	if (value > 20.2) return '#f8756d'
	if (value > 20.1) return '#f86f6c'
	return '#f8696b'
}

export const getMedPctColorForValue = (value: number) => {
	if (value > 2.5) return '#63be7b'
	if (value > 2.4) return '#73c37c'
	if (value > 2.3) return '#82c77d'
	if (value > 2.2) return '#90cb7e'
	if (value > 2.1) return '#9fd07f'
	if (value > 2.0) return '#afd480'
	if (value > 1.9) return '#bed881'
	if (value > 1.8) return '#ccdd82'
	if (value > 1.7) return '#dbe182'
	if (value > 1.6) return '#eae583'
	if (value > 1.5) return '#f9ea84'
	if (value > 1.4) return '#fedd81'
	if (value > 1.3) return '#fdc57c'
	if (value > 1.2) return '#fbae78'
	if (value > 1.1) return '#fa9773'
	if (value > 1.0) return '#f9806f'
	return '#f8696b'
}

export const medieCartonaseValueToColor = (value: number): string => {
	if (value > 2.7) {
		return '#63be7b'
	} else if (value >= 2.6 && value <= 2.7) {
		return '#78c47d'
	} else if (value >= 2.5 && value < 2.6) {
		return '#8dca7e'
	} else if (value >= 2.4 && value < 2.5) {
		return '#a1d07f'
	} else if (value >= 2.3 && value < 2.4) {
		return '#b6d680'
	} else if (value >= 2.2 && value < 2.3) {
		return '#cbdc81'
	} else if (value >= 2.1 && value < 2.2) {
		return '#dfe283'
	} else if (value >= 2.0 && value < 2.1) {
		return '#f4e884'
	} else if (value >= 1.9 && value < 2.0) {
		return '#fede81'
	} else if (value >= 1.8 && value < 1.9) {
		return '#fcc07b'
	} else if (value >= 1.7 && value < 1.8) {
		return '#fba376'
	} else if (value >= 1.6 && value < 1.7) {
		return '#f98670'
	} else if (value < 1.5) {
		return '#f8696b'
	} else {
		return ''
	}
}

export const medieTotalCartonaseValueToColor = (value: number): string => {
	if (value > 5.5) {
		return '#63be7b'
	} else if (value >= 5.4 && value <= 5.5) {
		return '#70c27c'
	} else if (value >= 5.3 && value < 5.4) {
		return '#7cc67d'
	} else if (value >= 5.2 && value < 5.3) {
		return '#88c97e'
	} else if (value >= 5.1 && value < 5.2) {
		return '#94cd7e'
	} else if (value >= 5.0 && value < 5.1) {
		return '#a0d07f'
	} else if (value >= 4.9 && value < 5.0) {
		return '#add480'
	} else if (value >= 4.8 && value < 4.9) {
		return '#b9d780'
	} else if (value >= 4.7 && value < 4.8) {
		return '#c5db81'
	} else if (value >= 4.6 && value < 4.7) {
		return '#d1de82'
	} else if (value >= 4.5 && value < 4.6) {
		return '#dde283'
	} else if (value >= 4.4 && value < 4.5) {
		return '#eae583'
	} else if (value >= 4.3 && value < 4.4) {
		return '#f6e984'
	} else if (value >= 4.2 && value < 4.3) {
		return '#fee783'
	} else if (value >= 4.1 && value < 4.2) {
		return '#fdd57f'
	} else if (value >= 4.0 && value < 4.1) {
		return '#fcc37c'
	} else if (value >= 3.9 && value < 4.0) {
		return '#fbb178'
	} else if (value >= 3.8 && value < 3.9) {
		return '#fa9f75'
	} else if (value >= 3.7 && value < 3.8) {
		return '#f98d71'
	} else if (value >= 3.6 && value < 3.7) {
		return '#f87b6e'
	} else if (value < 3.6) {
		return '#f8696b'
	} else {
		return ''
	}
}

export const cartonasePlusValueToColor = (value: number): string => {
	if (value > 90) {
		return '#63be7b'
	} else if (value === 90) {
		return '#63be7b'
	} else if (value === 89) {
		return '#67c07c'
	} else if (value === 88) {
		return '#6bc17c'
	} else if (value === 87) {
		return '#6fc27c'
	} else if (value === 86) {
		return '#73c37c'
	} else if (value === 85) {
		return '#77c47d'
	} else if (value === 84) {
		return '#7bc57d'
	} else if (value === 83) {
		return '#7bc57d'
	} else if (value === 82) {
		return '#83c77d'
	} else if (value === 81) {
		return '#83c77d'
	} else if (value === 80) {
		return '#8aca7e'
	} else if (value === 79) {
		return '#8ecb7e'
	} else if (value === 78) {
		return '#92cc7e'
	} else if (value === 77) {
		return '#96cd7e'
	} else if (value === 76) {
		return '#9ace7f'
	} else if (value === 75) {
		return '#9ecf7f'
	} else if (value === 74) {
		return '#a2d07f'
	} else if (value === 73) {
		return '#a6d27f'
	} else if (value === 72) {
		return '#aad380'
	} else if (value === 71) {
		return '#aed480'
	} else if (value === 70) {
		return '#b1d580'
	} else if (value === 69) {
		return '#b5d680'
	} else if (value === 68) {
		return '#b9d780'
	} else if (value === 67) {
		return '#bdd881'
	} else if (value === 66) {
		return '#c1da81'
	} else if (value === 65) {
		return '#c5db81'
	} else if (value === 64) {
		return '#c9dc81'
	} else if (value === 63) {
		return '#cddd82'
	} else if (value === 62) {
		return '#d1de82'
	} else if (value === 61) {
		return '#d5df82'
	} else if (value === 60) {
		return '#d8e082'
	} else if (value === 59) {
		return '#dce182'
	} else if (value === 58) {
		return '#e0e383'
	} else if (value === 57) {
		return '#e4e483'
	} else if (value === 56) {
		return '#e8e583'
	} else if (value === 55) {
		return '#ece683'
	} else if (value === 54) {
		return '#f0e784'
	} else if (value === 53) {
		return '#f4e884'
	} else if (value === 52) {
		return '#f8e984'
	} else if (value === 51) {
		return '#fcea84'
	} else if (value === 50) {
		return '#ffeb84'
	} else if (value === 49) {
		return '#fee783'
	} else if (value === 48) {
		return '#fee482'
	} else if (value === 47) {
		return '#fee182'
	} else if (value === 46) {
		return '#fede81'
	} else if (value === 45) {
		return '#feda80'
	} else if (value === 44) {
		return '#fdd780'
	} else if (value === 43) {
		return '#fdd47f'
	} else if (value === 42) {
		return '#fdd17f'
	} else if (value === 41) {
		return '#fdcd7e'
	} else if (value === 40) {
		return '#fdca7d'
	} else if (value === 39) {
		return '#fdc77d'
	} else if (value === 38) {
		return '#fcc47c'
	} else if (value === 37) {
		return '#fcc07b'
	} else if (value === 36) {
		return '#fcbd7b'
	} else if (value === 35) {
		return '#fcba7a'
	} else if (value === 34) {
		return '#fcb77a'
	} else if (value === 33) {
		return '#fcb379'
	} else if (value === 32) {
		return '#fbb078'
	} else if (value === 31) {
		return '#fbad78'
	} else if (value === 30) {
		return '#fbaa77'
	} else if (value === 29) {
		return '#fba676'
	} else if (value === 28) {
		return '#fba376'
	} else if (value === 27) {
		return '#faa075'
	} else if (value === 26) {
		return '#fa9d75'
	} else if (value === 25) {
		return '#fa9974'
	} else if (value === 24) {
		return '#fa9673'
	} else if (value === 23) {
		return '#fa9673'
	} else if (value === 22) {
		return '#fa9072'
	} else if (value === 21) {
		return '#f98c71'
	} else if (value === 20) {
		return '#f98971'
	} else if (value === 19) {
		return '#f98670'
	} else if (value === 18) {
		return '#f98370'
	} else if (value === 17) {
		return '#f97f6f'
	} else if (value === 16) {
		return '#f97c6e'
	} else if (value === 15) {
		return '#f8796e'
	} else if (value === 14) {
		return '#f8766d'
	} else if (value === 13) {
		return '#f8726c'
	} else if (value === 12) {
		return '#f86f6c'
	} else if (value === 11) {
		return '#f86c6b'
	} else if (value < 11) {
		return '#f8696b'
	} else {
		return ''
	}
}

export const getCornereColorForValue = (value: number) => {
	if (value > 7.5) return '#63be7b'
	if (value > 7.4) return '#6ac07c'
	if (value > 7.3) return '#71c27c'
	if (value > 7.2) return '#77c47d'
	if (value > 7.1) return '#7ec67d'
	if (value > 7.0) return '#84c87d'
	if (value > 6.9) return '#8bca7e'
	if (value > 6.8) return '#91cc7e'
	if (value > 6.7) return '#98ce7f'
	if (value > 6.6) return '#9ecf7f'
	if (value > 6.5) return '#a5d17f'
	if (value > 6.4) return '#abd380'
	if (value > 6.3) return '#b2d580'
	if (value > 6.2) return '#b8d780'
	if (value > 6.1) return '#bfd981'
	if (value > 6.0) return '#c5db81'
	if (value > 5.9) return '#ccdd82'
	if (value > 5.8) return '#d2de82'
	if (value > 5.7) return '#d9e082'
	if (value > 5.6) return '#dfe283'
	if (value > 5.5) return '#e5e483'
	if (value > 5.4) return '#ece683'
	if (value > 5.3) return '#f2e884'
	if (value > 5.2) return '#f9ea84'
	if (value > 5.1) return '#ffeb84'
	if (value > 5.0) return '#fee282'
	if (value > 4.9) return '#feda80'
	if (value > 4.8) return '#fdd27f'
	if (value > 4.7) return '#fdca7d'
	if (value > 4.6) return '#fcc27c'
	if (value > 4.5) return '#fcba7a'
	if (value > 4.4) return '#fbb279'
	if (value > 4.3) return '#fba977'
	if (value > 4.2) return '#fba175'
	if (value > 4.1) return '#fa9974'
	if (value > 4.0) return '#fa9172'
	if (value > 3.9) return '#f98971'
	if (value > 3.8) return '#f9816f'
	if (value > 3.7) return '#f8796e'
	if (value > 3.6) return '#f8716c'
	return '#f8696b'
}

export const getPpMColorForValue = (value: number) => {
	if (value > 2.5) return '#63be7b'
	if (value > 2.4) return '#73c37c'
	if (value > 2.3) return '#82c77d'
	if (value > 2.2) return '#90cb7e'
	if (value > 2.1) return '#9fd07f'
	if (value > 2.0) return '#afd480'
	if (value > 1.9) return '#bed881'
	if (value > 1.8) return '#ccdd82'
	if (value > 1.7) return '#dbe182'
	if (value > 1.6) return '#eae583'
	if (value > 1.5) return '#f9ea84'
	if (value > 1.4) return '#fedd81'
	if (value > 1.3) return '#fdc57c'
	if (value > 1.2) return '#fbae78'
	if (value > 1.1) return '#fa9773'
	if (value > 1.0) return '#f9806f'
	return '#f8696b'
}
