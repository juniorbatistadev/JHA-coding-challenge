import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { JobStep } from "../types/JobStep.type";
import CreateJobStepButtons from "../components/CreateJobStepButton";
import JobStepItem from "../components/JobStepItem";

function ViewJHA() {
  const { id } = useParams();

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
    <div>
      <h2>{data.data.title}</h2>
      <p>{data.data.author}</p>
      <CreateJobStepButtons jhaId={id ?? ""} />

      <h2>Steps:</h2>
      {stepsData.data?.map((step: JobStep) => (
        <JobStepItem {...step} />
      ))}
    </div>
  );
}

export default ViewJHA;
