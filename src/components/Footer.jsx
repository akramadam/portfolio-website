import github from '../assets/logos/GitHub_icon.png';

export default function Footer() {
  return (
    <footer>
      © Copyright - Akram Adam - {new Date().getFullYear()}
      <a href="https://github.com/akramadam" target="_blank">
        <img className="footer_icon" src={github}></img>
      </a>
    </footer>
  );
}
