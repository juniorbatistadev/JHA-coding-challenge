import { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { UserContext } from "../context/UserContext";
import { useMutation, useQueryClient } from "react-query";

const CustomSwal = withReactContent(Swal);

function CreateJHAButton() {
  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { title: string; author: string }) => {
      return fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/job-hazard-analyses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            author: data.author,
          }),
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchJHAs"] });
    },
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;

    mutation.mutate({
      title,
      author: user?.name as string,
    });
    CustomSwal.close();
  };

  const showPopUp = () => {
    CustomSwal.fire({
      title: <p>Create JHA</p>,
      showConfirmButton: false,
      html: (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Job Hazard Analysis Title"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
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
      Create JHA
    </button>
  );
}

export default CreateJHAButton;
