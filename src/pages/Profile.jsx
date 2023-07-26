import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { isAuthSelector, logout } from "../store/slices/auth";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.data);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Card sx={{ width: 500, m: "20px auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.phone}
        </Typography>
        <Typography variant="body2">{user.email}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={logoutHandler} variant="contained">
          Вийти з аккаунту
        </Button>
      </CardActions>
    </Card>
  );
};
export default Profile;
