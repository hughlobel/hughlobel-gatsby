import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Modal extends React.Component {
  componentDidMount() {
    // Contact form js
    (() => {
      const form = document.querySelector('form');
      form.onsubmit = e => {
        e.preventDefault();
        // Escape if the honeypot has been filled
        if (!!form.children.namedItem('honeypot').value) return;

        // Prepare data to send
        const data = {};
        const formElements = Array.from(form);
        formElements.map(input => (data[input.name] = input.value));

        // Construct an HTTP request
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));

        // Callback function
        xhr.onloadend = response => {
          if (response.target.status === 200) {
            let message1 = document.getElementById("sendingMessage");
            let message2 = document.getElementById("messageReceived")
            message1.style.display = "none";
            message2.style.display = "block";
            console.log("message success")
          } else if (response.target.status === 0) {
            let message1 = document.getElementById("sendingMessage");
            let message2 = document.getElementById("messageReceived")
            message1.style.display = "none";
            message2.style.display = "block";
          }
        };
      };
    })();
    // Expand contact modal on click
    document.addEventListener('click', function (event) {
      if (event.target.matches ('.contactModal.open') || event.target.matches('.modalCloseIcon path')) {
        event.preventDefault();
        var element = document.getElementById("contactModal");
        element.classList.remove("open");
        element.classList.add("closed");
        return;
      }
      if (!event.target.matches('.openModal span') && !event.target.matches('.openModal') && !event.target.matches('#contactModal.closed *')) return;
      event.preventDefault();
      var elem = document.getElementById("contactModal");
      elem.classList.remove("closed");
      elem.classList.add("open");
    
    }, false);
  }
  render() {
    const contactFormLoad = () => {
      var form = document.getElementById("contactForm");
      var message1 = document.getElementById("sendingMessage")
      form.style.display = "none";
      message1.style.display = "block";
    }

    return (
      <div id="contactModal" className="contactModal closed">
        <section className="formOpen">
          <FontAwesomeIcon icon={faRocket} size="2x" />
          <p>Contact</p>
        </section>
        <section className="formSection">
          <div className="bodyCopy">
            <div className="modalCloseIcon"><FontAwesomeIcon icon={faTimes} size="1.5x" /></div>
            <h2>Ready to Start a Conversation?</h2>
            <p>
              Get in touch and you'll receive a reply shortly! 
            </p>
          </div>
          <div className="contactVisible oneColumn perfectCenter">
            <form id='contactForm' action="https://bg6fq6a6gf.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer" method="POST" className="perfectCenter">
              <input type="hidden" name="ses_address" value="hugh.lobel@gmail.com" />
              <input type="hidden" name="send_to" value="hugh.lobel@gmail.com" />
              <input type="hidden" name="subject" value="New Message from the hughlobel.com Contact Form" />
              <input type="input" name="honeypot" value="" style={{display: 'none'}} tabindex="-1" autocomplete="off" />
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="reply_to" required />
              </label>
              <label>
                Message
                <textarea name="message" required rows="8" ></textarea>
              </label>
              <button id="formSend" className="button-white button-transparent" onClick={contactFormLoad} type="submit"><span>Send Message</span></button>
            </form>
            <p id="sendingMessage" className="contactHidden">Your message is being sent</p>
            <p id="messageReceived" className="contactHidden">Thank you for reaching out! Expect a reply shortly.</p>
          </div>
        </section>
      </div>
    )
  }
}