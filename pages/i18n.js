import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  developer: {
    translation: {
        "Role": "DEVELOPER",
        "mainWork": "I've started javascript develeopment a couple years ago. Moving from basic websites done for school projects, going through rock-paper-scissors game I became interested in JS frameworks like React or Vue. I've done some courses, thanks to which I've created more projects like RecipeApp or FavNote. Finally I decided to write about React in my Bachelor thesis, thanks to which I graduated at Jagiellonian Univeristy in Cracow. Here you can check my newest projects: "
    }
  },
  tester: {
    translation: {
        "Role": "TESTER",
        "mainWork": "This path of my career began during my second year in Blacklabel. One of our teams needed someone to test their code because a lot of bugs have occured. I've started with manual testing moving to more advanced topics like testing frameworks, automated tests, getting data from several APIS to check correctness. I even started writing our own testing framework and plenty of tests to keep the key functionalities in our project valid and correct. Here you can check my projects in which I worked like a tester:"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "developer", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;