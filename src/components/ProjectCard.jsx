import { motion } from 'motion/react';
import { NavLink } from 'react-router';

const MotionNavLink = motion.create(NavLink);

export default function ProjectCard(props) {
  return (
    <MotionNavLink
      className="project_card"
      to={`project_${props.id}`}
      initial={{ scale: 1 }}
      // animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeInOut' },
        boxShadow: '0 0 30px rgba(107, 122, 250, 1)',
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.05, ease: 'easeInOut' },
      }}

      end
    >
      <div className="project_card_tags">
        {props.tags.map((item) => {
          return <div className="project_tag">{item}</div>;
        })}
      </div>
      <div className="project_content">
        <div className="project_number">{props.id}</div>
        <div className="project_text">
          <h2 className="project_text_title">{props.title}</h2>
          <h3 className="project_text_desc">{props.description}</h3>
        </div>
      </div>
      <div
        className="project_card_bg"
        style={{
          backgroundImage: ` url(${props.bg})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="project_card_bg_overlay"></div>
      </div>
    </MotionNavLink>
  );
}
