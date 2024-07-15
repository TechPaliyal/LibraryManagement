import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ModalProps {
    user: string;
    onClose: () => void;
    library: string;
    onProceed: () => void;
  }
  
  
  const Modal: React.FC<ModalProps> = ({ user, onClose ,library , onProceed }) => {


  return (
    <div>
        {user === "first" &&  (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-2/5 flex flex-col items-center space-y-5">
              <h2 className="text-2xl mb-4">{library}</h2>
              {/* Add your form elements here */}
              <div className="font-medium w-full">
                <p className="text-[25px]">Mobile number</p>
                <div className=' h-9 border border-neutral-300 " '>
                  9783298810
                </div>
              </div>
              <div className="font-medium w-full">
                <p className="text-[25px]">Email</p>
                <div className=' h-9 border border-neutral-300 " '>
                  ourproject@gmsail.com
                </div>
              </div>
              <div className="font-medium w-full">
                <p className="text-[25px]">Fees</p>
                <div className=' h-9 border border-neutral-300 " '>
                  {"1000" + "₹"}
                </div>
              </div>
              <div className="font-medium w-full">
                <p className="text-[25px]">Adress</p>
                <div className=' h-9 border border-neutral-300 " '>Jodhpur</div>
              </div>
              <Button onClick={onProceed} className="mr-2 " >
               proceed
              </Button>
            </div>
          </div>
        )}
        {user === "second" && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-2/5 flex flex-col items-center space-y-6">
              <div className="w-full space-y-3 text-[18px] font-medium">
                <div>
                  <p>Start Date</p>
                </div>
                <div>
                  <Input className="w-full" type="date" />
                </div>
              </div>
              <div className="w-full space-y-3 text-[18px] font-medium">
                <div>
                  <p>Months </p>
                </div>
                <div>
                  <Input className="w-full" type="number" />
                </div>
              </div>
              <div className="w-full space-y-3">
                <h1 className="text-[24px] font-medium">Pricing</h1>
                <div className="flex w-full justify-between text-[18px] font-medium">
                  <div>
                    <p>price per month</p>
                  </div>
                  <div>1000</div>
                </div>
                <div className="flex w-full justify-between text-[18px] font-medium">
                  <div>
                    <p>Months</p>
                  </div>
                  <div>2</div>
                </div>
                <div className="flex w-full justify-between text-[24px] font-medium">
                  <div>
                    <p>Totel</p>
                  </div>
                  <div>2000</div>
                </div>
                <Button className="w-full" onClick={onClose}>
                  Book now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
        )}


export default Modal