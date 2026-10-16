import placeholder from '../assets/portfolio_placeholder_img.jpg';
import showcase_title_clipped from '../assets/clips/showcase_title_clipped.mp4';
import { motion } from 'motion/react';
import { NavLink } from 'react-router';

const MotionNavLink = motion.create(NavLink);

export default function Showcase() {
  return (
    <>
      <div className="showcase">
        <h1 className="showcase_title">Ausgewähltes Projekt</h1>
        {/* <div className="showcase_window" style={{backgroundImage: ` url(${placeholder})`,backgroundSize: 'cover' }}></div> */}

        <video className="showcase_window" autoPlay loop muted playsInline>
          <source src={showcase_title_clipped} type="video/mp4" />
        </video>

        <h1 className="showcase_project_title">
          Die{' '}
          <span className="showcase_project_title_bold">Umweltpsychologie</span>
        </h1>
        <p className="showcase_project_description">
          Ein tiefer Einblick in die Psychologie, die sich mit der
          wechselseitigen Beziehung zwischen Menschen und ihrer Umwelt befasst
        </p>
        <div className="showcase_project_buttons">
          <MotionNavLink
            to="projects/project_01"
            whileHover={{
              scale: 1.03,
              backgroundColor: '#404550',
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            initial={{ scale: 1, opacity: 1 }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1, ease: 'easeInOut' },
            }}
            animate={{
              backgroundColor: '#2A2D34',
              color: '#FFFFFF',
            }}
            className="showcase_project_button_project"
          >
            Zur Projektseite
          </MotionNavLink>
          <a href="http://akramadam.umwelt-psychologie.de/" target="_blank">
            <motion.button
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
              className="showcase_project_button_webpage"
            >
              Zur Webseite
            </motion.button>
          </a>
        </div>
      </div>
    </>
  );
}
