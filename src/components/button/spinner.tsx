import React from "react";
import { ButtonSize } from "./Button.types";
import "./spinner.scss";
export type SpinnerSize = ButtonSize;

 const Spinner: React.FC<{ size?: SpinnerSize }> = ({ size = 'small' }) => (
  <span className={`btn-spinner btn-spinner-size-${size}`}>
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
    <span className="btn-spinner-leaf" />
  </span>
);
Spinner.displayName = 'Spinner';

export { Spinner };