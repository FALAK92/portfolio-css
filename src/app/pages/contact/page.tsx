import Link from "next/link";
import "@/app/style/contact.css";

const Contact = () => {
  return (
    <section id = "contact" className="section">
    <div className="contact-Container">
      <h1 className="heading">Contact Us</h1>
      <form className="form">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input className="input " type="text" id="name" name="name" required />

        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          required
        />

        <label className="label" htmlFor="message">
          Message:
        </label>
        <textarea className="textarea" id="message" name="message" required />

        <button className="button" type="submit">
          Send Message
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
