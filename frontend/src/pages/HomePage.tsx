import { useContext, useState } from "react";import { UserContext } from "../context/UserContext";
import { useQuery } from "react-query";
import { JHA } from "../types/JHA.type";
import CreateJHAButton from "../components/CreateJHAButton";
import JobHazardAnalysisItem from "../components/JobHazardAnalysisItem";
import AvatarChar from "../components/AvatarChar";

function HomePage() {
  const [page, setPage] = useState(1);
  const { user } = useContext(UserContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchJHAs", page],
    queryFn: () =>
      fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/job-hazard-analyses?page=${page}`
      ).then((res) => res.json()),
  });

  if (error) return <p>Error :{JSON.stringify(error)}</p>;

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex ">
        <h2 className="font-bold text-2xl text-slate-600">
          Welcome, {user?.name}!
        </h2>
        <div className="ml-auto hidden sm:flex">
          <AvatarChar />
        </div>
      </div>
      <div className="flex items-center mt-10 mb-10">
        <h3 className="font-bold text-slate-600">JHAs List</h3>
        <div className="ml-auto">
          <CreateJHAButton />
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.data?.map((jha: JHA) => (
            <JobHazardAnalysisItem key={jha.id} {...jha} />
          ))}
          <div className="flex items-center justify-between	mb-10">
            <button
              disabled={data.meta?.current_page === 1}
              onClick={prevPage}
              className={
                data.meta?.current_page === 1
                  ? "bg-gray-500  text-white font-bold py-2 px-4 rounded focus:outline-none mt-5"
                  : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-5 "
              }
            >
              Prev
            </button>
            {data.meta?.current_page} of {data.meta?.last_page}
            <button
              disabled={data.meta?.current_page === data.meta?.last_page}
              onClick={nextPage}
              className={
                data.meta?.current_page === data.meta?.last_page
                  ? "bg-gray-500  text-white font-bold py-2 px-4 rounded focus:outline-none mt-5"
                  : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-5 "
              }
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
