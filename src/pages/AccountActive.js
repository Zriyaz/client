import React, { useEffect, useState } from "react";

const AccountActive = ({ match }) => {
  console.log("Match", match.params.token);
  return (
    <div>
      <h1>Account Activation</h1>
    </div>
  );
};

export default AccountActive;
