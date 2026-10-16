import phone from '../assets/icons/phone_icon.svg';
import mail from '../assets/icons/mail_icon.svg';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  return (
    <>
      <motion.div
        className="contact_content"
        viewport={{ root: ref, once: true }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2, delay: 0.4, ease: 'easeInOut' },
        }}
      >
        <h1 className="contact_title">Kontakt</h1>
        <p className="contact_description">
          Lassen Sie uns einander kennenlernen!
        </p>
        <div className="contact_section">
          <div className="contact_item">
            <img src={phone}></img>
            <h2>+49 1573 1844947</h2>
          </div>
          <div className="contact_item">
            <img src={mail}></img>
            <h2>akramadam001@gmail.com</h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}
