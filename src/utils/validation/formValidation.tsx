const isObjectEmpty = (item: {}) => Object.keys(item).length === 0;

export const isEmpty = (value: string | any[]) => {
    if (!value) return true;
    if (typeof value == "string") {
        return value.length === 0;
    } else if (typeof value === "object") {
        return isObjectEmpty(value);
    }
};

export const validatePhoneNumber = (value: string) => {
    let error;
    if (isEmpty(value)) {
        error = "Phone number is required.";
    } else if (!/^\+\d{1,4}\d{6,}$/.test(value)) {
        error = "Phone number must be a number";
    } else if (value.length !== 13) {
        error = "Phone number must be at least 9 characters.";
    } else if (/^[+]?([0-9]{13})$/.test(value)) {
        error = "Invalid format.";
    }
    return error;
};
