import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BASE_URL } from "../../api/export";
import axios from "axios";

interface InfoPropsType {
  id: number;
  title: string;
  description: string;
}

function Main() {
  const [info, SetInfo] = useState<InfoPropsType[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/board")
      .then((res) => {
        console.log(res.data);
        SetInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const Write = () => {
    navigate("/Make");
  };

  return (
    <S.Main>
      <S.MainName>
        <h1>TypeScript CRUD Practice</h1>
      </S.MainName>
      <S.WriteBtnDiv>
        <S.WriteBtn onClick={Write} type="button" value="write" />
      </S.WriteBtnDiv>
      <S.BoardDiv>
        <S.ShowBoard>
          {info.map((item, index) => (
            <S.Product>
              <Link to={`/Show/${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
            </S.Product>
          ))}
        </S.ShowBoard>
      </S.BoardDiv>
    </S.Main>
  );
}

export default Main;
