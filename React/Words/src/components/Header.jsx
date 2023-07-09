import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h2>WordsHub</h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">API from Rapid</a>
            </li>
            <li>
              <a href="https://www.github.com/SyabAhmad">Source Code</a>
            </li>
            <li>
              <a href="https://www.threads.net/@syedsyab">Threads</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/SyedSyab">LinkedIn</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
