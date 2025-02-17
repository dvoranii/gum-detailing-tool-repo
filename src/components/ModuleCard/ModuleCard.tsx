import { Link } from "react-router-dom";
import "./ModuleCard.css";
import { AppModule } from "../../types/AppModuleType";


export default function ModuleCard({title, icon, route, isActive, isSmall} : AppModule) { 
    return (
        <Link 
        to={route} 
        className={`module-card ${isActive ? 'active' : ''} ${isSmall ? 'small' : ''}`}
      >
        <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {icon && 
        <img src={icon} alt={title} className="card-icon" aria-hidden="true" /> 
        }  
        </div>
      
      </Link>
    );
  }