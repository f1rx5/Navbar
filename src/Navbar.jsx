import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles={
    height : showLinks?`${linkRef.current.getBoundingClientRect().height}px`:'0px'
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef} style={linkStyles}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
            {social.map((socialIcon)=>{
                return <li key={socialIcon.id}>
                    <a href={socialIcon.url}>{socialIcon.icon}</a>
                </li>
            })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
