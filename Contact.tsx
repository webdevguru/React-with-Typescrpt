const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Feel free to get in touch with us if you have any questions or need assistance!</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
