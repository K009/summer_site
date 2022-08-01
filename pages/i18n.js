import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  developer: {
    translation: {
        "Role": "DEVELOPER",
        "mainWork": "I've started javascript develeopment a couple years ago. Moving from basic websites done for school projects, going through rock-paper-scissors game I became interested in JS frameworks like React or Vue. I've done some courses, thanks to which I've created more projects like RecipeApp or FavNote. Finally I decided to write about React in my Bachelor thesis, thanks to which I graduated at Jagiellonian Univeristy in Cracow. Here you can check my newest projects: ",
        "workWork": "I like to work on my own on the projects I like. That's the main reason for creating personal projects, thanks to which I can develop my skills outside the work too. Choosing tech stack on my own and digging into the docs and api is something that I'm really looking forward to doing in my free time. Please look around, don't bother yourself.",

        "1stProjectId": "arkanoid",
        "1stProjectTitle": "Arkanoid",
        "1stProjectDescription": "Arcade, old-school 2D game.",
    }
  },
  tester: {
    translation: {
        "Role": "TESTER",
        "mainWork": "This path of my career began during my second year in Blacklabel. One of our teams needed someone to test their code because a lot of bugs have occured. I've started with manual testing moving to more advanced topics like testing frameworks, automated tests, getting data from several APIS to check correctness. I even started writing our own testing framework and plenty of tests to keep the key functionalities in our project valid and correct. Here you can check my projects in which I worked as a tester:",
        "workWork": "What I really like about testing is keeping the high quality of the product you're working on. I can't imagine flying in a plane in which all mechanisms and every piece haven't been tested thousands a time to keep all the passengers secure. It works exactly the same in case of software products. All clients must be satisfied using it and no major bugs can occur. Please look around on projects I've worked on, don't bother yourself.",

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