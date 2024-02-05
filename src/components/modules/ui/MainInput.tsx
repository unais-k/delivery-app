import React from "react";
import { ErrorMessage } from "./ErrorMsg";

export type InputProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "prefix" | "type" | "onChange"
> &
    Partial<{
        wrapClassName: string;
        className: string;
        name: string;
        placeholder: string;
        type: string;
        errors: string[];
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        color: string;
        onChange: Function;
    }>;

const MainInput = React.forwardRef<HTMLInputElement, InputProps>(function InputComponent(
    {
        wrapClassName = "",
        className = "",
        name = "",
        placeholder = "",
        type = "text",
        children,
        errors = [],
        label = "",
        prefix,
        suffix,
        onChange,
        color = "",
        ...restProps
    },
    ref
) {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (onChange) onChange(e?.target?.value);
    };

    return (
        <>
            <div className={`${wrapClassName}`}>
                {!!label && label}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    className={`${className} outline-none bg-transparent border-0`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </div>
            {!!errors && <ErrorMessage errors={errors} />}
        </>
    );
});

export { MainInput };
