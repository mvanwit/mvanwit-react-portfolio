import React from 'react';
import PortfolioFilters from './PortfolioFilters.js';
import PortfolioProject from './PortfolioProject.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class Portfolio extends React.Component {
	render() {
		return(
			<section id='portfolio'>
				<h2><FontAwesomeIcon icon={faFolderOpen} />Portfolio</h2>
				<PortfolioFilters />
				<PortfolioProject />
			</section>
		);
	}
}

export default Portfolio;