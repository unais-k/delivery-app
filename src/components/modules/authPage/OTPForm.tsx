import Image from "next/image";
import { ChangeEvent, Dispatch, FormEvent, useMemo, useRef, useState } from "react";

type OTPProps = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const OTPForm: React.FC<OTPProps> = ({ value, valueLength, onChange, onFormSubmit }) => {
    const RE_DIGIT = new RegExp(/^\d+$/);

    const valueItems = useMemo(() => {
        if (!value || value.length !== valueLength) {
            value = "111111";
        }
        const valueArray = value ? value.split("") : [];
        const items: Array<string> = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push("");
            }
        }

        return items;
    }, [value, valueLength]);

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

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== "") {
            return;
        }

        const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
            return;
        }

        targetValue = isTargetValueDigit ? targetValue : " ";

        const targetValueLength = targetValue.length;

        if (targetValueLength === 1) {
            const newValue = (value ?? "").substring(0, idx) + targetValue + (value ?? "").substring(idx + 1);

            onChange(newValue);

            if (!isTargetValueDigit) {
                return;
            }

            focusToNextInput(target);
        } else if (targetValueLength === valueLength) {
            onChange(targetValue);

            target.blur();
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
    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { target } = e;

        const prevInputEl = target.previousElementSibling as HTMLInputElement | null;

        if (prevInputEl && prevInputEl.value === "") {
            return prevInputEl.focus();
        }

        target.setSelectionRange(0, target.value.length);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="items-stretch bg-white flex flex-col justify-center px-4 py-5  mt-3">
                <div className="items-center flex justify-between">
                    {valueItems.map((digit, idx) => (
                        <input
                            key={idx}
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="\d{1}"
                            maxLength={valueLength}
                            className="w-10 text-lg text-black  bg-transparent p-2 border border-solid h-10 font-semibold"
                            value={digit}
                            onChange={(e) => inputOnChange(e, idx)}
                            onKeyDown={inputOnKeyDown}
                            onFocus={inputOnFocus}
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
