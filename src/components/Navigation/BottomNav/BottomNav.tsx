import { Link } from "react-router-dom";
import "./BottomNav.css";
interface BottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: Array<{ id: string; title: string }>;
  links?: Array<{ to: string; label: string }>;
}

export default function BottomNav({
  activeSection,
  onSectionChange,
  sections,
  links = []
}: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => onSectionChange(section.id)}
          onTouchStart={()=>onSectionChange(section.id)}
        >
          {section.title}
        </button>
      ))}
      
      {links.map((link) => (
        <Link key={link.to} to={link.to} className="nav-item">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}