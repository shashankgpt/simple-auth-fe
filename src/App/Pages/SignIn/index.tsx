import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../store";
import { loginUser } from "../../store/features/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardForm } from "../../common/CardForm";
import { AuthActionTypes, IFormInputSignIn } from "../../common/types";
import { useEffect } from "react";

export function SignIn() {
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
  } = useForm<IFormInputSignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (success) {
      reset();
      setTimeout(() => {
        navigate("/");
      }, 500)
    }
  }, [success])

  const onSubmit = (data: IFormInputSignIn) => {
    dispatch(loginUser(data));
  };

  const getMessage = () => {
    if (error) {
      return {
        text: "Error: " + error,
        type: AuthActionTypes.ERROR
      }
    }
    if (success) {
      return {
        text: 'Successfully Sign In',
        type: AuthActionTypes.SUCCESS
      }
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <CardForm
        cancelText="Cancel"
        submitButtonText="Sign In"
        formName="Sign In"
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
        formLink={<div>Not a member? <Button size="small" onClick={() => navigate("/signup")}>Sign Up</Button></div>}
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
              type="password"
              id="password"
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
      </CardForm>
    </div>
  );
}
