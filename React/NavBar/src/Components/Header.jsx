import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
