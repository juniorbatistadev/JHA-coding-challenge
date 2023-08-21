import { NavLink, useNavigate } from "react-router-dom";
function Sidebar({ mobile, close }: { mobile?: boolean; close?: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      <h2 className="font-bold text-xl text-white ml-10 mt-10">Acme Widgets</h2>
      <p className=" text-sm text-white ml-10 mb-10">
        Job Hazard Analysis Software
      </p>
      <ul
        className={
          mobile
            ? "h-full absolute top-0 left-0 bg-white"
            : "h-full my-auto ml-10"
        }
      >
        {mobile && <p onClick={close}>X</p>}
        <li className="font-bold text-white cursor-pointer  mb-4">
          <NavLink
            to="/app/"
            className={({ isActive }) =>
              isActive ? "bg-sky-200 p-2 rounded text-sky-800" : "text-white"
            }
          >
            JHAs
          </NavLink>
        </li>
        <li className="font-bold text-white cursor-pointer mb-4">
          <NavLink
            to="/app/tech"
            className={({ isActive }) =>
              isActive ? "bg-sky-200 p-2 rounded text-sky-800" : "text-white"
            }
          >
            Tech Stack
          </NavLink>
        </li>
        <li className="font-bold text-white cursor-pointer mb-4">
          <NavLink
            to="/app/tech"
            className={({ isActive }) =>
              isActive ? "bg-sky-200 p-2 rounded text-sky-800" : "text-white"
            }
          >
            Stats
          </NavLink>
        </li>
      </ul>
      <p
        className="font-bold text-white cursor-pointer mt-auto ml-10 mb-10"
        onClick={() => navigate("/")}
      >
        Exit
      </p>
    </div>
  );
}

export default Sidebar;
