import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "react-query";
import { JobStep } from "../types/JobStep.type";
import { EditJobStepForm } from "./EditJobStepForm";

const CustomSwal = withReactContent(Swal);

function EditJobStepButton(jobStep: JobStep) {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (data: {
      title: string;
      hazards: string;
      controls: string;
    }) => {
      return fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-steps/${jobStep.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            hazards: data.hazards,
            controls: data.controls,
            jobHazardAnalysisId: jobStep.jobHazardAnalysisId,
          }),
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchSteps"] });
    },
  });

  const handleEdit = ({
    title,
    hazards,
    controls,
  }: {
    title: string;
    hazards: string;
    controls: string;
  }) => {
    updateMutation.mutate({
      title,
      hazards,
      controls,
    });
    CustomSwal.close();
  };
  const showEditPopUp = () => {
    CustomSwal.fire({
      title: <p>Edit Job Step</p>,
      showConfirmButton: false,
      html: <EditJobStepForm jobStep={jobStep} handleEdit={handleEdit} />,
    });
  };
  return <button onClick={showEditPopUp}>Edit</button>;
}

export default EditJobStepButton;
