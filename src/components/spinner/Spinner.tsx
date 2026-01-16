import React from "react";
export type SpinnerSize = "small" | "medium" | "large";

 export const Spinner: React.FC<{ size?: SpinnerSize }> = ({ size = 'small' }) => (
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

