import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../store";
import { registerUser } from "../../store/features/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardForm } from "../../common/CardForm";
import { AuthActionTypes, IFormInputSignUp } from "../../common/types";
import { useEffect } from "react";
import {resetState} from "../../store/features/auth/authSlice";

export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputSignUp>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  useEffect(() => {
    if (success) {
      reset();
      setTimeout(() => {
        dispatch(resetState());
        navigate("/signin");
      }, 500)
    }
  }, [success])

  const onSubmit = (data: IFormInputSignUp) => {
    dispatch(resetState());
    dispatch(registerUser(data));
  };

  const getMessage = () => {
    if (error) {
      return {
        text: "Error: " + error.message,
        type: AuthActionTypes.ERROR
      }
    }
    if (success) {
      return {
        text: 'User Registered',
        type: AuthActionTypes.SUCCESS
      }
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <CardForm
        cancelText="Cancel"
        submitButtonText="Sign Up"
        formName="Sign Up"
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
        formLink={<div>Already a member? <Button size="small" onClick={() => navigate("/signin")}>Sign In</Button></div>}
        message={getMessage()}
        loading={loading}
      >
        <div className="mt-4">
          <div className="flex mt-8">
            <TextField
              id="email"
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
              id="password"
              label="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              variant="outlined"
              className="w-full"
            />
          </div>
        </div>
      </CardForm>
    </div>
  );
}
