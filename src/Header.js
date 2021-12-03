import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import './Header.css';


class Header extends React.Component {
	render() {
		return(
			<header>
				<h1>Matthieu Van Wittenberghe</h1>
				<p>Développeur Web</p>
				<a id ='dlcv' href='#' target='_blank'>
					Mon CV
					<br></br>
					<br></br>
					<FontAwesomeIcon icon={faFilePdf} size='3x'/>
				</a>
			</header>
		);
	}
}

export default Header;