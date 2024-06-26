import { Button, Label, Modal, TextInput, FileInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFailure,
  updateStart,
  updateSuccess,
  removeError,
  deleteStart,
  deleteFailure,
  deleteSuccess,
} from "../redux/user/userSlice";
import uploadImage from "../utils/imageUpload.js";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


function DashEditeProfile({ openModal, onclose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [bg, setBg] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [passModal, setPassModal] = useState(false);
  const [cPass, setCPass] = useState("");

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
  console.log(formData);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (imageFile) {
        const downloadURL = await uploadImage(imageFile);
        setFormData({ ...formData, profilePicture: downloadURL });
      }
      if (bg) {
        const downloadURL = await uploadImage(bg);
        setFormData({ ...formData, bg: downloadURL });
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
      console.log(data2);
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
  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteStart());
    try {
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cPass: cPass }),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        return dispatch(deleteFailure(data2.message));
      } else {
        dispatch(deleteSuccess());
        navigate("/Home");
      }
    } catch (error) {
      dispatch(deleteFailure(error.message));
    }
  };

  return (
    <Modal show={openModal} size="md" popup onClose={onclose}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add or edite your Profile data
          </h3>
          <form action="" onSubmit={handleUpdate}>
            <div className="flex gap-4 md:flex-row flex-col">
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
              <Button gradientMonochrome="failure" onClick={onclose}>
                Cansel
              </Button>
              <Button
                gradientMonochrome="lime"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Update Profile"}
              </Button>
            </div>
          </form>
          {error && <span className="text-red-500 ">{error}</span>}
          <div className="border border-red-400 rounded-md p-4 ">
            <p className="font-bold text-red-500 mb-6">Danger Zone</p>
            <Button
              color="failure"
              className=""
              onClick={() => setConfirm(true)}
            >
              Delete Your Account
            </Button>
          </div>

          {/* confirm account deletion */}
          <Modal
            show={confirm}
            size="md"
            onClose={() => setConfirm(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete Your Account?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => {
                      setConfirm(false);
                      setPassModal(true);
                      dispatch(removeError());
                    }}
                  >
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setConfirm(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* enter password for account delete */}
          <Modal
            show={passModal}
            size="md"
            onClose={() => {
              setPassModal(false);
              setCPass("");
            }}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Enter password before Delete your account
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="cPass" value="Your password" />
                  </div>
                  <TextInput
                    id="cPass"
                    type="password"
                    value={cPass}
                    onChange={(e) => setCPass(e.target.value)}
                    required
                  />
                  {error && (
                    <span className="text-sm text-red-900">{error}</span>
                  )}
                </div>
                <div className="w-full flex justify-between">
                  <Button
                    color="gray"
                    onClick={() => {
                      setPassModal(false);
                      setCPass("");
                    }}
                  >
                    cansel
                  </Button>
                  <Button
                    color="failure"
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    Delete account
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DashEditeProfile;
