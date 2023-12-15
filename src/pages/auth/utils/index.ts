import axios from "axios";

export const handleSIGNUP = async (data: Object) => {
    console.log(data);
    let response = await axios.post("/api/auth/signup", data);
    console.log(response, "response");
    const responseData = response.data;
    if (responseData?.isError) {
        return { msg: "error" };
    }

    localStorage.setItem("token", JSON.stringify(responseData.token));
    localStorage.setItem("userID", JSON.stringify(responseData.userData._id));
    return responseData;
};
