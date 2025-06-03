import './ContactPage.css';

function ContactPage() {
  return (
    <main className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Your Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Message:
          <textarea rows="5" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default ContactPage;
