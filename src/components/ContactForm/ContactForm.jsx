import styles from "./Contact.module.css";
import Button from "../Button/Button";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button text="VIA SUPPORT CHAT" />
      </div>

      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
