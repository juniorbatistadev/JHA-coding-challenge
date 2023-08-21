import { NavLink, useNavigate } from "react-router-dom";
function Sidebar({ mobile, close }: { mobile?: boolean; close?: () => void }) {
  const navigate = useNavigate();

  return (
    <div
      className={
        mobile
          ? "h-full fixed top-0 left-0 bg-sky-800 w-1/2"
          : "flex flex-col w-full"
      }
    >
      {mobile && (
        <p onClick={close} className="text-2xl m-3 text-white ">
          X
        </p>
      )}

      <h2 className="font-bold text-xl text-white ml-10 mt-10">Acme Widgets</h2>
      <p className=" text-sm text-white ml-10 mb-10">
        Job Hazard Analysis Software
      </p>
      <ul className={" my-auto ml-10"}>
        <li className="font-bold text-white cursor-pointer  mb-4">
          <NavLink
            onClick={close}
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
            onClick={close}
            to="/app/tech"
            className={({ isActive }) =>
              isActive ? "bg-sky-200 p-2 rounded text-sky-800" : "text-white"
            }
          >
            Tech Stack
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
