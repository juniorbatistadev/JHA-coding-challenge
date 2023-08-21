import { useContext } from "react";import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "../context/UserContext";
import { useMutation, useQueryClient } from "react-query";

const CustomSwal = withReactContent(Swal);

function CreateJobStepButtons({ jhaId }: { jhaId: string }) {
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: {
      title: string;
      author: string;
      hazards: string;
      controls: string;
      jobHazardAnalysisId: string;
    }) => {
      return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/job-steps`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          author: data.author,
          jobHazardAnalysisId: data.jobHazardAnalysisId,
          hazards: data.hazards,
          controls: data.controls,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchSteps"] });
    },
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const hazards = formData.get("hazards") as string;
    const controls = formData.get("controls") as string;

    mutation.mutate({
      title,
      author: user?.name as string,
      hazards,
      controls,
      jobHazardAnalysisId: jhaId,
    });
    CustomSwal.close();
  };

  const showPopUp = () => {
    CustomSwal.fire({
      title: <p>Create Job Step</p>,
      showConfirmButton: false,
      html: (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Job Step Title"
            className="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
          />
          <textarea
            name="hazards"
            id="title"
            placeholder="Job Hazards"
            className="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
          />
          <textarea
            name="controls"
            id="title"
            placeholder="Job Controls"
            className="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
          />
          <input
            type="submit"
            value="Save"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-5 "
          />
        </form>
      ),
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
      onClick={showPopUp}
    >
      Create Step
    </button>
  );
}

export default CreateJobStepButtons;
