import { Button } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-300 text-slate-800">
      <img
        alt="cover photo"
        src="https://images.hdqwalls.com/wallpapers/travel-hd.jpg"
        className="h-[40vh] w-full object-cover"
      />
      <div className="max-w-5xl mx-auto bg-white flex flex-col gap-8 p-8 md:-translate-y-8 lg:-translate-y-16 mb-4">
        <div className="flex items-center gap-8">
          <img
            alt="profile photo"
            src={currentUser.profilePicture}
            className="w-24 h-24 object-cover rounded-full "
          />
          <div>
            <div className="text-black">
              {currentUser.firstName}
              {" " + currentUser.lastName}
            </div>
            <div className="text-sm">{currentUser.email}</div>
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="font-semibold">Following</p>
            <p>0</p>
          </div>
          <div>
            <p className="font-semibold">Followers</p>
            <p>0</p>
          </div>
        </div>
        <div className="">
          <Button color="light" className="w-full">
            Edite Profile
          </Button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex gap-4 md:-translate-y-8 lg:-translate-y-16">
        <div className="bg-white w-1/4 p-4 flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-4">About You</h3>
          <p> Add your current city</p>
          <p>Joined in Apr 2024</p>
          <p> Add a website</p>
          <p>Write some details about yourself</p>
        </div>
        <div className="bg-white flex-grow p-4 flex-wrap">
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-32 h-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
