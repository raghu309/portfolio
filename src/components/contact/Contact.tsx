import Section from "../Section";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const Contact = () => (
  <Section id="contact" title="Contact Me" className="bg-gray-800">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
      <GetInTouch />
      <ContactForm />
    </div>
  </Section>
);

export default Contact;