import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { increment, decrement } from "../store/features/counter/counterSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"; 

const LandingPage = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-[128px] font-medium-">LibraryHub</h1>
      <p className="text-[36px] font-medium">
        Your central place for all library needs
      </p>


      <div className="flex mt-[20px] gap-[10px]">
     <Button
        onClick={() => dispatch(decrement())}
        variant="outline"
        
      >
        -
      </Button> 
      <div className="border p-[7px] rounded-[7px]">{count}</div>
      <Button
        onClick={() => dispatch(increment())}
        variant="outline"
       
      >
        +
      </Button>

      </div>
      
     
      <div className="flex gap-[20px] mt-[50px]">
        <Link to={"management/login"}>
          <Button variant="outline">Create A Library</Button>
        </Link>
        <Link to={"management/login"}>
          <Button>Join A Library</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
