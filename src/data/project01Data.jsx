import placeholder from '../assets/portfolio_placeholder_img.jpg';
import project01_gallery_comp1 from '../assets/clips/project01_gallery_comp1.mp4';
import project01_gallery_comp2 from '../assets/clips/project01_gallery_comp2.mp4';
import project01_gallery_comp3 from '../assets/clips/project01_gallery_comp3.mp4';

export default [
  {
    id: '01',
    component_id: '01_01',
    component_title: 'Flipcards',
    component_desc:
      'Die Flipcards sind eine der interaktiven Komponente der Website. Ein Klick auf die Karte löst eine Animation aus, die sie auf die Rückseite umblättert. Sie ermöglichen die selbstbestimmte Auseinandersetzung mit den Inhalten und stellen somit eine abwechslungsreichere Weise dar, die Information aufzunehmen.',
    component_img: placeholder,
    component_clip: project01_gallery_comp1,
  },
  {
    id: '02',
    component_id: '01_02',
    component_title: 'Dynamisches Datenfeld',
    component_desc:
      'Eine der Stärken von Scrollytelling ist die Datenvisualisierung. Zu diesem Zweck wurde eine dynamische Infografik entworfen, die aus einem Datenfeld mit 100 Kreisen besteht und Prozentangaben dynamisch darstellt. Je nach Aussage und deren Prozentwert wird somit eine entsprechende Anzahl von Kreisen hervorgehoben. Ein Kreis soll dabei eine Person repräsentieren. Die Kreise sollten immer in derselben Anzahl, jedoch in zufälliger Reihenfolge eingefärbt werden. Die Animation dieser Komponente sollte zudem durch Scrollen gesteuert werden. Durch Scrollen nach oben und unten wird die Grafik angepasst.',
    component_img: placeholder,
    component_clip: project01_gallery_comp2,
  },
  {
    id: '03',
    component_id: '01_03',
    component_title: 'Tabs',
    component_desc:
      'Die Besonderheit dieser Komponente besteht darin, dass auch sie nicht in erster Linie durch Klicken, sondern durch Scrollen gesteuert werden kann. Jede der Tabs können über die linken Buttons ausgewählt werden. Durch Scrollen wird der ausgewählte Tab geändert: Beim Scrollen nach unten springt man zur nächsten, und beim Scrollen nach oben zur vorherigen. Wenn jedoch ein bestimmter Tab ausgewählt werden soll, kann dies auch durch Klicken erfolgen. Ist ein Tab ausgewählt, wird zusätzlicher Text angezeigt, der Informationen zum ausgewählten Thema enthält.',
    component_img: placeholder,
    component_clip: project01_gallery_comp3,
  },
];
