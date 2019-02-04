import Lock from "@material-ui/icons/Lock";
import withStyles from "@material-ui/core/styles/withStyles";
import { signinUser } from "../lib/auth";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Gavel from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Link from "next/link";
import Router from "next/router";
import React from "react";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    openError: false,
    isLoading: false
  };

  handleClose = () => this.setState({ openError: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    event.preventDefault();

    const user = { email, password };
    this.setState({ isLoading: true, error: "" });
    signinUser(user).then(() => {
      Router.push("/");
    }).catch(this.showError);

  };

  showError = err => {
    const error = err.response && err.response.data || err.message;
    this.setState({ error, openError: true, isLoading: false });
  };

  render() {
    const { classes } = this.props;
    const { error, openError, isLoading } = this.state;
    return (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Lock />
            </Avatar>

            <Typography variant="h5" component="h1">
              Sign in
            </Typography>

            <form onSubmit={this.handleSubmit} className={classes.form}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" type="email" onChange={this.handleChange} />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" onChange={this.handleChange} />
              </FormControl>

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                  className={classes.submit}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            {error && <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                open={openError}
                onClose={this.handleClose}
                autoHideDuration={6000}
                message={<span className={classes.snack}>{error}</span>}
            />}
          </Paper>
        </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2
  },
  snack: {
    color: theme.palette.secondary.light
  }
});

export default withStyles(styles)(Signin);
