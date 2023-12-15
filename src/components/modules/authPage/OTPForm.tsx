/* eslint-disable react-hooks/rules-of-hooks */
import { ChangeEvent, FormEvent, useRef, useEffect } from "react";

type OTPProps = {
    otp: string[];

    setOtp: (value: string[]) => void;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const OTPForm: React.FC<OTPProps> = ({
    otp,

    setOtp,
    onFormSubmit,
}) => {
    const inputRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            inputRefs[0]?.current?.focus();
            isInitialRender.current = false;
        }
    }, []);

    const focusToNextInput = (target: HTMLElement) => {
        const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };
    const focusToPrevInput = (target: HTMLElement) => {
        const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };

    const handleChange = (index: number, value: string) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        // Move focus to the next input if the current input is not the last one and has a value
        if (index < inputRefs.length - 1 && value !== "") {
            inputRefs[index + 1]?.current?.focus();
        }
    };
    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        const target = e.target as HTMLInputElement;

        if (key === "ArrowRight" || key === "ArrowDown") {
            e.preventDefault();
            return focusToNextInput(target);
        }

        if (key === "ArrowLeft" || key === "ArrowUp") {
            e.preventDefault();
            return focusToPrevInput(target);
        }

        const targetValue = target.value;

        target.setSelectionRange(0, targetValue.length);

        if (e.key !== "Backspace" || targetValue !== "") {
            return;
        }

        focusToPrevInput(target);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="items-stretch bg-white flex flex-col justify-center px-4 py-5  mt-3">
                <div className="items-center flex justify-between">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="\d{1}"
                            maxLength={1}
                            ref={inputRefs[index]}
                            className="w-10 text-lg text-black  bg-transparent p-2 border border-solid h-10 font-semibold"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                            onKeyDown={inputOnKeyDown}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button
                    type="submit"
                    className="text-white text-center text-lg font-semibold leading-5 justify-center items-stretch bg-zinc-900 mt-4 px-6 py-3 rounded-xl max-md:px-5"
                >
                    Verify
                </button>
                <button
                    type="button"
                    className="text-white text-center text-lg font-semibold leading-5 justify-center items-stretch bg-zinc-900 mt-4 px-6 py-3 rounded-xl max-md:px-5"
                >
                    Resend OTP
                </button>
            </div>
        </form>
    );
};
export default OTPForm;
