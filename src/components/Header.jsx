import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        mb: "30px",
        p: "15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link className="header-link" to="/login">
        Увійти
      </Link>
      <Link className="header-link" to="/">
        Зареєструватися
      </Link>
    </AppBar>
  );
};
export default Header;
