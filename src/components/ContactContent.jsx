import ButtonLink from "./ButtonLink";

const ContactContent = () => {
  return (
    <div className="contact__wrapper">
      <h3 className="contact__subheading">Get In Touch</h3>
      <p>
        I am currently looking for new opportunities and would love to connect!
        Whether you have a question, a potential role, or just want to say hi,
        my inbox is always open. I’ll try my best to get back to you promptly!
      </p>

			<ButtonLink href="mailto:fisayo.animashaun@outlook.com"  className="contact__email">Say Hello</ButtonLink>
    </div>
  );
};

export default ContactContent;
