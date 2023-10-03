import React from "react";
import { styled } from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
`;

interface WalletProps {
  account: string;
  setAccount: (account: string) => void;
}

export const Wallet = ({ account, setAccount }: WalletProps) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();
  setAccount(address!);

  return (
    <Container>
      {isConnected ? (
        <>
          <div>
            Connected to {address}
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        </>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </Container>
  );
};
