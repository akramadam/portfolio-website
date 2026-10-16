import Navbar from '../components/Navbar';

import ProjectCard from '../components/ProjectCard';

import projectDataAll from '../data/projectDataAll';
import Footer from '../components/Footer';

export default function Projects() {
  const projectAllElements = projectDataAll.map((item) => {
    return (
      <>
        <ProjectCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          tags={item.tags}
          bg={item.img}
        />
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="page_start"></div>
      <div className="projects_page">
        <h1 className="showcase_title">Projekte</h1>
        <div className="form_center">
          <div className="card_grid">
            {projectAllElements}
            {/* <ProjectCard/>
                      <ProjectCard/> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
