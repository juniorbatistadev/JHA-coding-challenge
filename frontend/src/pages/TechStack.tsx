function TechStack() {  return (
    <div>
      <p className="mb-2 text-slate-700">
        This project includes a <span className="font-bold">REST API </span>
        backend built with <span className="font-bold"> PHP</span> as the
        programming language and the <span className="font-bold">Laravel </span>
        framework. For the database <span className="font-bold">sqlite</span> is
        used locally while <span className="font-bold">MySQL</span> is used in
        the live version.
      </p>
      <p className="mb-5  text-slate-700">
        The frontend is built with <span className="font-bold"> React </span>{" "}
        and <span className="font-bold">Typescript</span> and{" "}
        <span className="font-bold">TailwindCSS</span> for styling.
        <span className="font-bold"> React Query </span>
        is used for data fetching and state management.{" "}
        <span className="font-bold">React Router</span> is used for routing. The
        frontend is deployed to Vercel.
      </p>
    </div>
  );
}

export default TechStack;
