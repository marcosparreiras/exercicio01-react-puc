import { toast } from "react-toastify";
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar";
import "./styles.css";

interface HeaderProps {
  search: string;
  setSearch: any;
}

function Header({ search, setSearch }: HeaderProps) {
  const handleClick = () => {
    toast.error("Action not implemented");
  };

  return (
    <div className="header">
      <img src={Logo} alt="Dev Blog" />

      <SearchBar search={search} setSearch={setSearch} />

      <ul>
        <li>
          <a href="#" onClick={handleClick}>
            Log in
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick}>
            Sing up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
