import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  FileInput,
} from "flowbite-react";
import { useState } from "react";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

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
          <Button
            color="light"
            className="w-full"
            onClick={() => setOpenModal(true)}
          >
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
        <div className="bg-white flex-grow p-4 flex flex-wrap ">
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
          <img
            alt="add photo"
            src="https://cdn1.iconfinder.com/data/icons/photo-editing-glyph/32/add_image_photo-512.png"
            className="w-36 h-36 object-cover"
          />
        </div>
      </div>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add or edite your Profile data
            </h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="fname" value="First Name" />
                </div>
                <TextInput id="fname" value={currentUser.firstName} required />
              </div>
              <div className="flex-1">
                <div className="mb-2 block">
                  <Label htmlFor="lname" value="Last Name" />
                </div>
                <TextInput id="lname" value={currentUser.lastName} required />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="email" />
              </div>
              <TextInput
                id="email"
                type="email"
                value={currentUser.email}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="city" value="Current City" />
              </div>
              <TextInput id="city" value={currentUser.city} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="about" value="About you" />
              </div>
              <textarea
                name=""
                id="about"
                cols="46"
                rows="4"
                className="rounded-md border-slate-400 text-sm"
              ></textarea>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="profilePic" value="profile picture" />
              </div>
              <FileInput id="profilePic" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bg" value="Background Photo" />
              </div>
              <FileInput id="bg" />
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-red-700 hover:underline ">
                Change Password
              </a>
              <TextInput id="city" placeholder="old password" required />
              <TextInput id="city" placeholder="new password" required />
            </div>
            <div className="flex justify-between py-2">
              <Button gradientMonochrome="failure" onClick={onCloseModal}>
                Cansel
              </Button>
              <Button gradientMonochrome="lime">Update Profile</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Dashboard;
