import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<Nav>
			<Logo src='/images/logo.svg' />
			<NavMenu>
				<a href='/'>
					<img src="/images/home-icon.svg" alt="Home-icon" />
					<span>HOME</span>
				</a>
				<a href='/'>
					<img src="/images/search-icon.svg" alt="Home-icon" />
					<span>SEARCH</span>
				</a>
				<a href='/'>
					<img src="/images/watchlist-icon.svg" alt="Home-icon" />
					<span>WATCHLIST</span>
				</a>
				<a href='/'>
					<img src="/images/original-icon.svg" alt="Home-icon" />
					<span>ORIGINAL</span>
				</a>
				<a href='/'>
					<img src="/images/movie-icon.svg" alt="Home-icon" />
					<span>MOVIES</span>
				</a>
				<a href='/'>
					<img src="/images/series-icon.svg" alt="Home-icon" />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src='https://sun9-71.userapi.com/impf/c857624/v857624267/5e243/cT7eUC9_7FQ.jpg?size=1080x1080&quality=96&sign=62b4d2a4a13afc22f42c37a19ca4c0ff&type=album' />

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