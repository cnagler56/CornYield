import "./Menu.css";

const HorizontalMenuBar = () => {
  return (
    <nav className="horizontal-menu-bar" style={{ width: "20em" }}>
      <ul>
        <li>
          <a>Comments</a>
        </li>
        <li>
          <a href="https://www.espn.com">Corn Challenge</a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenuBar;
