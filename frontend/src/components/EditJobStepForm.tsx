import { useState } from "react";import { JobStep } from "../types/JobStep.type";

export function EditJobStepForm({
  jobStep,
  handleEdit,
}: {
  jobStep: JobStep;
  handleEdit: ({
    title,
    hazards,
    controls,
  }: {
    title: string;
    hazards: string;
    controls: string;
  }) => void;
}) {
  const [title, setTitle] = useState(jobStep.title);
  const [hazards, setHazards] = useState(jobStep.hazards);
  const [controls, setControls] = useState(jobStep.controls);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit({ title, hazards, controls });
      }}
    >
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        name="title"
        id="title"
        placeholder="Job Hazard Analysis Title"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
      />

      <input
        value={hazards}
        onChange={(e) => {
          setHazards(e.target.value);
        }}
        type="text"
        name="hazards"
        id="hazards"
        placeholder="Hazards"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-blue-500"
      />

      <input
        value={controls}
        onChange={(e) => {
          setControls(e.target.value);
        }}
        type="text"
        name="controls"
        id="controls"
        placeholder="Controls"
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
