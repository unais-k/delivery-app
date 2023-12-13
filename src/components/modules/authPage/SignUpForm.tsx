import Image from "next/image";
import { passwordIcon, phoneIcon, userIcon } from "../../../../public";
import React, { useState, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import {
 
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/firebase/firebaseConfig";

const SignUpForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleFormData = async () => {};

  const getOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});

      const confirmation = await signInWithPhoneNumber(
        auth,
        `+${phone}`,
        recaptchaVerifier
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={getOtp}>
        <div className="items-stretch bg-white flex flex-col justify-center px-4 mt-6">
          <div className="items-center border flex justify-between gap-3.5 px-4 py-3.5  rounded-xl border-solid border-zinc-300">
            <Image
              alt="user-icon"
              loading="lazy"
              src={userIcon}
              className="aspect-square object-contain object-center w-6 overflow-hidden  max-w-full my-auto"
            />
            <input
              type="text"
              placeholder="full name"
              className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
            />
          </div>
        </div>
        <div className="items-stretch  bg-white flex flex-col justify-center mt-3 px-4 py-3.5 rounded-xl">
          <div className="items-center flex justify-between gap-3.5">
            <PhoneInput
              country={"in"}
              inputStyle={{ width: "100%" }}
              value={phone}
              onChange={(e) => setPhone(e)}
            />
            {/* <input
                        type="text"
                        placeholder="phone"
                        className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
                    /> */}
          </div>
          <div id="recaptcha"></div>
        </div>
        <div className="items-stretch bg-white flex flex-col justify-center px-4  mt-3">
          <div className="items-center border flex justify-between gap-3.5 px-4 py-3.5  rounded-md border-solid border-zinc-300">
            <Image
              alt="password"
              loading="lazy"
              src={passwordIcon}
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <input
              type="password"
              placeholder="password"
              className="text-neutral-500 text-lg outline-none bg-transparent font-semibold leading-8 self-stretch grow shrink basis-auto"
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-zinc-900 mt-8 px-6 py-5 rounded-xl max-md:px-5"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
