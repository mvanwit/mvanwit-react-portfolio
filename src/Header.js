import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


class Header extends React.Component {
	render() {
		return(
			<header>
				<h1>Matthieu Van Wittenberghe</h1>
				<p>Développeur Web</p>
				<a href='#' target='_blank'>
					Mon CV
					<FontAwesomeIcon icon={faFilePdf} />
				</a>
			</header>
		);
	}
}

export default Header;