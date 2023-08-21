import { useMutation, useQueryClient } from "react-query";import { JHA } from "../types/JHA.type";
import EditJobHazardButton from "./EditJobHazardButton";
import { useNavigate } from "react-router-dom";

function JobHazardAnalysisItem(jha: JHA) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-hazard-analyses/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchJHAs"] });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(jha.id);
  };

  const createdDate = new Date(jha.createdAt!);

  return (
    <div
      key={jha.id}
      className="bg-white p-4 rounded-md shadow-md  mb-5 flex flex-col"
    >
      <h2
        className="text-lg font-bold text-slate-600 cursor-pointer"
        onClick={() => navigate("/app/jha/" + jha.id)}
      >
        {jha.title}
      </h2>
      <p className="text-slate-400 text-sm">
        Date: {createdDate.toLocaleString()}
      </p>
      <p className="text-slate-400 text-sm">Author: {jha.author}</p>

      <div className="flex mt-5 ml-auto gap-3">
        <button
          className="text-sm underline font-medium  text-gray-800 "
          onClick={() => navigate("/app/jha/" + jha.id)}
        >
          Show
        </button>
        <EditJobHazardButton {...jha} />
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

export default JobHazardAnalysisItem;
