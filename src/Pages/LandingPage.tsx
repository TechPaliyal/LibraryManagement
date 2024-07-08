import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCreateLibrary = () => {
    navigate("/login");
  };

  const handleJoinLibrary = () => {
    navigate("/login");
  };
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-[128px] font-medium-">LibraryHub</h1>
      <p className="text-[36px] font-medium">
        Your central place for all library needs
      </p>
      <div className="flex gap-[20px] mt-[50px]">
        <Button variant="outline" onClick={handleCreateLibrary}>
          Create A Library
        </Button>
        <Button onClick={handleJoinLibrary}>Join A Library</Button>
      </div>
    </div>
  );
};

export default LandingPage;
