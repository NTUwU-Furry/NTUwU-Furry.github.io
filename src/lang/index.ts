import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

export default createI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages: {
    zh: zh,
    en: en,
  },
});
