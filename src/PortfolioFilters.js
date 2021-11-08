import React from 'react';

class PortfolioFilters extends React.Component {
	render() {
		return(
			<div>
				<button className='active'>Show All</button>
				<button>React</button>
				<button>Wordpress</button>
				<button>Portfolio</button>
			</div>
		);
	}
}

export default PortfolioFilters;