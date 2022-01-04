import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function WritePost() {
  const navigate = useNavigate();

  const Main = () => {
    navigate("/");
  };

  return (
    <S.WriteDiv>
      <S.WritePost>
        <S.TitleInput placeholder="제목을 입력해주세요" />
        <S.TextInput placeholder="내용을 입력해주세요" />
        <S.Submit onClick={Main} type="button" value="제출" />
      </S.WritePost>
    </S.WriteDiv>
  );
}

export default WritePost;
