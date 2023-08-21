import { useQuery } from "react-query";import { useNavigate, useParams } from "react-router-dom";
import { JobStep } from "../types/JobStep.type";
import CreateJobStepButtons from "../components/CreateJobStepButton";
import JobStepItem from "../components/JobStepItem";

function ViewJHA() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchJHA", id],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-hazard-analyses/${id}`
      ).then((res) => res.json()),
  });

  const { isLoading: isLoadingSteps, data: stepsData } = useQuery({
    queryKey: ["fetchSteps", id],
    queryFn: () =>
      fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/job-hazard-analyses/${id}/job-steps`
      ).then((res) => res.json()),
  });

  if ([isLoading, isLoadingSteps].some((state) => state === true))
    return <p>Loading...</p>;

  if (error) return <p>Error :{JSON.stringify(error)}</p>;

  return (
    <div className="flex flex-col w-full">
      <p
        className="font-bold text-gray-600 cursor-pointer mb-5"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </p>
      <h2 className="text-lg font-bold text-slate-600 cursor-pointer">
        {data.data.title}
      </h2>
      <p className="text-slate-600 text-sm">
        Date: {new Date(data.data.createdAt).toLocaleString()}
      </p>
      <p className="text-slate-600 text-sm">Author: {data.data.author}</p>

      <div className="flex justify-between items-center mt-5 mb-5">
        <h2 className="text-slate-600 text-md font-bold">Job Steps List:</h2>
        <CreateJobStepButtons jhaId={id ?? ""} />
      </div>

      {stepsData.data?.map((step: JobStep) => (
        <JobStepItem {...step} />
      ))}
    </div>
  );
}

export default ViewJHA;
