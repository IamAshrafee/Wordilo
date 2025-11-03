import React from "react";
import MainWidth from "../../components/layout/MainWidth";
import InputBox from "./../../components/ui/InputBox";
import { CgPassword, CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  return (
    <div className="mt-8">
      <MainWidth>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-istok font-bold text-2xl">Your Profile</h1>
          </div>
          <div className="flex flex-col gap-2">
            <InputBox
              id="name"
              name="name"
              label="Username"
              type="text"
              icon={CgProfile}
              readonly
            />
            <InputBox
              id="email"
              name="email"
              label="Email"
              type="email"
              icon={MdEmail}
              readonly
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-istok font-bold text-xl">
                Change your password
              </h2>
            </div>
            <div className="flex gap-4">
              <InputBox
                id="oldPassword"
                name="oldPassword"
                label="Old password"
                type="password"
                icon={CgPassword}
              /><InputBox
                id="newPassword"
                name="newPassword"
                label="Set a new password"
                type="password"
                icon={CgPassword}
              />
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Profile;
