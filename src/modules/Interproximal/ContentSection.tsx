import './interproximal.css';
import { forwardRef } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  isActive: boolean;
}

const ContentSection = forwardRef<HTMLDivElement, ContentSectionProps>(
    ({ id, title, isActive }, ref) => {
  return (
    <section 
      id={id}
      ref={ref}
      className={`content-section ${isActive ? 'active' : ''}`}
    >
      <h2>{title}</h2>
      <div className="content-placeholder">
        {/* Temporary content - replace with actual */}
        <p>Content for {title} section...</p>
      </div>
    </section>
  );
 }
);

export default ContentSection;