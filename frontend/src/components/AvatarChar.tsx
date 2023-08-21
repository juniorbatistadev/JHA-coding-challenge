import { useContext } from "react";import { UserContext } from "../context/UserContext";

function AvatarChar() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-blue-400 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg">
      {user?.name.charAt(0)}
    </div>
  );
}

export default AvatarChar;
