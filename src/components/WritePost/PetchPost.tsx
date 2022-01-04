import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function PetchPost() {
  const navigate = useNavigate();

  const Main = () => {
    navigate("/");
  };

  return (
    <S.PetchDiv>
      <S.PetchPost>
        <S.TitleInput />
        <S.TextInput />
        <S.Submit onClick={Main} type="button" value="수정" />
      </S.PetchPost>
    </S.PetchDiv>
  );
}

export default PetchPost;
