import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
	return (
		<Container>
			<CTA>
				<CTALoginOne src='/images/cta-logo-one.svg' />
				<SignUp>
					<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
						GET ALL THERE
					</Link>
				</SignUp>
				<Description>
					Disney+ Day Content Premieres from Disney, Pixar, Marvel, Star Wars, and National
					Geographic
				</Description>
				<CTALoginTwo src='/images/cta-logo-two.png' />
			</CTA>
		</Container>
	)
}

export default Login

const Container = styled.div`
	position: relative;
	height: calc(100vh - 70px);
	display: flex;
	align-items: top;
	justify-content: center;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.7;
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/images/login-background.jpg');
		z-index: -1;
	}
`

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
	margin-top: 100px;
	display: flex;
	align-items: center;
	flex-direction: column;
`
const CTALoginOne = styled.img``
const CTALoginTwo = styled.img`
	width: 90%;
`
const SignUp = styled.a`
	width: 100%;
	background: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	text-align: center;
	color: #f9f9f9;
	border-radius: 4px;
	cursor: pointer;
	font-size: 18px;
	transition: all 0.15s;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background: #0483ee;
	}
	&:active {
		background: #0063e5;
	}
`
const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`
