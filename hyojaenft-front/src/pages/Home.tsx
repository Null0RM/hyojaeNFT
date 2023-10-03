import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";

export const Home = () => {
  const [account, setAccount] = useState("");
  return (
    <div>
      <Header account={account} setAccount={setAccount}></Header>
    </div>
  );
};
