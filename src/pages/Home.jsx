import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="page_start"></div>
      <Navbar />
      <Showcase />
      <div className="page_section">
        <AboutMe />
      </div>
      <div className="page_section">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
