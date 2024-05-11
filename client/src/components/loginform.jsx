import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:5000/api/routes/login", {
        email,
        password,
      });
      // Check if email and password are provided
      if (!email || !password) {
        setError("Please enter both email and password", error);
        toast.error("Please enter both email and password");
        return;
      } else if (response.status === 200) {
        setError("Login Successful", error);
        toast.success("Login Successful"); // Display success message
        setIsButtonClicked(true);
      } else {
        setError("Invalid Credentials", error);
        toast.error("Invalid Credentials"); // Display error message
      }
    } catch (error) {
      console.error(error);
      setError("Error during Login", error);
      toast.error("An error occurred during Login", error);
    }
  };

  useEffect(() => {
    let timer;
    if (isButtonClicked) {
      timer = setTimeout(() => {
        // Redirect to home page after 5 seconds if the button was clicked
        window.location.href = "/"; // or use history.push('/logIn') if you are using useHistory hook
      }, 3000);
    }
    // Clear the timer when the component unmounts or when button is clicked again
    return () => clearTimeout(timer);
  }, [isButtonClicked]); // Run this effect whenever isButtonClicked changes

  // const handleButtonClick = () => {
  //   setIsButtonClicked(true);
  // };

  return (
    <div className="inset-0 flex justify-center items-center bg-gradient-to-br from-c3 to-c2 backdrop-blur-sm">
      <div className="p-5 w-[600px] h-screen ">
        <Card
          className="flex flex-col w-[565px] h-[500px] sm:w-auto bg-white rounded-2xl z-80"
          shadow={false}
        >
          <Typography className="pl-12 pt-5 text-2xl text-black font-bold font-[Montserrat]">
            Log In
          </Typography>
          <Typography className="text-black mt-0 font-medium font-[Montserrat] pl-12 pt-2">
            To taste the flavors of freshness!
          </Typography>
          <Typography className=" mt-3 w-[475px] h-2 rounded-r-2xl bg-c3"></Typography>
          <form className="ml-[50px] mt-5 mb-2 w-80 h-150 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Email
              </Typography>
              <Input
                type="email"
                size="md"
                value={email}
                placeholder="name@mail.com"
                className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-200 rounded-[30px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />

              <Typography className="-mb-3 text-black font-semibold font-[Montserrat]">
                Password
              </Typography>
              <Input
                type="password"
                size="md"
                placeholder="********"
                value={password}
                className="-mb-3 w-[470px] text-black font-semibold font-[Montserrat] border-deep-orange-200 focus:!border-deep-orange-900 bg-deep-orange-100 rounded-[30px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <Typography
                color="gray"
                className="text-gray font-[Montserrat] text-left text-sm font-normal"
              >
                Forgot password?{" "}
                <Link
                  className=" text-gray font-[Montserrat] font-medium text-gray-900"
                >
                  Reset Password
                </Link>
              </Typography>
            </div>
            <Link to="/" onClick={handleLogin}>
              <Button className="w-[300px] ml-20 mt-5 hover:bg-deep-orange-900 bg-c3 rounded-3xl text-white text-xl font-[Montserrat]">
                log in
              </Button>
            </Link>
            <Typography
              color="gray"
              className="ml-20 text-gray font-[Montserrat] mt-5 text-center font-normal"
            >
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className=" text-gray font-[Montserrat] font-medium text-gray-900"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
}
