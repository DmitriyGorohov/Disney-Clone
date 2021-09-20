import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<Nav>
			<Logo src='/images/logo.svg' />
			<NavMenu>
				<a>
					<img src="/images/home-icon.svg" alt="Home-icon" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/images/search-icon.svg" alt="Home-icon" />
					<span>SEARCH</span>
				</a>
				<a>
					<img src="/images/watchlist-icon.svg" alt="Home-icon" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/images/original-icon.svg" alt="Home-icon" />
					<span>ORIGINAL</span>
				</a>
				<a>
					<img src="/images/movie-icon.svg" alt="Home-icon" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/series-icon.svg" alt="Home-icon" />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src='https://sun9-76.userapi.com/impf/p7s5nXIOTtCRstlMlzZrS3oZj_LE7pWB-ywdiA/rA2IIrAqvdY.jpg?size=2000x1335&quality=96&sign=ad7dccf816f97173c3b4f84276e1dfc1&type=album' />

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