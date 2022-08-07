import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  developer: {
    translation: {
        "Role": "DEVELOPER",
        "mainWork": "I started javascript development a couple of years ago. Moving from basic websites done for school projects, going through rock-paper-scissors games I became interested in JS frameworks like React or Vue. I've done some courses, thanks to which I've created more projects like RecipeApp or FavNote (checkout my GitHub). Finally, I decided to write about React in my Bachelor's thesis, within which I created a simple card game for two or three players that we call in Poland - 'Piotruś'. Here you can check my newest projects: ",
        "workWork": "Besides professional projects, I'm keen on working on my small personal projects. I've got dozens of ideas for building software products. Making tiny prototypes in my free time is something that I really like. Please look around, don't bother yourself.",

        "1stProjectId": "highcharts",
        "1stProjectTitle": "Highcharts development",
        "1stProjectDescription": "Development of chart's library.",

        "2ndProjectId": "harvard",
        "2ndProjectTitle": "Harvard charts",
        "2ndProjectDescription": "Custom charts for the medical department of Harvard University.",

        "3rdProjectId": "witronix",
        "3rdProjectTitle": "Wi-tronix charts",
        "3rdProjectDescription": "Custom charts for Wi-tronix - the provider of locomotive management solutions.",

        "4thProjectId": "arkanoid",
        "4thProjectTitle": "Arkanoid",
        "4thProjectDescription": "Arcade, old-school 2D game.",        
    }
  },
  tester: {
    translation: {
        "Role": "TESTER",
        "mainWork": "This path of my career began during my second year in Blacklabel. One of our teams needed a tester to keep high quality of the code they were creating. I've started with manual testing moving to more advanced topics like testing frameworks, automated tests, and tests architecture. I also wrote our own testing framework and plenty of tests to keep the key functionalities in our project valid and correct. Here you can check my projects in which I worked as a tester:",
        "workWork": "What I really like about testing is that it makes the software more reliable and easy to use. Detecting errors before public releases certainly speeds up the whole process of development. Having a tester in your team is always a good idea. Please look around on projects I've worked on, don't bother yourself.",

        "1stProjectId": "invite",
        "1stProjectTitle": "Invite",
        "1stProjectDescription": "An Iot project with management systems of rentals.",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'developer', //localStorage. getItem(key) || 'developer',

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;