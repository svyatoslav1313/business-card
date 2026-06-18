import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  EN: {
    translation: {
      header: {
        hello: "Hello, I am",
        name: "Svyatoslav Kozelchuk-Panulin",
        profession: "Full Stack Developer & Student",
        about: "I build scalable web applications focused on interactivity and user experience. I turn complex code into simple magic.",
        buttons: {
          seeWorks: "See works",
          contact: "Contact"
        },
        dropdown: {
          theme: "Theme",
          language: "Language"
        }
      },
      modal: {
        title: {
          first: "My",
          second: "Projects"
        },
        plus: "Add project"
      },
      addProject: {
        title: "Add project",
        colorLabel: "Logo color",
        colorPlaceholder: "Choose logo color",
        errorColor: "Please select a logo color",
        projectNameLabel: "Project title",
        projectNamePlaceholder: "Project title",
        errorTitle: "Please enter project title",
        descriptionLabel: "Description",
        descriptionPlaceholder: "Description",
        errorDescription: "Please enter project description",
        technologiesLabel: "Technologies",
        errorTags: "Please select at least one option",
        demoLinkLabel: "Demo link",
        save: "Save",
        cancel: "Cancel",
        info: "This module is implemented using Redux to handle state management logic."
      },
      projectCard: {
        code: "Code",
        liveDemo: "Live Demo"
      },
      tags: ["HTML", "CSS", "React", "TS", "Router", "JS", "Redux", "Node.js"]
    }
  },
  UA: {
    translation: {
      header: {
        hello: "Привіт, я",
        name: "Святослав Козельчук-Панулін",
        profession: "Full Stack розробник і студент",
        about: "Я створюю масштабовані веб‑додатки, орієнтовані на взаємодію та зручність користувача. Я перетворюю складний код на просту магію.",
        buttons: {
          seeWorks: "Дивитись роботи",
          contact: "Зв'язатися"
        },
        dropdown: {
          theme: "Тема",
          language: "Мова"
        }
      },
      modal: {
        title: {
          first: "Мої",
          second: "Проєкти"
        },
        plus: "Додати проєкт"
      },
      addProject: {
        title: "Додати проєкт",
        colorLabel: "Колір логотипу",
        colorPlaceholder: "Оберіть колір логотипу",
        errorColor: "Будь ласка, оберіть колір логотипу",
        projectNameLabel: "Назва проєкту",
        projectNamePlaceholder: "Назва проєкту",
        errorTitle: "Будь ласка, введіть назву проєкту",
        descriptionLabel: "Опис",
        descriptionPlaceholder: "Опис",
        errorDescription: "Будь ласка, введіть опис проєкту",
        technologiesLabel: "Технології",
        errorTags: "Будь ласка, оберіть хоча б один варіант",
        demoLinkLabel: "Посилання на демо",
        save: "Зберегти",
        cancel: "Скасувати",
        info: "Цей модуль реалізовано з використанням Redux для управління станом."
      },
      projectCard: {
        code: "Код",
        liveDemo: "Демо"
      },
      tags: ["HTML", "CSS", "React", "TS", "Router", "JS", "Redux", "Node.js"]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'UA',
  fallbackLng: 'EN',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;