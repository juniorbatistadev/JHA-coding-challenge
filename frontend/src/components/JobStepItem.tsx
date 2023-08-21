import { useMutation, useQueryClient } from "react-query";
import { JobStep } from "../types/JobStep.type";
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
    <div className="bg-white p-4 rounded-md shadow-md  mb-5 flex flex-col">
      <h2 className="text-lg font-bold text-slate-600 cursor-pointer">
        {jobStep.title}
      </h2>
      <p className="text-slate-400 text-sm">
        Date: {new Date(jobStep.createdAt).toLocaleString()}
      </p>
      <p className="font-medium text-sm text-gray-500 mt-3">Hazards:</p>
      <p className=" text-sm text-gray-500">{jobStep.hazards}</p>
      <p className="font-medium text-sm text-gray-500 mt-3">Controls:</p>
      <p className=" text-sm text-gray-500">{jobStep.controls}</p>

      <div className="flex mt-5 ml-auto gap-3">
        <EditJobStepButton {...jobStep} />

        <button
          onClick={handleDelete}
          className="text-sm underline font-medium text-red-600 "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobStepItem;
