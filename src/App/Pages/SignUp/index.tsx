import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import {registerUser} from "../../store/features/auth/authActions";

interface IFormInputSignUp {
  email: string;
  name: string;
  password: string;
}

export function SignUp() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputSignUp>(
    {
      defaultValues: {
        email: "",
        name: "",
        password: "",
      },
    }
  );

  const onSubmit = (data: IFormInputSignUp) => {
    dispatch(registerUser(data));
    console.log(data);
  };
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
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                helperText={errors.email?.message}
                error={!!errors.email}
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
                {...register("name", {
                  required: "name is required",
                  minLength: {
                    value: 3,
                    message: "name must be at least 3 characters",
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>
            <div className="flex mt-8">
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-around w-full">
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Sign Up
              </Button>
              <Button variant="outlined" onClick={() => reset()}>Cancel</Button>
            </div>
            <div className="flex justify-center mt-4">
              Already a member?<Button size="small">Sign In</Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
