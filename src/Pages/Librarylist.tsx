import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Nav from "@/mycomponents/Nav";
import Modal from "@/mycomponents/Modal";

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
      image: "./images/book.jpg",
    },
    {
      id: 2,
      name: "library 2",
      description: "good library",
      image: "./images/book.jpg",
    },
    {
      id: 3,
      name: "library 3",
      description: "wifi available",
      image: "./images/book.jpg",
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
     
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col w-11/12 gap-8">
          <div>
          <Nav />
            <h1 className="text-[48px] ml-4 mt-3 font-bold">
              List of Libraries
            </h1>
            <p className=" text-[18px] text-gray-400 ml-4">
              Search for your suitable library
            </p>
          </div>
          <Input className="mt-2" placeholder="Search Library"></Input>
          {/* library lists */}
          {libraries.map((library) => (
            <div
              key={library.id}
              className="flex flex-row h-36 w-full  border border-neutral-300 rounded-r-2xl rounded-l-2xl"
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
        <Modal user="first" library={selectLibrary.name}  onProceed={openSecondModal} onClose={closeSecondModal}/>
      )}
      {isSecondModalOpen && selectLibrary && (
       <Modal user="second" library={selectLibrary.name}  onProceed={openSecondModal} onClose = { closeSecondModal}/>
      )}
    </div>
  );
}

export default Librarylist;
