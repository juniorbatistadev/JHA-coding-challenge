import { useContext, useState } from "react";import { UserContext } from "../context/UserContext";
import { useQuery } from "react-query";
import { JHA } from "../types/JHA.type";
import CreateJHAButton from "../components/CreateJHAButton";
import JobHazardAnalysisItem from "../components/JobHazardAnalysisItem";

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

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error :{JSON.stringify(error)}</p>;

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h2>Welcome , {user?.name}</h2>
      <h3>JHAs</h3>
      <CreateJHAButton />
      {data.data?.map((jha: JHA) => (
        <JobHazardAnalysisItem key={jha.id} {...jha} />
      ))}
      {data.meta?.current_page > 1 && <button onClick={prevPage}>Prev</button>}
      {data.meta?.current_page} of {data.meta?.last_page}
      {data.meta?.last_page > data.meta.current_page && (
        <button onClick={nextPage}>Next</button>
      )}
    </div>
  );
}

export default HomePage;
