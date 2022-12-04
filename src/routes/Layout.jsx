import { NavLink, Outlet } from "react-router-dom";
import "../css/Layout.css";
import "../index.css";
export default function Layout() {
  const getClassName = ({ isActive }) => (isActive ? "link-active" : "link");
  return (
    <div className="wrapper">
      <div class="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/albums" end={true} className={getClassName}>
                Albums
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={getClassName}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <div class="footer">
        <div>Created by: Klimovich Alexandr</div>
        <div>BSU: 2022</div>
      </div>
    </div>
  );
}
