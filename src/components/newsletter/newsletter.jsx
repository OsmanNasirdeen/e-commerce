import React from "react";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-text-container">
        <h1>subscribe to us now</h1>
        <p>latest news, updates and deals directly mailed to your inbox.</p>
      </div>
      <div className="newsletter-email-container">
        <form action="" method="post">
          <input
            placeholder="email address here"
            type="email"
            name="newsletter-email"
            id="newsletter-email"
            className="newsletter-email"
            required
          />
          <button className="newsletter-btn">subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
