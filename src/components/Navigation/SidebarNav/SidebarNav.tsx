import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import ModuleCard from '../../ModuleCard/ModuleCard';
import "../../ModuleCard/ModuleCard.css";
import './SidebarNav.css';
import { AppModule } from '../../../types/AppModuleType';

export default function SidebarNav() {
  const { t } = useTranslation();
  const location = useLocation();
  const modules = t('home.modules', { 
    returnObjects: true,
    defaultValue: [] 
  }) as AppModule[];

  return (
  <nav className="sidebar-nav">
    <div className="home-card--wrapper">
    <ModuleCard
          key="home"
          title={t('home.navTitle')}
          route="/"
          isActive={location.pathname === '/'}
          isSmall={true} 
          id={'oral-systemic'}    />
    </div>

    {modules.map((module: AppModule) => (
      <ModuleCard
        key={module.id}
        title={module.title}
        route={module.route}
        isActive={location.pathname === module.route}
        isSmall={module.id === 'accessories'}
        id={'oral-systemic'} 
      />
    ))}
  </nav>
  );
}