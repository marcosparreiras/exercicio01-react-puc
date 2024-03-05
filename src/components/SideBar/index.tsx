import { toast } from "react-toastify";
import "./styles.css";

interface SideBarProps {
  topics: string[];
}

function SideBar({ topics }: SideBarProps) {
  const handleClick = () => {
    toast.error("Action not implemented");
  };
  return (
    <div className="side-bar">
      {topics.length > 0 &&
        topics.map((topic, index) => (
          <h3
            key={index}
            onClick={handleClick}
            style={index === 0 ? { color: "#fff" } : {}}
          >
            {topic}
          </h3>
        ))}
    </div>
  );
}

export default SideBar;
