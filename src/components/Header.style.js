import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Div } from '../theme/grid'
import { Img } from '../theme/types'
import media from '../theme/media'

export const NavContainer = styled(Flex)`
	justify-content: space-between;
	align-items: center;
	background-color: #FFF;
	width: 100%;
`;

export const NavLink = styled(Link)`
	padding-top: 15px;
	padding-bottom: 15px;
	font-family: 'Fredoka One', cursive;
	position: relative;
	font-size: 1.2em;
	text-decoration: none;
	transition: 0.5s ease;
	color: #F7B733;

	${media.desktop `
		font-size: 1em;
	`}
	${media.tablet `
		font-size: .75em;
		padding-left: 8px;
		`}
	&:hover {
		color: hotpink;
		&:after {
			content: ' ';
			position: absolute;
			text-decoration: none;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transform: scale(1.3);
		}
	}
`

export const NavItem = styled(Div)`
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 5%;
	font-family: 'Fredoka One', cursive;
	position: relative;
	font-size: 1.2em;
	text-decoration: none;
	transition: 0.5s ease;
	color: #F7B733;

	${media.desktop `
		font-size: 1em;
	`}
	${media.tablet `
		font-size: .75em;
		padding-left: 8px;
		`}
	&:hover {
		color: hotpink;
		&:after {
			content: ' ';
			position: absolute;
			text-decoration: none;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			transform: scale(1.3);
		}
	}
`

export const SoundWrapper = styled(Div)`
	padding-right: 7%;
`

export const SmallLogo = styled(Img)`
	content: url('/eggs/egg6.png');

	${media.tablet `
		max-width: 30px;
		padding-left: 15px;
		padding-right: 15px;
	`}
`
