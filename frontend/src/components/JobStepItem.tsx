import { useMutation, useQueryClient } from "react-query";import { JobStep } from "../types/JobStep.type";
import EditJobStepButton from "./EditJobStepButton";

function JobStepItem(jobStep: JobStep) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-steps/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchSteps"] });
    },
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteMutation.mutate(jobStep.id);
  };

  return (
    <div key={jobStep.id}>
      <p>{jobStep.title}</p>
      <p>{jobStep.hazards}</p>
      <p>{jobStep.controls}</p>

      <EditJobStepButton {...jobStep} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default JobStepItem;
