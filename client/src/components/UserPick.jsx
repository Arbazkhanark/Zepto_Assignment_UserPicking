import { useEffect, useState } from "react";
import UserDropDown from "./UserDropDown";
import { USERS_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const UserPick = () => {
  const [users, setUsers] = useState(null);
  const [click, setClick] = useState(false);
  const [searchText,setSearchText]=useState('');
  const [searchUser,setSearchUser]=useState(users);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(USERS_API);
    const userInfo = await res.json();
    setUsers(userInfo.users);
  };

  const selectedUserFunc = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setUsers(users.filter((availableUser) => availableUser.id !== user.id));
  };


  const diSelectUserFunc=(user)=>{
    setSelectedUsers(selectedUsers.filter((selectUser)=>selectUser !==user))
    setUsers([...users,user]);
  }

  function filterUser(e) {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);  
    setSearchUser(users.filter((user) => user.firstName.toLowerCase().includes(searchText)));
  }
  

  return (
    <div className="bg-[bisque] h-[70vh]">
      <div className="bg-white h-[70vh] w-[70%] ml-auto mr-auto">
      <div className="flex flex-wrap border-b-2">
            <div className="flex flex-wrap">
                {selectedUsers.map((user) => (
                    <div className="m-2 flex items-center bg-slate-300 p-2 rounded-xl" key={user.id}>
                        <img className="w-8 h-8 rounded-full border mr-2" src={user.image} alt={user.firstName} />
                        <span>{user.firstName}</span>
                        <button className="ml-5 text-[tomato] font-bold text-lg" onClick={()=>diSelectUserFunc(user)}>X</button>
                    </div>
                ))}
            </div>
            <input
            className="outline-none w-[130px] font-thin p-1 text-slate-700"
            type="text"
            placeholder="Add new User...."
            onClick={() => setClick(true)}
            value={searchText}
            onChange={filterUser}
            />
      </div>
        {click ? <UserDropDown users={searchUser ? searchUser:users
        } selectedUserFunc={selectedUserFunc} /> : <></>}
      </div>
    </div>
  );
};

export default UserPick;



