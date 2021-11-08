import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Contact extends React.Component {
	render() {
		return(
			<section id='contact'>
				<h2><FontAwesomeIcon icon={faEnvelope} />Contact</h2>
				<form>
					<label>Nom</label>
					<input type='text' placeholder='Nom *' id='email' data-validation-required-message="Veuillez saisir votre nom." required />
					<label>Email</label>
					<input type='email' placeholder='Email *' id='email' data-validation-required-message="Veuillez saisir votre addresse email." required />
					<label>Message</label>
					<input type='text' placeholder='Message *' id='message' data-validation-required-message="Veuillez saisir votre message." required />
					<button type='submit'>Envoyer</button>
				</form>
			</section>
		);
	}
}

export default Contact;