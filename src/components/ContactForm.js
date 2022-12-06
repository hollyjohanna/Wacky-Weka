import axios from "axios";
import { useState } from "react";

const formEndpoint = process.env.REACT_APP_WP_API_CONTACT_FORM;

const ContactForm = () => {
  // collect inputs and store in state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");
  // set up state for our contact form
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    // process all our data (i.e. the user inputs) into a single object
    const formData = new FormData();
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-inquiry", inquiry);
    formData.append("your-message", message);

    // post our data to contact form 7, which is in the wordpress backend
    // use axios to do it- first argument is the endpoint, the second argument is the form data,
    // the third argument is the headers, which is telling the server what to expect
    axios
      .post(formEndpoint, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log("test");
        console.log(response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        setError("There was an error! Please try again later!");
      });
  };
  if (submitted) {
    return (
      <>
        <h3>Thank you!</h3>
        <p>Your message was sent. We'll be in touch soon.</p>
        <button
          onClick={() => window.location.reload(false)}
          id="refresh-contact-form-btn"
        >
          Send Another Message
        </button>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h3>Error!</h3>
        <p>
          Sorry, we were unable to send your message. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload(false)}
          id="refresh-contact-form-btn"
        >
          Try Again
        </button>
      </>
    );
  }

  return (
    <div id="form-container">
      <form
        method="POST"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div id="form">
          <label forhtml="name">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label forhtml="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label forhtml="inquiry">Inquiry</label>
          <select
            id="inquiry"
            name="inquiry"
            required
            onChange={(e) => {
              setInquiry(e.target.value);
            }}
          >
            <option value="Select Inquiry Type" disabled defaultValue>
              Select Inquiry Type
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Plant Supply">Plant Supply</option>
            <option value="Garden Design">Garden Design</option>
            <option value="Wholesale Plant Supply">
              Wholesale Plant Supply
            </option>
            <option value="Plant Deliveries">Plant Deliveries</option>
          </select>

          <label forhtml="message">Message</label>
          <textarea
            type="text"
            name="message"
            required
            draggable="true"
            placeholder="Your Message Here..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button type="submit" className="button">
            Send A Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
