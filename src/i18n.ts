import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: "AquaTracker",
            footer: {
                language: "Language: English",
                change: "Switch to Russian"
            },
            waterTracker: {
                title: "Water Tracker",
                consumed: "You've consumed {{amount}} ml of water today",
                goal: "Your daily goal is {{goal}} ml",
                addButton: "Add {{size}} ml",
                resetButton: "Reset"
            },
            settings: {
                title: "Settings",
                language: "Select Language",
                languageRu: "Russian",
                languageEn: "English",
                glassSize: "Set glass size (ml)",
                dailyGoal: "Set daily goal (ml)",
                close: "Save and Close"
            }
        }
    },
    ru: {
        translation: {
            header: "AquaTracker",
            footer: {
                language: "Язык: Русский",
                change: "Переключить на Английский"
            },
            waterTracker: {
                title: "Трекер воды",
                consumed: "Вы выпили {{amount}} мл воды сегодня",
                goal: "Ваша ежедневная цель — {{goal}} мл",
                addButton: "Добавить {{size}} мл",
                resetButton: "Сбросить"
            },
            settings: {
                title: "Настройки",
                language: "Выберите язык",
                languageRu: "Русский",
                languageEn: "Английский",
                glassSize: "Установить объем стакана (мл)",
                dailyGoal: "Установить цель на день (мл)",
                close: "Сохранить и закрыть"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
