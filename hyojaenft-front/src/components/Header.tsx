import React from "react";

interface headerProps {
  account: string;
  setAccount: (account: string) => void;
}

export const Header = ({ account, setAccount }: headerProps) => {
  return <div>Header</div>;
};
