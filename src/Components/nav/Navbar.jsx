import { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ThemeSwitcher from "./Switcher";
import { EpiBookContext } from "../../Context/ContextEpibook";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { books, inputValue, updatesData, isDarkMode, isId } =
    useContext(EpiBookContext);

    const handleInputChange = (e) => {
      updatesData("setInputValue", e.target.value);
  
      const inputValueNormalized = e.target.value.toLowerCase().replace(/\s+/g, " ").trim().replace(/[^\w\s]/gi, "");
  
      let filterBooks = books.filter((book) => {
        const titleNormalized = book.title.toLowerCase().replace(/\s+/g, " ").trim().replace(/[^\w\s]/gi, "");
        return titleNormalized.match(new RegExp(inputValueNormalized, "i"));
      });
  
      filterBooks.sort((a, b) => a.title.localeCompare(b.title));
  
      updatesData("setFiltered", filterBooks);
    };

    const handleNavClick = (path) => {
      updatesData("setIsId", false);
      navigate(path);
    };

    return (
      <div>
        <Navbar className={isDarkMode ? "bg-dark text-white" : "bg-warning"}>
          <Container>
            <Navbar.Brand onClick={() => handleNavClick('/')} className={isDarkMode ? "text-white" : ""} style={{ cursor: 'pointer' }}>
              ROMANCE
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleNavClick('/')} className={isDarkMode ? "text-white" : ""} style={{ cursor: 'pointer' }}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick('/about')} className={isDarkMode ? "text-white" : ""} style={{ cursor: 'pointer' }}>
                About
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick('/browse')} className={isDarkMode ? "text-white" : ""} style={{ cursor: 'pointer' }}>
                Browse
              </Nav.Link>
            </Nav>
            <ThemeSwitcher />
            <div className={isId ? "d-none mb-3 ms-3" : "mb-3 ms-3"}>
              <input
                value={inputValue}
                onChange={handleInputChange}
                className="mt-3 searchBar_"
                type="text"
                placeholder="Search by book title..."
              />
            </div>
          </Container>
        </Navbar>
      </div>
    );
  };
  
  export default NavBar;
  