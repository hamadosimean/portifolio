import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. Whether you
        have a question or just want to say hi, I'll try my best to get back to
        you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
            <a
              href="mailto:hamadosimean20@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              hamadosimean20@gmail.com
            </a>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Social Profiles
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/hamadosimean/"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/hamadosimean"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/simeanhamado"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-slate-800 p-8 rounded-xl border border-slate-700"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="Your message..."
            ></textarea>
          </div>

          {status.message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
