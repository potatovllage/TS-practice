import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { BASE_URL } from "../../api/export";
import axios from "axios";

function ShowPost() {
  const param = useParams();

  const [boardData, setBoardData] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(BASE_URL + `/board/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setBoardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onDelete = () => {
    axios.delete(BASE_URL + `/board/${param.id}`).then(() => {
      navigate("/");
    });
  };

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
          <h2>{boardData.title}</h2>
        </S.PostHead>
        <hr />
        <S.PostText>
          <h4>{boardData.description}</h4>
        </S.PostText>
      </S.PostDiv>
      <S.PostFooter>
        <Link to={`/Petch/${boardData.id}`}>
          <S.ReWrite onClick={Petch} type="button" value="수정" />
        </Link>
        <S.DeleteBtn onClick={onDelete} type="button" value="삭제" />
        <S.MainBtn onClick={Main} type="button" value="main" />
      </S.PostFooter>
    </S.Show>
  );
}

export default ShowPost;
