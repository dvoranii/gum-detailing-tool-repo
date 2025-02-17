
import { useTranslation } from 'react-i18next';
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={i18n.language === 'fr' ? 'active' : ''}
      >
        Français
      </button>
    </div>
  );
}