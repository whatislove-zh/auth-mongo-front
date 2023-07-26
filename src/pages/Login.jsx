import {
  TextField,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, isAuthSelector } from "../store/slices/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const mobileWidth = useMediaQuery("(max-width:769px)");
  const formWidth = mobileWidth ? "100%" : "50%";
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  const loginHelper = (data) => {
    dispatch(fetchAuth(data));
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(loginHelper)}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: formWidth,
          margin: "15px",
          gap: "20px",
        }}
      >
        <Typography align="center" sx={{ fontSize: "24px", fontWeight: "600" }}>
          Вхід
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ mb: "8px", fontSize: "14px", fontWeight: "600" }}>
            Email
          </Typography>
          <TextField
            type="email"
            fullWidth
            placeholder="email@example.com"
            helperText={errors?.email ? errors.email.message : ""}
            error={errors?.email ? true : false}
            {...register("email", {
              required: "Введіть свій email",
              pattern: {
                value: /^[\w-.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Введіть коректний email",
              },
            })}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ mb: "8px", fontSize: "14px", fontWeight: "600" }}>
            Пароль
          </Typography>
          <TextField
            type="password"
            fullWidth
            placeholder="Пароль"
            helperText={errors?.password ? errors.password.message : ""}
            error={errors?.password ? true : false}
            {...register("password", {
              required: "Введіть пароль",
              minLength: {
                value: 5,
                message: "Пароль має бути хочаб 5 симболів",
              },
            })}
          />
        </Box>
        <Typography sx={{ color: "#8B93A6", cursor: "pointer" }}>
          Забули пароль?
        </Typography>
        <Button
          sx={{
            color: "#424242",
            background: "#FFC700",
            py: "14px",
            "&:hover": {
              background: "#fe8700",
            },
            "&.Mui-disabled": {
              background: "#ffd335",
            },
          }}
          variant="outlined"
          type="submit"
          disabled={!isValid}
        >
          Увійти
        </Button>
      </Box>

      <Typography>
        Ви зареєстровані?{" "}
        <Link style={{ color: "#C99A00" }} to="/">
          Авторизація
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
