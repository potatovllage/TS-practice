import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function ShowPost() {
  const navigate = useNavigate();

  const Main = () => {
    navigate("/");
  };

  const Petch = () => {
    navigate("/Petch");
  };

  return (
    <S.Show>
      <S.PostDiv>
        <S.PostHead>
          <h2>제목</h2>
        </S.PostHead>
        <hr />
        <S.PostText>
          <h4>내용</h4>
        </S.PostText>
      </S.PostDiv>
      <S.PostFooter>
        <S.ReWrite onClick={Petch} type="button" value="수정" />
        <S.DeleteBtn type="button" value="삭제" />
        <S.MainBtn onClick={Main} type="button" value="main" />
      </S.PostFooter>
    </S.Show>
  );
}

export default ShowPost;
