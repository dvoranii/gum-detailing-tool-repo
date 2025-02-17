// src/modules/Interproximal/InterproximalModule.tsx
import { useTranslation } from 'react-i18next';
import useSectionScroll from '../../hooks/useSectionScroll';
import ModuleLayout from '../../components/ModuleLayout/ModuleLayout';
import ContentSection from './ContentSection';
import './interproximal.css';

export default function InterproximalModule() {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'class1', title: t('interproximal.class1') },
    { id: 'class2', title: t('interproximal.class2') },
    { id: 'class3', title: t('interproximal.class3') },
    { id: 'counselling', title: t('interproximal.counselling') }
  ];

  const portfolioLinks = [
    { to: '/portfolio', label: t('interproximal.portfolioLinks.portfolio') },
  ];

  const { activeSection, scrollContainerRef, scrollToSection, bind } = 
    useSectionScroll(sections);

  return (
    <ModuleLayout
      activeSection={activeSection}
      scrollToSection={scrollToSection}
      sections={sections}
      links={portfolioLinks}
      containerClass="interproximal-container"
    >
      <div 
        className="scroll-container"
        ref={scrollContainerRef}
        {...bind()}
      >
        {sections.map((section) => (
          <ContentSection
            key={section.id}
            id={section.id}
            title={section.title}
            isActive={activeSection === section.id}
          />
        ))}
      </div>
    </ModuleLayout>
  );
}