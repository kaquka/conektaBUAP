import oaxaca from '/src/assets/img/oaxaca.jpg';
import avatar from '/src/assets/img/avatar.jpeg';
import lenovo from '/src/assets/img/lenovo.jpg';
import cobao from '/src/assets/img/cobao.png';
import anigamers from '/src/assets/img/anigamers.png';
import java from '/src/assets/img/java.jpg';
import agile from '/src/assets/img/agile.png';
import taskzenith from '/src/assets/img/taskZenith.png';
import upwork from '/src/assets/img/upwork.png';
import imgFeature from '/src/assets/img/imgFeature2.png';
import alienTalk from '/src/assets/img/alienTalk.jpeg';
import calendar from '/src/assets/img/calendar.png';
import uHungry from '/src/assets/img/uHungry.jpeg';

const data = [
  {
    type: 'SlideInfo',
    title: 'Mi historia',
    text: `Fullstack developer`,
    image: avatar,
  },
  {
    type: 'SlideInfo',
    title: 'Origen',
    year: '2001',
    text: 'Soy originario de Miahuatlán de Porfirio Díaz, Oaxaca. No crecí con tecnología, así que la primera vez que vi una computadora me sorprendí. Pensé que había personitas adentro trabajando.',
    image: oaxaca,
  },
  {
    type: 'SlideInfo',
    title: '1er trabajo',
    year: '2017',
    text: 'A los 16 años entré a trabajar en Etecom, el único lugar que era ciber/reparación de computadoras en el lugar donde residía.',
    image: lenovo,
  },
  {
    type: 'SlideProject',
    title: '1er website',
    year: '2018',
    subtitle: 'Stack:',
    text: 'HTML, CSS, JavaScript, PHP, MySQL',
    subtitle1: 'Logros:',
    text1: 'Desplegado en un servidor local',
    subtitle2: 'Aprendizaje:',
    text2: 'Ser autodidacta',
    image: cobao,
    demoLink: 'https://dominusdrow.github.io/dominusdrow.github.io-cobao42/',
    githubLink: 'https://github.com/DominusDrow/dominusdrow.github.io-cobao42',
  },
  {
    type: 'SlideProject',
    title: '2do website',
    year: '2018',
    subtitle: 'Stack:',
    text: 'HTML, CSS, JavaScript',
    subtitle1: 'Logros:',
    text1: 'Constante aprendizaje',
    subtitle2: 'Aprendizaje:',
    text2: 'Bootstrap, jQuery, SaaS',
    image: anigamers,
    demoLink: 'https://dominusdrow.github.io/dominusdrow.github.io-anigamers/',
    githubLink: 'https://github.com/DominusDrow/dominusdrow.github.io-anigamers',
  },
  {
    type: 'SlideProject',
    title: '1er proyecto',
    year: '2020',
    subtitle: 'Stack:',
    text: 'java, Maven, MySQL',
    subtitle1: 'Logros:',
    text1: 'Conección a base de datos',
    subtitle2: 'Aprendizaje:',
    text2: 'No me gusta Java',
    image: java,
    githubLink: 'https://github.com/DominusDrow/Curso_Java',
  },
  {
    type: 'slideproject',
    title: 'AgileDising',
    year: '2021',
    subtitle: 'stack:',
    text: 'html, css, javascript, firebase',
    subtitle1: 'logros:',
    text1: 'Se usó un año en el laboratorio de bases de datos',
    subtitle2: 'aprendizaje:',
    text2: 'Asincronia de peticiónes y metodologías agiles',
    image: agile,
    demoLink: 'https://agiledesing.web.app/',
    githubLink: 'https://github.com/DominusDrow/agileDesing',
  },
  {
    type: 'slideproject',
    title: 'ImgFeature',
    year: '2021',
    subtitle: 'stack:',
    text: 'html, css, javascript, python, keras, tensorflow, openCV, flask',
    subtitle1: 'logros:',
    text1: 'Entrenar un modelo de inteligencia artificial para detectar incendios forestales',
    subtitle2: 'aprendizaje:',
    text2: 'Machine learning, deep learning, redes neuronales, trabajo en equipo',
    image: imgFeature,
    demoLink: 'https://imgfeatures.web.app/',
    githubLink: 'https://github.com/DominusDrow/ImgFeature',
  },
  {
    type: 'slideproject',
    title: 'taskzenith',
    year: '2022',
    subtitle: 'stack:',
    text: 'html, css, javascript, react, node, firebase',
    subtitle1: 'logros:',
    text1: 'gestionar usuarios, 60 usarios registrados, 12 usuarios activos',
    subtitle2: 'aprendizaje:',
    text2: 'Animaciones, react, firebase, node',
    image: taskzenith,
    demoLink: 'https://taskzenith.web.app/',
    githubLink: 'https://github.com/DominusDrow/TaskZenith',
  },
  {
    type: 'SlideInfo',
    title: 'Freelancer',
    year: '2022',
    text: 'Despues de haber adquidido experiencia creé perfiles para trabajar como freelancer, en upwork, linkedin y discord.',
    image: upwork,
  },
  {
    type: 'slideproject',
    title: 'AlienTalk',
    year: '2023',
    subtitle: 'stack:',
    text: 'react native, node, firebase, google cloud, auth0',
    subtitle1: 'logros:',
    text1: 'Gestionar el flujo completo de un app (estado)',
    subtitle2: 'aprendizaje:',
    text2: 'Algoritmos para la detección de lenguaje, active recall, spaced repetition',
    image: alienTalk,
    githubLink: 'https://github.com/DominusDrow/TaskZenith',
  },
  {
    type: 'SlideInfo',
    title: 'uHungry',
    year: '2023',
    text: 'Compraventa universitaria.',
    image: uHungry,
  },


  {
    type: 'SlideInfo',
    title: 'Actualidad y futuro',
    year: '2023',
    text: 'Programar es mi hobbie y pienso seguir, alugnas de las apps que desarrollaré son: n-dual-back, shielalarm, keyNinja...',
    image: calendar,
  },






];

export default data;
