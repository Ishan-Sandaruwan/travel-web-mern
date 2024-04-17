import React from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  FileInput,
} from "flowbite-react";
import { useState } from "react";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice";

function Dashboard() {
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [bg, setBg] = useState(null);
  const { error, loading, currentUser } = useSelector((state) => state.user);
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };
  const handleBgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBg(file);
    }
  };

  const uploadImage = async (img) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + img.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress.toFixed(0));
      },
      (error) => {
        console.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };
  const uploadBgImage = async (img) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + img.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress.toFixed(0));
      },
      (error) => {
        console.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setFormData({ ...formData, bg: downloadURL });
        });
      }
    );
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (imageFile) {
        await uploadImage(imageFile);
      }
      if (bg) {
        await uploadBgImage(bg);
      }
      if (formData.old_pass) {
        if (formData.old_pass != formData.password) {
          return dispatch(updateFailure("password doesn't match"));
        }
      }
      const { old_pass: old_pass, ...restData } = formData;
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", credentials: "include" },
        body: JSON.stringify(restData),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        return dispatch(updateFailure(data2.message));
      } else {
        dispatch(updateSuccess(data2));
        // onCloseModal();
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };

  console.log(formData);

  return (
    <div className="bg-slate-300 text-slate-800">
      <img
        alt="cover photo"
        src={currentUser.bg}
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
            <form action="" onSubmit={handleUpdate}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name" />
                  </div>
                  <TextInput
                    id="firstName"
                    defaultValue={currentUser.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name" />
                  </div>
                  <TextInput
                    id="lastName"
                    defaultValue={currentUser.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="city" value="Current City" />
                </div>
                <TextInput
                  id="city"
                  defaultValue={currentUser.city}
                  onChange={handleChange}
                />
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
                  defaultValue={currentUser.about}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <div className="mb-2 block">
                  <Label htmlFor="profilePicture" value="profile picture" />
                </div>
                <FileInput
                  id="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-3">
                <div className="mb-2 block">
                  <Label htmlFor="bg" value="Background Photo" />
                </div>
                <FileInput
                  id="bg"
                  type="file"
                  accept="image/*"
                  onChange={handleBgChange}
                />
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <a href="#" className="text-sm text-red-900 hover:underline ">
                  Change Password
                </a>
                <TextInput
                  id="old_pass"
                  placeholder="old password"
                  onChange={handleChange}
                />
                <TextInput
                  id="password"
                  placeholder="new password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between py-5">
                <Button gradientMonochrome="failure" onClick={onCloseModal}>
                  Cansel
                </Button>
                <Button gradientMonochrome="lime" type="submit" disabled={loading} >
                  {loading ? 'Loading...' : 'Update Profile'}
                </Button>
              </div>
            </form>
            {error && <span className="text-red-500 ">{error}</span>}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Dashboard;
