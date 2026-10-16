import { NavLink } from 'react-router';
import { motion } from 'motion/react';

export default function VisitWebsite(props) {
  return (
    <>
      <a href={props.url}>
        <motion.button
          className="visit_website_fixed"
          whileHover={{
            scale: 1.03,
            backgroundColor: '#6b7afa',
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          initial={{ scale: 1, opacity: 1 }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: 'easeInOut' },
          }}
          animate={{
            backgroundColor: '#5C6AE5',
            color: '#FFFFFF',
          }}
        >
          Zur Webseite
        </motion.button>
      </a>
    </>
  );
}
