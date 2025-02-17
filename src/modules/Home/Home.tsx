import { useTranslation } from 'react-i18next';
import ModuleCard from '../../components/ModuleCard/ModuleCard';
import "./Home.css";
import { AppModule } from '../../types/AppModuleType';

import oralSystemicIcon from '../../assets/oral-systemic.png';
import partnerIcon from '../../assets/partner-icon.png';
import interproximalIcon from '../../assets/interproximal-icon.webp';
import toothbrushIcon from '../../assets/toothbrush-icon.jpg';
import operatoryIcon from '../../assets/operatory-icon.jpg';
import accessoriesIcon from '../../assets/accessories-icon.webp';

export const moduleIcons: Record<AppModule['id'], string> = {
    'oral-systemic': oralSystemicIcon,
    'partners': partnerIcon,
    'interproximal': interproximalIcon,
    'toothbrush': toothbrushIcon,
    'operatory': operatoryIcon,
    'accessories': accessoriesIcon
  };

export default function Home() {
  const { t } = useTranslation();
  
  const modules = t('home.modules', { 
    returnObjects: true,
    defaultValue: [] 
  }) as AppModule[];

  if (!Array.isArray(modules)) {
    console.error('Expected modules to be an array, got:', modules);
    return null;
  }


  return (
    <div className="home-container">
      <div className="inner-container">
        <h1 className="title">{t('home.title')}</h1>
        <div className="modules-grid">
          {modules.map((module) => (
            <ModuleCard 
                  key={module.id}
                  title={module.title}
                  icon={moduleIcons[module.id as keyof typeof moduleIcons]}
                  route={module.route} id={'oral-systemic'}            />
          ))}
        </div>
      </div>
    </div>
  );
}