import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component {
	render() {
		return(
			<section id='about'>
				<h2><FontAwesomeIcon icon={faUser} />Qui suis-je?</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut varius enim, vitae vestibulum nunc. Mauris justo nunc, vulputate iaculis lectus consequat, auctor sagittis sapien. Aliquam luctus imperdiet neque sit amet ullamcorper. Vestibulum quis interdum ante. Morbi tincidunt lorem a aliquet scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lobortis sit amet neque id blandit. Proin nec lectus vel leo consectetur gravida quis nec quam. Nullam suscipit blandit arcu ut porta. </p>
			</section>
		);
	}
}

export default About;