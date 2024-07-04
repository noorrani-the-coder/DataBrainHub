import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoChatbubblesSharp, IoHome, IoLogOut, IoMenu, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFirstYearSubMenuOpen, setIsFirstYearSubMenuOpen] = useState(false);
  const [isSecondYearSubMenuOpen, setIsSecondYearSubMenuOpen] = useState(false);
  const [isThirdYearSubMenuOpen, setIsThirdYearSubMenuOpen] = useState(false);
  const [isFinalYearSubMenuOpen, setIsFinalYearSubMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFirstYearSubMenu = () => {
    setIsFirstYearSubMenuOpen(!isFirstYearSubMenuOpen);
  };

  const toggleSecondYearSubMenu = () => {
    setIsSecondYearSubMenuOpen(!isSecondYearSubMenuOpen);
  };

  const toggleThirdYearSubMenu = () => {
    setIsThirdYearSubMenuOpen(!isThirdYearSubMenuOpen);
  };

  const toggleFinalYearSubMenu = () => {
    setIsFinalYearSubMenuOpen(!isFinalYearSubMenuOpen);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <IoMenu className="menu-icon" />
      </div>
      {isSidebarOpen && (
        <aside className="sidebar">
          <br />
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/dashboard"}>
                <IoHome /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/student"}>
                <IoChatbubblesSharp /> Circular
              </NavLink>
            </li>
            <li>
              <div onClick={toggleFirstYearSubMenu} className="toggle-icon">
                <IoChatbubblesSharp /> First Year {isFirstYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
              </div>
              {isFirstYearSubMenuOpen && (
                <ul className="sub-menu-list">
                  <li>
                    <NavLink to={"/firstyear/student1"}>
                      <IoChatbubblesSharp /> Notes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/firstyear/reference"}>
                      <IoChatbubblesSharp /> Reference Book
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleSecondYearSubMenu} className="toggle-icon">
                <IoChatbubblesSharp /> Second Year {isSecondYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
              </div>
              {isSecondYearSubMenuOpen && (
                <ul className="sub-menu-list">
                  <li>
                    <NavLink to={"/secondyear/student2"}>
                      <IoChatbubblesSharp /> Notes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/secondyear/reference2"}>
                      <IoChatbubblesSharp /> Reference Book
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleThirdYearSubMenu} className="toggle-icon">
                <IoChatbubblesSharp /> Third Year {isThirdYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
              </div>
              {isThirdYearSubMenuOpen && (
                <ul className="sub-menu-list">
                  <li>
                    <NavLink to={"/thirdyear/student3"}>
                      <IoChatbubblesSharp /> Notes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/thirdyear/reference3"}>
                      <IoChatbubblesSharp /> Reference Book
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={toggleFinalYearSubMenu} className="toggle-icon">
                <IoChatbubblesSharp /> Final Year {isFinalYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
              </div>
              {isFinalYearSubMenuOpen && (
                <ul className="sub-menu-list">
                  <li>
                    <NavLink to={"/finalyear/student4"}>
                      <IoChatbubblesSharp /> Notes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/finalyear/reference4"}>
                      <IoChatbubblesSharp /> Reference Book 
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to={"/classbridge"}>
                <IoChatbubblesSharp /> ClassBridge
              </NavLink>
            </li>
          </ul>
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label">Admin</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={"/users"}>
                    <IoPerson /> Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"}>
                    <IoPerson /> Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/teacher"}>
                    <IoPerson /> Circular
                  </NavLink>
                </li>
                <li>
                  <div onClick={toggleFirstYearSubMenu} className="toggle-icon">
                    <IoChatbubblesSharp /> First Year {isFirstYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                  {isFirstYearSubMenuOpen && (
                    <ul className="sub-menu-list">
                      <li>
                        <NavLink to={"/admin/firstyear/notes1"}>
                          <IoChatbubblesSharp /> Notes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/admin/firstyear/reference1"}>
                          <IoChatbubblesSharp /> Reference Book
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div onClick={toggleSecondYearSubMenu} className="toggle-icon">
                    <IoChatbubblesSharp /> Second Year {isSecondYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                  {isSecondYearSubMenuOpen && (
                    <ul className="sub-menu-list">
                      <li>
                        <NavLink to={"/admin/secondyear/notes2"}>
                          <IoChatbubblesSharp /> Notes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/admin/secondyear/reference2"}>
                          <IoChatbubblesSharp /> Reference Book
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div onClick={toggleThirdYearSubMenu} className="toggle-icon">
                    <IoChatbubblesSharp /> Third Year {isThirdYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                  {isThirdYearSubMenuOpen && (
                    <ul className="sub-menu-list">
                      <li>
                        <NavLink to={"/admin/thirdyear/notes3"}>
                          <IoChatbubblesSharp /> Notes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/admin/thirdyear/reference3"}>
                          <IoChatbubblesSharp /> Reference Book
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div onClick={toggleFinalYearSubMenu} className="toggle-icon">
                    <IoChatbubblesSharp /> Final Year {isFinalYearSubMenuOpen ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                  {isFinalYearSubMenuOpen && (
                    <ul className="sub-menu-list">
                      <li>
                        <NavLink to={"/admin/finalyear/notes4"}>
                          <IoChatbubblesSharp /> Notes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/admin/finalyear/reference4"}>
                          <IoChatbubblesSharp /> Reference Book
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
          <p className="menu-label">Settings</p>
          <ul className="menu-list">
            <li>
              <button onClick={logout} className="button is-white">
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </aside>
      )}
      <div className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Sidebar;































