import React from "react";

const Alert = ({ alert }) => {
  return (
    alert && (
      <div
        className={`alert alert-${alert.type.toLowerCase()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{alert.type}</strong> : {alert.message}
      </div>
    )
  );
};

export default Alert;
