import React, { useEffect } from 'react'
// import db from '../database'
import axios from 'axios'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

function Home() {
	const dispatch = useDispatch()


	useEffect(() => {
		axios
			.get('https://613f5090e9d92a0017e175f8.mockapi.io/movies')
			.then((resp) => {
				let tempMovies = resp.data.map((item) => {
					return {
						id: Date.now(),
						...item,
					}
				})
				dispatch(setMovies(tempMovies))

			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
		</Container>
	)
}

export default Home

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&::before {
		background: url('/images/home-background.png') center center/cover no-repeat fixed;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`
