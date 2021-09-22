import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
	const [userName, setUserName] = useState(false)

	const signIn = () => {
		setUserName(!userName)
	}

	const finishedUser = () => {
		if (window.confirm('Do you really want to leave ??')) {
			setUserName(false)
		}
	}

	return (
		<Nav>
			<Link to='/'>
				<Logo src='/images/logo.svg' />
			</Link>
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<a>
							<img src='/images/home-icon.svg' alt='Home-icon' />
							<span>HOME</span>
						</a>
						<a>
							<img src='/images/search-icon.svg' alt='Home-icon' />
							<span>SEARCH</span>
						</a>
						<a>
							<img src='/images/watchlist-icon.svg' alt='Home-icon' />
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src='/images/original-icon.svg' alt='Home-icon' />
							<span>ORIGINAL</span>
						</a>
						<a>
							<img src='/images/movie-icon.svg' alt='Home-icon' />
							<span>MOVIES</span>
						</a>
						<a>
							<img src='/images/series-icon.svg' alt='Home-icon' />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<UserImg onClick={finishedUser} src='https://sun9-71.userapi.com/impf/c857624/v857624267/5e243/cT7eUC9_7FQ.jpg?size=1080x1080&quality=96&sign=62b4d2a4a13afc22f42c37a19ca4c0ff&type=album' />
				</>
			)}
		</Nav>
	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`
const Logo = styled.img`
	width: 80px;
`
const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.62px;
			margin-left: 10px;
			position: relative;

			&:after {
				content: '';
				height: 2px;
				background: #fff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms ease-in-out;
				transform: scaleX(0);
			}
		}
		&:hover {
			span::after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`
const UserImg = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
	cursor: pointer;
`
const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-space: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0,0,0,0.6);
	cursor: pointer;
	transition: all 0.25s ease-in-out 0s;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`
const LoginContainer = styled.div`
	flex: 1;	
	display: flex;
	justify-content: flex-end;
	
`