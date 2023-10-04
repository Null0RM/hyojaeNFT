import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Web3 from "web3";
import HyojaeNFTFactoryABI from "../abi/HyojaeNFT.json";
import { constants } from "../components/constants";
import { ethers } from "ethers";
import { styled } from "styled-components";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/dist/connectors/injected";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 3rem;
`;
declare global {
  interface Window {
    web3: Web3;
  }
}

interface CardObject {
  name: string;
  age: number;
  email: string;
  website: string;
  gender: string;
}

const abi = HyojaeNFTFactoryABI.abi;

export const Mypage = () => {
  const [contract, setContract] = useState<any>(null);
  const [mappingInfos, setMappingInfos] = useState<string | null>(null);
  const [mappingIds, setMappingIds] = useState<string | null>(null);
  const [cardInfos, setCardInfos] = useState<CardObject[]>([]);
  const [cardIds, setCardIds] = useState<string[]>([""]);

  const provider = new ethers.providers.JsonRpcProvider(
    constants.SeopoliaRPCUrl
  );

  const getCardInfosData = async () => {
    // 스마트 계약 함수 호출 및 결과 업데이트
    let hyojaeNFTFactory = new ethers.Contract(
      constants.ContractAddress,
      abi,
      provider
    );
    setContract(hyojaeNFTFactory);
    console.log("hi", hyojaeNFTFactory);
    try {
      cardIds.map(async (id) => {
        const result = await hyojaeNFTFactory.getCardInfos(id);
        console.log(result);
        let newarray = result.toString().split(",");
        let newObject: CardObject = {
          name: newarray[0],
          age: newarray[1],
          email: newarray[2],
          website: newarray[3],
          gender: newarray[4],
        };
        setCardInfos((cardInfos) => [...cardInfos, newObject]);

        console.log("cardIds : ", cardIds);
        console.log("cardInfos : ", cardInfos);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTokenIdsData = async () => {
    // 스마트 계약 함수 호출 및 결과 업데이트
    let hyojaeNFTFactory = new ethers.Contract(
      constants.ContractAddress,
      abi,
      provider
    );
    setContract(hyojaeNFTFactory);
    console.log("hi", hyojaeNFTFactory);
    try {
      const result = await hyojaeNFTFactory.getTokenIds(
        "0xa37c2bf8CFdC769983E098FCd29Eb4C67f5D86A1"
      );
      console.log(result);
      setCardIds(result.toString().split(","));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        {/* <div>
          <p>Mapping Infos: {mappingInfos}</p>
          <p>Mapping Ids: {cardIds}</p>
        </div> */}
        <Container>
          <p>name</p>
          <p>age</p>
          <p>email</p>
          <p>website</p>
          <p>gender</p>
        </Container>
        {cardInfos.map((info: CardObject) => (
          <Container>
            <p>{info.name}</p>
            <p>{info.age}</p>
            <p>{info.email}</p>
            <p>{info.website}</p>
            <p>{info.gender}</p>
          </Container>
        ))}
        <Container>
          <button style={{ margin: "3rem" }} onClick={() => getTokenIdsData()}>
            getTokenIds{" "}
          </button>
          <button onClick={() => getCardInfosData()}>getCardInfos </button>
        </Container>
      </div>
    </>
  );
};
