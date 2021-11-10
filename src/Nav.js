import './fonts.css';
import React from 'react';
import logo from './logo.png';
import './Nav.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		}

		this.handleScroll = this.handleScroll.bind(this);
	}



	handleScroll() {
		if (window.scrollY > 50) {
			this.setState({collapse: true});
		} else {
			this.setState({collapse: false});
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<nav className={this.state.collapse ? 'collapse' : ''} role='navigation'>
				<div className='container'>
					<a href='#' className='logo'><img src={logo} alt="MAVW" /></a>
					<div className='menu'>
						<input type='checkbox' id='navToggle' />
						<label htmlFor='navToggle' className='burgerMenu'>&#x2630;</label>
						<ul className='navbarLinks'>
							<li><a href='#'>Qui suis-je?</a></li>
							<li><a href='#'>Portfolio</a></li>
							<li><a href='#'>Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;