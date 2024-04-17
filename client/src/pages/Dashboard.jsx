import React from "react";
import { useSelector } from "react-redux";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);

  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
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
          <Button color="light" className="w-full" onClick={() => setOpenModal(true)}>
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



      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Dashboard;
