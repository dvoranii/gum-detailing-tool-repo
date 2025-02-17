import { useTranslation } from 'react-i18next';
import useSectionScroll from '../../hooks/useSectionScroll';
import ModuleLayout from '../../components/ModuleLayout/ModuleLayout';
import ContentSection from '../Interproximal/ContentSection';
import '../Interproximal/Interproximal.css';

export default function ToothbrushModule() {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'pocketDepth', title: t('toothbrush.pocketDepth') },
    { id: 'sensitivity', title: t('toothbrush.sensitivity') },
    { id: 'research', title: t('toothbrush.research') }
  ];

  const portfolioLinks = [
    { to: '/adult-brushes', label: t('toothbrush.portfolioLinks.adultPortfolio') },
    { to: '/child-brushes', label: t('toothbrush.portfolioLinks.childPortfolio') },
    { to: '/specialty-brushes', label: t('toothbrush.portfolioLinks.specialtyPortfolio') }
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