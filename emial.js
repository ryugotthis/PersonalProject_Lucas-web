const SERVICE_ID = 'service_w4mzs2r';
const TEMPLATE_ID = 'template_4zc9lc3';
const PUBLIC_KEY = 'INudCyFguDeLY82Ie';

const sendMail = (event) => {
  let contactName = document.getElementById('name');
  let contactEmail = document.getElementById('email');
  let contactMessage = document.getElementById('message');
  if (contactName.value.length == 0) {
    contactName.style.backgroundColor = 'pink';
    contactName.setAttribute('placeholder', '*please fill your name');
    contactName.focus();
    event.preventDefault();
  }
  if (contactEmail.value.length == 0) {
    contactEmail.style.backgroundColor = 'pink';
    contactEmail.setAttribute('placeholder', '*please fill your email');
    contactEmail.focus();
    event.preventDefault();
  }
  if (contactMessage.value.length == 0) {
    contactMessage.style.backgroundColor = 'pink';
    contactMessage.setAttribute('placeholder', '*please fill message');
    contactMessage.focus();
    event.preventDefault();
  }
  try {
    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params).then((res) => {
      console.log(res);
      alert('Your Message Sent Successfully!');
    });
  } catch (error) {
    console.log(error);
  }
  getElementById('name').value = '';
  document.getElementById('email').value = '';
  message: document.getElementById('message').value = '';
};

// $('#contactBox').on('submit', function (event) {
//   console.log('hey');
//   event.preventDefault(); // prevent reload

//   const formData = new FormData(this);
//   formData.append('service_id', SERVICE_ID);
//   formData.append('template_id', TEMPLATE_ID);
//   formData.append('user_id', PUBLIC_KEY);

//   $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//     type: 'POST',
//     data: formData,
//     contentType: false, // auto-detection
//     processData: false, // no need to parse formData to string
//   })
//     .done(function () {
//       alert('Your mail is sent!');
//     })
//     .fail(function (error) {
//       alert('Oops... ' + JSON.stringify(error));
//     });
// });
