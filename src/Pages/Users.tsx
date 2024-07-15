import Nav from "@/mycomponents/Nav";
import { Input } from "@/components/ui/input";
import { useState } from "react";
function Users() {
  interface user {
    name: string;
    date: string;
    image?: string;
    number: number;
    email: string;
    adress: string;
  }
  const [isClicked, setIsClicked] = useState(false);
  const [selectUser, setSelectUser] = useState<user | null>(null);

  const reDirect = () => {
    setIsClicked(false);
  };

  const click = (user: user) => {
    setSelectUser(user);
    setIsClicked(true);
  };
  const users: user[] = [
    {
      name: "Yogesh",
      date: "08/02/24",
      image: "./images/user.png",
      number: 9783298810,
      email: "yhjgh@g.com",
      adress: "kheme ka kua",
    },
    {
      name: "Bhagirath",
      date: "06/03/24",
      image: "./images/user.png",
      number: 9783298810,
      email: "yhjgh@g.com",
      adress: "kheme ka kua",
    },
    {
      name: "Sohan",
      date: "07/06/24",
      image: "./images/user.png",
      number: 9783298810,
      email: "yhjgh@g.com",
      adress: "kheme ka kua",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col w-11/12 gap-8">
          <div>
          <Nav />
            <h1 className="text-[48px] ml-4 mt-3 font-bold">List of Users</h1>
            <p className=" text-[18px] text-gray-400 ml-4">Search for users</p>
          </div>
          <Input type="text" placeholder="Search user"></Input>
          <div className="space-y-8">
            {users.map((user) => (
              <div
                onClick={() => click(user)}
                className="h-28 w-full border border-neutral-300 rounded-r-2xl rounded-l-2xl "
              >
                <div className="flex my-4 mx-4 font-medium space-x-5">
                  <div className="h-20 w-20 rounded-r-3xl rounded-l-3xl ">
                    <img
                      className="rounded-r-full rounded-l-full"
                      src={user.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-[20px]">{user.name}</h1>
                    <p className="text-gray-400">Started from {user.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isClicked && selectUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div
            onClick={reDirect}
            className=" w-2/5 bg-white p-6 rounded shadow-lg flex flex-col items-center space-y-5"
          >
            <div className="font-medium text-[24px]">
              <h1>{selectUser.name}</h1>
            </div>
            <div className="w-full space-y-1">
              <p className="font-medium">Mobile Number</p>
              <div className="h-9 w-full border border-neutral-300 p-2 rounded  ">
                {selectUser.number}
              </div>
            </div>
            <div className="w-full ">
              <p className="font-medium">E-mail</p>
              <div className="h-9 w-full border border-neutral-300 p-2 rounded  ">
                {selectUser.email}
              </div>
            </div>
            <div className="w-full ">
              <p className="font-medium">Adress</p>
              <div className="h-9 w-full border border-neutral-300 p-2 rounded  ">
                {selectUser.adress}
              </div>
            </div>
            <div className="w-full ">
              <p className="font-medium">Joining Date</p>
              <div className="h-9 w-full border border-neutral-300 p-2 rounded  ">
                {selectUser.date}
              </div>
            </div>
            <div className="w-full ">
              <p className="font-medium">Session end on</p>
              <div className="h-9 w-full border border-neutral-300 p-2 rounded  ">
                10/08/24
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
