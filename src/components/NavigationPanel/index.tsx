import { toast } from "react-toastify";
import "./styles.css";

interface NavigationPanelProps {
  pages: number;
}

function NavigationPanel({ pages }: NavigationPanelProps) {
  const handleClick = () => {
    toast.error("Action not implemented");
  };

  return (
    <div className="navigation-panel">
      <ul>
        <li onClick={handleClick}>Previous</li>
        {pages &&
          new Array(pages).fill(null).map((_item, index) => (
            <li
              key={index}
              onClick={handleClick}
              style={index === 0 ? { color: "#fff" } : {}}
            >
              {index + 1}
            </li>
          ))}
        <li onClick={handleClick}>Next</li>
      </ul>
    </div>
  );
}

export default NavigationPanel;
