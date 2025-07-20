import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ fullname: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Ad Banner at the top */}
      <div className="container mb-4"></div>
      <main className="container py-5">
        <div className="row justify-content-center">
          {/* Left side: Get in Touch Form */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 card shadow">
            <div className="" text-align>
              <h3 className="mb-3 card-title">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Right side: Get in Touch and FAQ Cards */}
          <div className="col-12 col-lg-6">
            <div className="row gy-4">
              {/* Get in Touch Card (duplicate for right side as requested) */}
              <div className="col-12">
                <div className="card shadow rounded-3 p-4 h-100">
                  <h4 className="mb-3">Get in Touch</h4>
                  <h5>Email Support</h5>
                  <p>
                    Have questions or need support? Fill out the form or email
                    us at{" "}
                    <a href="mailto:support@example.com">support@example.com</a>
                    .
                  </p>
                  <h5>Academic Content</h5>
                  <p>
                    Questions about courses and quizzes <br />
                    <a href="mailto:academic@freshmanexam.com">
                      academic@freshmanexam.com
                    </a>
                  </p>
                  <h5>Technical Issues</h5>
                  <p>
                    For website problems and bug reports, please email us at{" "}
                    <a href="mailto:tech@freshmanexam.com">
                      tech@freshmanexam.com
                    </a>
                  </p>
                  <h5>Partnerships</h5>
                  <p>
                    Collaboration and business inquiries can be directed to{" "}
                    <a href="mailto:partnerships@freshmanexam.com">
                      partnerships@freshmanexam.com
                    </a>
                  </p>
                </div>
              </div>
              {/* FAQ Card */}
              <div className="col-12">
                <div className="card shadow rounded-3 p-4 h-100">
                  <h4 className="mb-3">Frequently Asked Questions</h4>
                  <div>
                    <strong>Q: How do I contact support?</strong>
                    <p>A: Use the form or email us directly.</p>
                    <strong>Q: When will I get a response?</strong>
                    <p>A: We aim to respond within 24 hours.</p>
                    <strong>Q: Can I request new features?</strong>
                    <p>
                      A: Yes! Let us know your suggestions in the message box.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
