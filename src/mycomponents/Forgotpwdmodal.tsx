import { twMerge } from "tailwind-merge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface modalprops{
    step:string
    onsubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Forgotpwdmodal:React.FC<modalprops>= ({step , onsubmit}) => {
  return (
    <div>
    {step == "step1" && (
        <div className={twMerge("flex flex-col md:flex-row h-screen overflow-hidden")}>
        <div className="w-1/2" /> 
        <div className="w-1/2 flex items-center justify-center bg-black bg-opacity-50 absolute right-0 h-full">
          <div className="bg-white p-6 rounded shadow-lg w-5/7 flex flex-col items-center space-y-5">
            <h2 className="text-2xl mb-4">Otp verification</h2>
            <p className="text-red-400">
                otp has been sent to your registered email!
            </p>
            {/* Add your form elements here */}
           
           <Input placeholder="Enter Otp Here"/>
           <form onSubmit={onsubmit}>
        <Button type="submit">Submit otp</Button>
      </form>
          </div>
        </div>
      </div>
    )}
    {step == "step2" && (
        <div className={twMerge("flex flex-col md:flex-row h-screen overflow-hidden")}>
        <div className="w-1/2" /> 
        <div className="w-1/2 flex items-center justify-center bg-black bg-opacity-50 absolute right-0 h-full">
          <div className="bg-white p-6 rounded shadow-lg w-1/2 flex flex-col items-center space-y-5">
            <h2 className="text-2xl mb-4">Reset password</h2>
            {/* Add your form elements here */}
           
           <Input placeholder="Enter new password"/>
           <Input placeholder="Confirm password"/>
           <form onSubmit={onsubmit}>
        <Button type="submit">Change Password</Button>
      </form>
  
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default Forgotpwdmodal;
