import emailjs from '@emailjs/browser';

export default function sendEmail(data) {

    let templateParams = {
        name: data.name,
        email: data.email,
        message: data.message
    };

    emailjs.send('service_3pyxgei','template_95pa7n8', templateParams, 'p6HYaz_PDO91OcAEG')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});

    // console.log(data)
}