import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setLoading(true);

    try {
      // Send message to yourself
      await emailjs.send(
        "service_vulr1af",
        "template_ne12m8b",
        formData,
        "r85X7Q_GuDWGZRPy1"
      );

      // Send auto-reply to user
      await emailjs.send(
        "service_vulr1af",
        "template_74eg2gr",
        formData,
        "r85X7Q_GuDWGZRPy1"
      );

      toast.success("Message sent successfully!");
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[500px] mx-auto p-8 bg-sand rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-night text-center">
        Get in Touch
      </h2>

      {submitted && (
        <div className="mb-6 text-night-shadow font-semibold text-center">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <label className="block mb-2 font-medium text-night">
          Name
          <input
            type="text"
            name="name"
            className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-sand-shadow focus:ring-night"
            } bg-white text-night`}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
          )}
        </label>

        {/* Email */}
        <label className="block mb-2 font-medium text-night">
          Email
          <input
            type="email"
            name="email"
            className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-sand-shadow focus:ring-night"
            } bg-white text-night`}
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
          )}
        </label>

        {/* Subject */}
        <label className="block mb-2 font-medium text-night">
          Subject
          <input
            type="text"
            name="subject"
            className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.subject
                ? "border-red-500 focus:ring-red-500"
                : "border-sand-shadow focus:ring-night"
            } bg-white text-night`}
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
          />
          {errors.subject && (
            <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>
          )}
        </label>

        {/* Message */}
        <label className="block mb-4 font-medium text-night">
          Message
          <textarea
            name="message"
            rows="5"
            className={`mt-1 block w-full rounded-md border px-3 py-2 resize-none focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-sand-shadow focus:ring-night"
            } bg-white text-night`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
          )}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-night hover:bg-night-shadow focus:ring-4 focus:ring-sand-shadow text-sand font-semibold py-3 rounded-md transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
