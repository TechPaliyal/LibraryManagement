import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Nav from "@/mycomponents/Nav";

function Librarylist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const [selectLibrary, setSelectLibrary] = useState<Library | null>(null);

  interface Library {
    id: number;
    name: string;
    description: string;
    image: string;
  }

  const libraries: Library[] = [
    {
      id: 1,
      name: "library 1",
      description: "hbn",
      image: "./images/Google.jpg",
    },
    {
      id: 2,
      name: "library 2",
      description: "good library",
      image: "./images/Google.jpg",
    },
    {
      id: 3,
      name: "library 3",
      description: "wifi available",
      image: "./images/Google.jpg",
    },
  ];

  const openModal = (library: Library) => {
    setSelectLibrary(library);
    setIsModalOpen(true);
  };

  const openSecondModal = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div>
      <Nav/>
      <h1 className="text-[28px] ml-5 mt-3 font-bold">List of Libraries</h1>
      <p className="text-gray-400 ml-5">Search for your suitable library</p>
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col w-11/12 gap-10">
          <Input className="mt-2" placeholder="Search Library"></Input>
          {/* library lists */}
          {libraries.map((library) => (
            <div
              key={library.id}
              className="flex flex-row h-36 w-full border border-b-neutral-500"
            >
              <div className="h-28 w-28 mx-4 my-4 ">
                <img src={library.image} alt="" />
              </div>
              <div className="space-y-2">
                <h1 className="text-[28px] font-bold space-x-3">
                  {library.name}
                </h1>
                <p id="description" className="text-gray-400 ">
                  library having Ac, Wifi etc.
                </p>
                <Button onClick={() => openModal(library)}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectLibrary && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-2/5 flex flex-col items-center space-y-5">
            <h2 className="text-2xl mb-4">{selectLibrary.name}</h2>
            {/* Add your form elements here */}
            <div className="font-medium w-full">
              <p className="text-[25px]">Mobile number</p>
              <div className=' h-9 border border-b-neutral-700 " '>
                9783298810
              </div>
            </div>
            <div className="font-medium w-full">
              <p className="text-[25px]">Email</p>
              <div className=' h-9 border border-b-neutral-700 " '>
                ourproject@gmsail.com
              </div>
            </div>
            <div className="font-medium w-full">
              <p className="text-[25px]">Fees</p>
              <div className=' h-9 border border-b-neutral-700 " '>
                {"1000" + "₹"}
              </div>
            </div>
            <div className="font-medium w-full">
              <p className="text-[25px]">Adress</p>
              <div className=' h-9 border border-b-neutral-700 " '>Jodhpur</div>
            </div>
            <Button className="mr-2 " onClick={openSecondModal}>
              Proceed
            </Button>
          </div>
        </div>
      )}{" "}
      {isSecondModalOpen && (
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
              <Button className="w-full" onClick={closeSecondModal}>
                Book now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Librarylist;
