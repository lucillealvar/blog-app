import React from "react";
import { Link } from "react-router-dom";
import {Button, Label, TextInput} from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-3xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-600 via-teal-500 to-green-300 rounded-lg text-white">
              Welcome to My
            </span>
            Profolio
          </Link>
          <p className="text-sm mt-5">Portfolio entry</p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
            <Label value="Your username"/>
            <TextInput type="text" placeholder="Username" id="username"/>
            </div>
            <div>
            <Label value="Your email"/>
            <TextInput type="text" placeholder="name@email.com" id="email"/>
            </div>
            <div>
            <Label value="Your password"/>
            <TextInput type="text" placeholder="Password" id="password"/>
            </div>
            <Button gradientDuoTone='greenToBlue' type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/login" className="text-blue-500">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
