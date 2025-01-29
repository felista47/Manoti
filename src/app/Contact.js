import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import background from '../images/backgroundimg.webp';


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_j4x5ruk";
    const templateId = "template_bzykmzh";
    const publicKey = "TXDWopkWX2AtgzVhz";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Failed to send message. Try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})`, backgroundColor: "rgba(49, 48, 48, 0.5)", backgroundBlendMode: "overlay" }}
    >
      <h2 className="text-3xl font-bold text-center text-white">Love to hear from you,</h2>
      <h3 className="text-2xl font-bold text-center mb-4 text-white">Get in touch 👋</h3>
      <p className="text-center text-gray-300 mb-4">
        Feel free to contact me with questions about any of my projects or services.
        I'll get back to you within 24 hours!
      </p>
      <p className=" text-white font-bold text-center mb-6">
        +254745825378 or <a href="mailto:manotifelista9@gmail.com" className="underline">manotifelista9@gmail.com</a>
      </p>

      <form className="w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg p-6 text-gray-900 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name here."
            className="bg-white bg-opacity-50 text-gray-1000 p-2 rounded w-full shadow-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email here."
            className="bg-white bg-opacity-50 text-gray-1000 p-2 rounded w-full shadow-md"
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Enter the subject here."
          className="bg-white bg-opacity-50 text-gray-1000 p-2 rounded w-full mb-4 shadow-md"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Enter the message."
          className="bg-white bg-opacity-50 text-gray-1000 p-2 rounded w-full h-32 mb-4 shadow-md"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg shadow-lg" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="text-center mt-2 text-gray-300">{status}</p>}
      </form>
    </div>
  );
}
