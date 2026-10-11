import portrait from "../assets/portfolio_portrait.png"
import portrait_comp from "../assets/images/about_me_portrait_comp.png"
import {motion} from 'motion/react'
import { useRef } from 'react';

export default function AboutMe() {
    const ref = useRef(null);
    return (
        <motion.article className="about_me"
        viewport={{ root: ref, once: true }}
          initial={{  opacity: 0 }}
          whileInView={{
            
            opacity: 1,
            transition: { duration: 0.2 , delay: 0.4, ease: 'easeInOut' },
          }}>
           <div > {/* className="about_me_portrait" */}
                {/* <img className="about_me_portrait_img" src={portrait}></img> */}
                <img className="about_me_portrait" src={portrait_comp} alt="" />
           </div>
           <div className="about_me_content">
                <h1 className="about_me_content_title">Über mich</h1>
                <p className="about_me_content_description">Ich bin Akram Adam und studiere Medieninformatik an der Universität des Saarlandes mit einem besonderen Interesse an der Mensch-Computer-Interaktion. 
<br/> <br/>
Mein Studium erkundet die Schnittstelle zwischen der Informatik und der Gestaltung und der Psychologie digitaler Medien. Mich fasziniert, wie Menschen sich verhalten und wie sie Informationen verarbeiten, wenn sie mit digitalen Systemen interagieren. Ich verfüge neben dem Know-how, digitale Systeme zu erforschen und Prototypen zu entwickeln, auch über das Wissen, diese Entwürfe in funktionsfähige Frontend-Anwendungen zu übersetzen.
<br/> <br/>
Meine Neugierde reicht von KI und maschinellem Lernen bis hin zur Entwicklung von Tangible User Interfaces. Ich interessiere mich dafür, an neuartigen Technologien zu forschen, die unsere Interaktion mit digitalen Medien grundlegend erweitern. Eingabemöglichkeiten, die weit über einfache Tastatureingaben hinausgehen und die Steuerung durch flexiblere Alternativen, wie etwa Gesten- und Sprachsteuerung, ermöglichen.
</p>
           </div>
        </motion.article>
    )
}