import axios from "axios";

export const handleSIGNUP = async (data: Object) => {
   
    let response = await axios.post("/api/user/signup/route", data);
    console.log(response, "response");
    const responseData = response.data;
    if (responseData?.isError) {
        return { msg: "error" };
    }

   
    return responseData;
};

export const handleLogin = async (data: Object) => {
   
    
   
    try {
        let response = await axios.post("/api/user/login/route", data);
    
    const responseData = response.data;

    if(responseData.status){
        localStorage.setItem("token", JSON.stringify(responseData.token));
        localStorage.setItem("userID", JSON.stringify(responseData.result._id));
    }

    
   
    return responseData;
    } catch (error) {

        return error
        
    }

    
};

