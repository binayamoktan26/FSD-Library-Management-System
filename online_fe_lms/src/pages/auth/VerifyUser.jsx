import React from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  return (
    <div className="py-3">
      {isPending && (
        <div className="m-auto" style={{ width: "450px" }}>
          <div className="d-flex justify-content-center">
            {" "}
            <Spinner animation="border" variant="primary" />
          </div>
          <div>Please do not go back or refresh the browser . Please wait </div>
        </div>
      )}
    </div>
  );
};

export default VerifyUser;
