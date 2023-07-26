import {
  TextField,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const mobileWidth = useMediaQuery("(max-width:769px)");
  const formWidth = mobileWidth ? "100%" : "50%";
  const registerHelper = () => {};

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
        onSubmit={handleSubmit(registerHelper)}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: formWidth,
          margin: "15px",
          gap: "20px",
        }}
      >
        <Typography align="center" sx={{ fontSize: "24px", fontWeight: "600" }}>
          Реєтрація
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ mb: "8px", fontSize: "14px", fontWeight: "600" }}>
            {"Ім'я"}
          </Typography>
          <TextField
            type="name"
            fullWidth
            placeholder="Ім'я"
            helperText={errors?.firstName ? errors.firstName.message : ""}
            error={errors?.firstName ? true : false}
            {...register("firstName", {
              required: "Введіть своє ім'я",
              minLength: {
                value: 4,
                message: "Мінімальна кількість символів (4)",
              },
            })}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ mb: "8px", fontSize: "14px", fontWeight: "600" }}>
            Прізвище
          </Typography>
          <TextField
            type="name"
            fullWidth
            placeholder="Прізвище"
            helperText={errors?.lastName ? errors.lastName.message : ""}
            error={errors?.lastName ? true : false}
            {...register("lastName", {
              required: "Введіть своє прізвище",
              minLength: {
                value: 3,
                message: "Мінімальна кількість символів (5)",
              },
            })}
          />
        </Box>
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
            Номер телефону
          </Typography>
          <TextField
            type="phone"
            fullWidth
            label="+380"
            helperText={errors?.phone ? errors.phone.message : ""}
            error={errors?.phone ? true : false}
            {...register("phone", {
              required: "Введіть свій номер",
              pattern: {
                value: /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
                message: "Номер введений невірно",
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
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ mb: "8px", fontSize: "14px", fontWeight: "600" }}>
            Підтвердження паролю
          </Typography>
          <TextField
            type="password"
            fullWidth
            placeholder="Підтвердіть пароль"
            helperText={
              errors?.passwordConfirm ? errors.passwordConfirm.message : ""
            }
            error={errors?.passwordConfirm ? true : false}
            {...register("passwordConfirm", {
              required: "Введіть пароль",
              minLength: {
                value: 5,
                message: "Пароль має бути хочаб 5 симболів",
              },
            })}
          />
        </Box>
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
          Зареєструватись
        </Button>
      </Box>

      <Typography>
        Вже є аккаунт?{" "}
        <Link style={{ color: "#C99A00" }} to="/">
          Вхід
        </Link>
      </Typography>
    </Box>
  );
};

export default Register;
