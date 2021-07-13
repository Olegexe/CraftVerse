import './assets/scss/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
   once: true,
   duration: 1000,
});

SmoothScroll({
   animationTime    : 1000,
   stepSize         : 100,
   accelerationDelta : 30,  
   accelerationMax   : 2,   

   keyboardSupport   : true,  

   arrowScroll       : 50,

   pulseAlgorithm   : true,
   pulseScale       : 4,
   pulseNormalize   : 1,

   touchpadSupport   : true,
})