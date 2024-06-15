import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export function SignUp() {
  return (
    <div className="flex justify-center mt-20">
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div" className="text-center">
            Sign Up
          </Typography>
          <div className="mt-4">
            <div className="flex mt-8">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="flex mt-8">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="flex mt-8">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around w-full">
              <Button variant="contained">Sign Up</Button>
              <Button variant="outlined">Cancel</Button>
            </div>
            <div className="flex justify-center mt-4">
              Already a member?<Button size="small" >Sign In</Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
