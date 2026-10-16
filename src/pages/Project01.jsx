import placeholder from '../assets/portfolio_placeholder_img.jpg';
import scenery_3 from '../assets/images/scenery_3.jpg';
import p1_techstackData from '../data/p1_techstackData';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import project01Data from '../data/project01Data';
import { motion } from 'motion/react';
import Footer from '../components/Footer';
import VisitWebsite from '../components/VisitWebsite';

export default function Project01() {
  const ref = useRef(null);
  const [titleSelected, setTitleSelected] = useState(p1_techstackData[0].name);
  const [descSelected, setDescSelected] = useState(
    p1_techstackData[0].description
  );
  const [tabSelected, setTabSelected] = useState('01');

  const stackDivs = p1_techstackData.map((item) => {
    return (
      <>
        <motion.div
          className="pp_stack_element"
          whileHover={{
            backgroundColor:
              tabSelected !== item.id ? 'rgba(0,0,0,0.05)' : '#5C6AE5',

            transition: { duration: 0.1, ease: 'easeInOut' },
          }}
          initial={{ scale: 1, opacity: 1 }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: 'easeInOut' },
          }}
          animate={{
            backgroundColor: tabSelected === item.id ? '#5C6AE5' : '',
            color: tabSelected === item.id ? '#FFFFFF' : '#000000',
            borderColor: tabSelected === item.id ? 'none' : '#000000',
          }}
          onClick={function () {
            setTitleSelected(item.name);
            setDescSelected(item.description);
            setTabSelected(item.id);
          }}
        >
          <img className="pp_stack_element_icon" src={item.icon}></img>
          <motion.div
            className="pp_stack_element_name"
            animate={{
              color: tabSelected === item.id ? '#FFFFFF' : '#000000',
            }}
          >
            {item.name}
          </motion.div>
        </motion.div>
        {item.id < p1_techstackData.length ? (
          <div className="pp_stack_separation"></div>
        ) : (
          ''
        )}
      </>
    );
  });

  const componentGallery = project01Data.map((item) => {
    return (
      <motion.div
        viewport={{ root: ref, once: true }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2, delay: 0.4, ease: 'easeInOut' },
        }}
      >
        {/* <h3 className="project_page_comp_id">Komponente 01_{item.id}</h3> */}
        <h3 className="project_page_comp_name">{item.component_title}</h3>
        <div className="pp_comp_poster">
          <div className="pp_comp_sideline"></div>
          {/* <img className="pp_comp_img"src={item.component_img}></img> */}
          <video className="pp_comp_clip" autoPlay loop muted playsInline>
            <source src={item.component_clip} type="video/mp4" />
          </video>
          <p className="pp_comp_desc">{item.component_desc}</p>
        </div>
        {item.id < project01Data.length ? (
          <div className="pp_comp_separation"></div>
        ) : (
          ''
        )}
      </motion.div>
    );
  });

  return (
    <>
      <Navbar />
      <div className="page_start"></div>
      <div className="project_page">
        <div className="project_page_header">
          <h1>Projekt</h1>
          <h1>01</h1>
        </div>
        <img className="project_page_banner" src={scenery_3}></img>
      </div>
      <div className="project_page_section">
        <h1 className="project_page_project_title">Die Umweltpsychologie</h1>
        <p className="project_page_project_desc">
          Welchen Einfluss haben Menschen auf ihre Umwelt? Wie prägt uns unsere
          physische und soziale Umgebung? Mit diesen Fragen beschäftigt sich die
          Umweltpsychologie. Dieses Projekt, welches im Rahmen meiner
          Bachelorarbeit entwickelt wurde, vermittelt die Kernkonzepte des
          Themas mithilfe einer „Scrollytelling“-Website. <br />{' '}
          „Scrollytelling“, eine Kombination aus „Scrolling“ und „Storytelling“,
          bezeichnet eine bestimmte Art von Website, bei welchem der Verlauf der
          Geschichte durch die Scroll-Interaktion des Nutzers gesteuert wird.
          Ziel ist es, ein immersives Leseerlebnis zu schaffen, das den
          Nutzenden hilft, die Informationen besser verarbeiten zu können.
        </p>
      </div>

      <div className="project_page_section_techstack">
        <h2 className="project_page_section_title">Tech Stack</h2>
        <div className="project_page_tech_stack">
          <div>{stackDivs}</div>
          <div className="pp_stack_content">
            <h3>{titleSelected}</h3>
            <p>{descSelected}</p>
          </div>
        </div>
      </div>
      <div className="project_page_section project_page_gallery">
        <h2 className="project_page_section_title">Highlights</h2>

        {componentGallery}
      </div>
      <VisitWebsite url="http://akramadam.umwelt-psychologie.de/" />
      <Footer />
    </>
  );
}
