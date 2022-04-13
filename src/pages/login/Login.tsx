import { CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../utils/users/create-user";

export const Login = () => {
  const [usernameValue, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    createUser({ username: usernameValue }).then(() => {
      // TODO: set this as the current user!
      setLoading(false);
      navigate("/rooms");
    });
  };

  const handleUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((e?.target as HTMLInputElement).value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <form onSubmit={handleSubmit}>
        <Card variant="outlined">
          <CardContent>
            <TextField
              id="username"
              label="Outlined"
              variant="outlined"
              required
              value={usernameValue}
              onChange={handleUsernameOnChange}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              type="submit"
              disabled={!Boolean(usernameValue) || loading}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </Grid>
  );
};
export default Login;
