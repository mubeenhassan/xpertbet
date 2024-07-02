import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import React from 'react'
import CustomSlider from 'react-slick'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface SliderProps {
	children: React.ReactNode
}

export const Slider = ({ children }: SliderProps) => {
	const theme = useTheme()

	const settings = {
		dots: false,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4.5,
		slidesToScroll: 2,
		nextArrow: (
			<KeyboardArrowRight
				sx={[
					{
						color: theme.primary,
						'&:hover': { backgroundColor: theme.primary, cursor: 'pointer', color: 'white' }
					}
				]}
			/>
		),
		prevArrow: (
			<KeyboardArrowLeft
				sx={[
					{
						color: theme.primary,
						'&:hover': { backgroundColor: theme.primary, cursor: 'pointer', color: 'white' }
					}
				]}
			/>
		),
		autoplay: false,
		className: 'slider'
	}

	return <CustomSlider {...settings}>{children}</CustomSlider>
}
