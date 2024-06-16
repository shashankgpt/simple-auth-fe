import React from "react";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import Button from "@mui/material/Button";

interface Props {
    logout: () => void;
    isSignIn?: boolean;
}

export default function Header({logout, isSignIn}: Props) {
  return (
    <header className="bg-blue-700 shadow flex justify-around">
      <div className="max-w-7xl mx-2 py-6 flex">
        <OtherHousesOutlinedIcon className="text-white" sx={{ fontSize: 40 }} />
        <h1 className="ml-8 text-3xl font-bold text-white">
          Welcome to Simple Auth
        </h1>
      </div>
      {isSignIn && <div className="flex ">
        <Button onClick={logout} style= {{
          color: 'white',
        }}>Logout</Button>
      </div>}
    </header>
  );
}
