import React from 'react';
import logo from './logo.png';
import './Nav.css';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<a href='#' className='logo'><img src={logo} alt="MAVW" /></a>
				<div className='menu'>
					<input type='checkbox' id='navToggle' />
					<label htmlFor='navToggle' className='burgerMenu'>&#x2630;</label>
					<ul className='navBar'>
						<li><a href='#'>Qui suis-je?</a></li>
						<li><a href='#'>Portfolio</a></li>
						<li><a href='#'>Contact</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;