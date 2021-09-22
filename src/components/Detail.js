import React from 'react'
import styled from 'styled-components'

function Detail() {
	return (
		<Container>
			<Background>
				<img
					src='https://lumiere-a.akamaihd.net/v1/images/h_avengersendgame_19751_b8067b68.jpeg?region=0,0,2048,878'
					alt='Background__image'
				/>
			</Background>
			<ImageTitle>
				<img
					src='https://lumiere-a.akamaihd.net/v1/images/l_avengersendgame_19751_779bf2a1.png?region=0,0,400,170'
					alt=''
				/>
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src='/images/play-icon-black.png' alt='Play' />
					<span>PLAY</span>
				</PlayButton>
				<TrailerButton>
					<img src='/images/play-icon-white.png' alt='Trailer' />
					<span>TRAILER</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src='/images/group-icon.png' alt='Group' />
				</GroupWatchButton>
			</Controls>
			<SubTitle>PG-13 3h 1min April 26, 2019 Action, Adventure, Science Fiction</SubTitle>
			<Description>
				The grave course of events set in motion by Thanos that wiped out half the universe and
				fractured the Avengers ranks compels the remaining Avengers to take one final stand in
				Marvel Studios’ grand conclusion to twenty-two films, “Avengers: Endgame.” Kevin Feige
				produces “Avengers: Endgame,” and Anthony and Joe Russo are the directors. Louis D’Esposito,
				Victoria Alonso, Michael Grillo, Trinh Tran, Jon Favreau and Stan Lee are the executive
				producers, and Christopher Markus & Stephen McFeely wrote the screenplay.
			</Description>
		</Container>
	)
}

export default Detail

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`
const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
const ImageTitle = styled.div`
	height: 30vh;
	min-hieght: 170px;
	width: 35vw;
	min-width: 200px;
	margin-bottom: 20px;
	margin-top: 60px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
const Controls = styled.div`
	display: flex;
	align-items: center;
`
const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	padding: 0 24px;
	margin-right: 22px;
	display: flex;
	align-items: center;
	outline: none;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
		background: rgb(230, 230, 230);
	}
`
const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid #fff;
	color: #fff;
	text-transform: uppercase;

	&:hover {
		background: rgba(0, 0, 0, 0.6);
	}
`
const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid #fff;
	background: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-right: 16px;

	span {
		font-size: 30px;
		color: #fff;
	}
`
const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
	color: rgb(249,249,249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`
const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	max-width: 760px; 
	color: rgb(249,249,249);


`