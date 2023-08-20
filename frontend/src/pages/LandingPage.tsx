import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setUser({
      name: formData.get("name") as string,
    });

    navigate("/app");
  };

  return (
    <div className="bg-slate-800 min-h-screen flex	">
      <div className="bg-white m-auto w-3/4 sm:w-1/2 rounded-3xl p-6 shadow-sm ">
        <h2 className="text-3xl font-bold text-center text-sky-600 mb-10">
          Job Hazard Analysis Software
        </h2>
        <div>
          <p className="mb-2">
            This was built using PHP Laravel for backend. React and Typescript
            for the frontend. Responsive design, animations, file uploads.
            Junior Batista
          </p>
          <p className="mb-2">
            This was built using PHP Laravel for backend. React and Typescript
            for the frontend. Responsive design, animations, file uploads.
            Junior Batista
          </p>
          <p className="mb-2">
            This was built using PHP Laravel for backend. React and Typescript
            for the frontend. Responsive design, animations, file uploads.
            Junior Batista
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center"
        >
          <input
            name="name"
            type="text"
            placeholder="What's your name?"
            required
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
            type="submit"
          >
            Let's Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
