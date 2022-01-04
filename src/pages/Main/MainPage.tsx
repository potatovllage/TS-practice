import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BASE_URL } from "../../api/export";
import axios from "axios";

function Main() {
  const [info, SetInfo] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + "/board");
  });

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
          <S.Product>
            <Link to="Show">
              <h2>제목</h2>
            </Link>
          </S.Product>
        </S.ShowBoard>
      </S.BoardDiv>
    </S.Main>
  );
}

export default Main;
