import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const useSignUp = () => {
    const navigator = useNavigate();
    const {setIsAuth} =useAuthContext();

    const signUp = async (data) => {

        const success = handleErrorInputs(data.Fullname, data.Email, data.Password, data.Dob, data.Gender, data.Salary);

        if (!success) return; 

        let response = await fetch("http://localhost:8000/api/users/addEmployee/",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
              },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if(response.ok){
            navigator("/");
            toast.success("Employee Added Successfully");
        }else{
            toast.error(result.message);
        }




    }
    return {signUp};
}


function handleErrorInputs(fullName, Email, password, Dob, gender, salary) {
    if (!fullName || !Email || !password || !Dob || !gender ) {
        toast.error('Please fill all fields');
        return false;
    }else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false;
    }else if (!parseInt(salary)){
        toast.error("Salary must be number")
        return false;
    }
    return true;
}
export default useSignUp;