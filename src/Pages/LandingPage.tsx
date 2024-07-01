import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-[128px] font-medium-">LibraryHub</h1>
        <p className="text-[36px] font-medium">Your central place for all library needs</p>
        <div className="flex gap-[20px] mt-[50px]">
      <Link to={'management/login'}><Button variant="outline">Create A Library</Button></Link>  
       <Link to={'user/login'}><Button >Join A Library</Button></Link> 
        </div>
    </div>
  )
}

export default LandingPage