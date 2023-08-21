import { JHA } from "../types/JHA.type";import { useState } from "react";

export function EditJHAForm({
  jha,
  handleEdit,
}: {
  jha: JHA;
  handleEdit: ({ title }: { title: string }) => void;
}) {
  const [title, setTitle] = useState(jha.title);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit({ title });
      }}
    >
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(e.target.value);
        }}
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
  );
}
