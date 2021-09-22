import React from 'react'
import styled from 'styled-components'

function Movies() {
	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				<Wrap>
					<img
						src='https://lumiere-a.akamaihd.net/v1/images/p_wandavision_disneyplus_poster03_20118_66028c77.jpeg?region=0,0,540,810&width=480'
						alt='Shan-chi'
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
						alt='Shan-chi'
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_19732_b0052d5f.jpeg'
						alt='Shan-chi'
					/>
				</Wrap>
				<Wrap>
					<img
						src='https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg'
						alt='Shan-chi'
					/>
				</Wrap>
			</Content>
		</Container>
	)
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	border: 3px solid rgba(249,249,249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms ease-in-out 0s;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`
