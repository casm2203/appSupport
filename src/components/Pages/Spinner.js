import React from 'react'
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import { blue } from '@mui/material/colors';

const override = css`
  display: block;
  margin: 100px auto;
  width: 500px;
  border-color: red;
`;

const Spinner = () => {
  return (
    <BarLoader color={blue[900]} css={override} size={150} />
  )
}

export default Spinner