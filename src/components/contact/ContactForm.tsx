import { useState } from "react";
import { handleForm } from "../../firebase/service";
import Toast from "./Toast";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const saveMessage = async () => {
      try {
        const success = await handleForm({ name, email, message });
        if (success) {
          showToast("Message saved.", "success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          showToast("An error occurred.", "error");
        }
      } catch (err: any) {
        showToast(err?.message || "An unexpected error occurred.", "error");
      }
    };
    saveMessage();
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="form-name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="form-name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400 transition"
          />
        </div>
        <div>
          <label htmlFor="form-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="form-email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400 transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full bg-gray-700 border-gray-600 text-white rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400 transition"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
