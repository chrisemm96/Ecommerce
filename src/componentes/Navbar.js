import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core/IconButton";
import logo from "../imagen/logo.jpg"
import { Badge, Buttom } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
