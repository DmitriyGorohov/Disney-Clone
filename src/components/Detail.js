import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Detail() {
	const [movie, setMovie] = React.useState([])
	const { id } = useParams()

	useEffect(() => {
		axios.get(`https://613f5090e9d92a0017e175f8.mockapi.io/movies`).then((response) => {
			const respData = response.data
			setMovie(respData.filter((data) => data.id == id)[0])
		})
	}, [])

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} alt='Background__image' />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt='' />
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
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
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
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`
const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	max-width: 760px;
	color: rgb(249, 249, 249);
`
