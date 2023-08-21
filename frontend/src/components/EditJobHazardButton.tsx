import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { JHA } from "../types/JHA.type";
import { useMutation, useQueryClient } from "react-query";
import { EditJHAForm } from "./EditJHAForm";

const CustomSwal = withReactContent(Swal);

function EditJobHazardButton(jha: JHA) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (data: { title: string }) => {
      return fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-hazard-analyses/${
          jha.id
        }`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            author: jha.author,
          }),
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchJHAs"] });
    },
  });

  const handleEdit = ({ title }: { title: string }) => {
    updateMutation.mutate({
      title,
    });
    CustomSwal.close();
  };
  const showEditPopUp = () => {
    CustomSwal.fire({
      title: <p>Update JHA</p>,
      showConfirmButton: false,
      html: <EditJHAForm jha={jha} handleEdit={handleEdit} />,
    });
  };
  return (
    <button
      onClick={showEditPopUp}
      className="text-sm underline font-medium text-gray-800 "
    >
      Edit
    </button>
  );
}

export default EditJobHazardButton;
