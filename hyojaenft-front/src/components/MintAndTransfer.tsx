import { constants } from "../components/constants";
import { ethers, Contract, utils } from "ethers";
import HyojaeNFTFactoryABI from "../abi/HyojaeNFT.json";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 300px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;
  &:focus ~ span,
  input:valid ~ span {
    width: 100%;
  }
  margin-bottom: 1rem;
`;

const abi = HyojaeNFTFactoryABI.abi;
interface MintTranProps {
  account: string;
  setAccount: (account: string) => void;
}

export const MintAndTransfer = ({ account, setAccount }: MintTranProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [gender, setGender] = useState("");
  const [exchangeTo, setExchangeTo] = useState("");

  //ethers.js 라이브러리를 사용하여 이더리움과 연결합니다.
  //// signer는 거래에 서명할 수 있는 객체입니다.
  //// provider는 이더리움 노드에 연결하는 객체입니다.
  //// simpleCardNFTFactory는 스마트 컨트랙트와 상호작용할 수 있는 객체입니다.
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

  const provider = new ethers.providers.JsonRpcProvider(
    constants.SeopoliaRPCUrl
  );
  let hyojaeNFTFactory = new ethers.Contract(
    constants.ContractAddress,
    abi,
    provider
  );
  hyojaeNFTFactory = hyojaeNFTFactory.connect(signer);

  const Register = async () => {
    const tx = await hyojaeNFTFactory.registerCard(
      name,
      age,
      email,
      website,
      gender
    );
    const txReceipt = await tx.wait();
    console.log(txReceipt);
  };

  // const Mint = async () => {
  //   const tx = await hyojaeNFTFactory.mintSimpleCardNFT({
  //     value: utils.parseEther("0.01"),
  //   });
  //   const txReceipt = await tx.wait();
  //   console.log(txReceipt);
  // };

  const ExchangeTo = async () => {
    const tx = await hyojaeNFTFactory.exchangeCard(exchangeTo);
    const txReceipt = await tx.wait();
    console.log(txReceipt);
    console.log("exchange done");
  };

  return (
    <>
      <Container>
        <StyledInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <button onClick={() => Register()}>Register My Info</button>
      </Container>
      {/* <Container>
        <button onClick={() => Mint()}>Mint</button>
      </Container>*/}
      <Container>
        <input
          type="text"
          placeholder="Exchange to"
          value={exchangeTo}
          onChange={(e) => setExchangeTo(e.target.value)}
        />
        <button onClick={() => ExchangeTo()}>Exchange </button>
      </Container>
    </>
  );
};
