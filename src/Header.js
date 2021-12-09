import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


class Header extends React.Component {
	render() {
		return(
			<header>
				<div class='container'>
					<h1>Matthieu Van Wittenberghe</h1>
					<p>Développeur Web</p>
					<div>
						<a id='dlcv' href='#' target='_blank'>
							Mon CV
							<br></br>
							<br></br>
							<FontAwesomeIcon icon={faFilePdf} size='3x'/>
						</a>
					</div>
					<div>
						<a id='godown' href='#about'>
							<FontAwesomeIcon icon ={faAngleDown} size='4x'/>
						</a>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;