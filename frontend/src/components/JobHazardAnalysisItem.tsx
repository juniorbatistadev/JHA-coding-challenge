import { useMutation, useQueryClient } from "react-query";
import { JHA } from "../types/JHA.type";
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

  return (
    <div key={jha.id} onClick={() => navigate("/app/jha/" + jha.id)}>
      <p>{jha.title}</p>
      <p>{jha.author}</p>

      <EditJobHazardButton {...jha} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default JobHazardAnalysisItem;
