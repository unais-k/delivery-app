import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { closeIcon } from "../../../public";
import SignInForm from "@/components/modules/authPage/SignInForm";
import SignUpForm from "@/components/modules/authPage/SignUpForm";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import OTPForm from "@/components/modules/authPage/OTPForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { handleSignUP, handleLogin } from "./utils";
import { useDispatch } from "react-redux";
import { selectUser, setUser } from "@/lib/slices/userSlice";
import { useSelector } from "react-redux";
import InnerLoader from "@/components/innerLoader";

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("Log in");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [otpSend, setOtpSend] = useState(false);
  const [verification, setVerification] = useState<any>({});
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  

  const handleRegister = () => {
    if (!isRegister) {
      setIsRegister(true);
      setIsLogin(false);
      setTitle("Register");
    } else {
      setIsLogin(true);
      setIsRegister(false);
      setTitle("Log in");
    }
  };
  
  const handleVerifyOTP = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const otpString = otp.join("");
      const data = await verification.confirm(otpString);
      const RegisterData = {
        fullName: fullName,
        phone: phone,
        password: password,
      };
      if (data) {
        toast.info("otp");
        const response = await handleSignUP(RegisterData);
        console.log(response);

        router.push("/");
      }
    } catch (error:any) {
      toast.warn(error);
      router.push("/auth");
      setOtpSend(false);
      setIsRegister(true);
    }
  };

  const handleOTP = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phone.length < 5) {
      return toast.warn("not enough number");
    }
    setButtonSubmit(true)
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
      setButtonSubmit(false)

      const confirmation = await signInWithPhoneNumber(
        auth,
        `+${phone}`,
        recaptchaVerifier
      )
        .then((confirm) => {
          setVerification(confirm);
          setOtpSend(true);
          setIsRegister(false);
          setIsLogin(false);
          toast.info(`OTP Send to the ${phone}`);
          setTitle("OTP Verify")
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (phone.length < 10) {
      return toast.warn("not enough number");
    }

    try {
      const loginData = {
        phone: phone,
        password: password,
      };
      setButtonSubmit(true);
      const response = await handleLogin(loginData);

      if (response.status) {
        toast.success(response.message);
        dispatch(setUser(response?.result));
        router.push("/");
      } else {
        setPhone("91")
        setPassword("")
        setButtonSubmit(false)
        toast.error(response.message);
      }
    } catch (error) {}
  };

  return (
      <InnerLoader>
    <div className="justify-center items-center bg-opacity-80 flex w-full flex-col h-fit my-5 max-md:max-w-full">
      <div className="items-stretch border bg-white flex w-[480px] max-w-full flex-col px-8 py-10 rounded-xl border-solid border-zinc-300">
        <div className="items-stretch flex justify-between gap-2">
          <div className="text-zinc-900 text-4xl font-extrabold leading-[50px] tracking-tighter grow shrink basis-auto">
            {title}
          </div>
          {/* <Image
            alt="close"
            loading="lazy"
            src={closeIcon}
            className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          /> */}
        </div>

        {isRegister ? (
          <SignUpForm
            phone={phone}
            setPhone={setPhone}
            buttonSubmit={buttonSubmit}
            password={password}
            setPassword={setPassword}
            fullName={fullName}
            setFullName={setFullName}
            onFormSubmit={handleOTP}
          />
        ) : null}

        {isLogin ? (
          <SignInForm
            buttonSubmit={buttonSubmit}
            phone={phone}
            setPhone={setPhone}
            password={password}
            setPassword={setPassword}
            onFormSubmit={Login}
          />
        ) : null}

        {otpSend ? (
          <OTPForm otp={otp} setOtp={setOtp} onFormSubmit={handleVerifyOTP} />
        ) : null}

        <div className="justify-start items-stretch flex mt-8">
          <div
            onClick={handleRegister}
            className="text-neutral-500 text-center text-xl font-semibold leading-7 tracking-tight whitespace-nowrap"
          >
            {isLogin ? "Don’t have an account ?" : ""}
            {isRegister ? "Return to Log in" : ""}
          </div>
        </div>
      </div>
      </div>
      </InnerLoader>
  );
};

export default Login;
