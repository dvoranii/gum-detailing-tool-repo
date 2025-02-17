// src/components/ModuleLayout/ModuleLayout.tsx
import { ReactNode } from 'react';
import SidebarNav from '../Navigation/SidebarNav/SidebarNav';
import BottomNav from '../Navigation/BottomNav/BottomNav';

interface ModuleLayoutProps {
  children: ReactNode;
  activeSection: string;
  scrollToSection: (section: string) => void;
  sections: Array<{id: string; title: string}>;
  links?: Array<{to: string; label: string}>;
  containerClass?: string;
}

export default function ModuleLayout({
  children,
  activeSection,
  scrollToSection,
  sections,
  links = [],
  containerClass = 'default-module-container'
}: ModuleLayoutProps) {
  return (
    <div className={containerClass}>
      <SidebarNav />
      
      <main className="content-area">
        {children}
      </main>

      <BottomNav 
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        sections={sections}
        links={links}
      />
    </div>
  );
}