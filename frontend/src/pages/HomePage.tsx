import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function HomePage() {
  const { user } = useContext(UserContext);

  console.log(user);

  return <div>Welcome {}</div>;
}

export default HomePage;
