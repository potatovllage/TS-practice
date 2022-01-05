import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/export";
import axios from "axios";

function PetchPost() {
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

  const { title, description, id } = boardData;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setBoardData({
      ...boardData,
      [name]: value,
    });
  };

  const data1 = { title: title, id: id };
  const data2 = { description: description, id: id };

  const PetchSubmit = () => {
    axios
      .patch(BASE_URL + "/board/title", data1)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .patch(BASE_URL + "/board/description", data2)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  return (
    <S.PetchDiv>
      <S.PetchPost>
        <S.TitleInput
          type="text"
          name="title"
          onChange={onChange}
          defaultValue={boardData.title}
        />
        <S.TextInput
          type="text"
          name="description"
          onChange={onChange}
          defaultValue={boardData.description}
        />
        <S.Submit onClick={PetchSubmit} type="button" value="수정" />
      </S.PetchPost>
    </S.PetchDiv>
  );
}

export default PetchPost;
