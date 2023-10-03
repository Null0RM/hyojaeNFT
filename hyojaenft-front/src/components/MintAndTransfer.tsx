import { constants } from "../components/constants";
import { ethers, Contract, utils } from "ethers";
// import SimpleCardNFTFactoryABI from "../abi/SimpleCardNFTFactory.json";
import { useState } from "react";

// const abi = SimpleCardNFTFactoryABI.abi;
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
  const [transferTo, setTransferTo] = useState("");

  //ethers.js 라이브러리를 사용하여 이더리움과 연결합니다.
  //// signer는 거래에 서명할 수 있는 객체입니다.
  //// provider는 이더리움 노드에 연결하는 객체입니다.
  //// simpleCardNFTFactory는 스마트 컨트랙트와 상호작용할 수 있는 객체입니다.
  // const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
  // const provider = new ethers.providers.JsonRpcProvider(
  //   constants.SeopoliaRPCUrl
  // );
  // let simpleCardNFTFactory = new ethers.Contract(
  //   constants.ContractAddress,
  //   abi,
  //   provider
  // );
  // simpleCardNFTFactory = simpleCardNFTFactory.connect(signer);

  // const Register = async () => {
  //   const tx = await simpleCardNFTFactory.registerSimpleCardInfo(
  //     name,
  //     age,
  //     email,
  //     website,
  //     gender
  //   );
  //   const txReceipt = await tx.wait();
  //   console.log(txReceipt);
  // };

  // const Mint = async () => {
  //   const tx = await simpleCardNFTFactory.mintSimpleCardNFT({
  //     value: utils.parseEther("0.01"),
  //   });
  //   const txReceipt = await tx.wait();
  //   console.log(txReceipt);
  // };

  // const TransferTo = async () => {
  //   const tx = await simpleCardNFTFactory.transferSimpleCardNFT(transferTo);
  //   const txReceipt = await tx.wait();
  //   console.log(txReceipt);
  // };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="University"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Major"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        {/* <button onClick={() => Register()}>Register My Info</button> */}
      </div>
      {/* <div>
        <button onClick={() => Mint()}>Mint</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Transfer to"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
        />
        <button onClick={() => TransferTo()}>Transfer</button>
      </div> */}
    </>
  );
};
