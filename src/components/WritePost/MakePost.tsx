import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BASE_URL } from "../../api/export";

function WritePost() {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const { title, description } = input;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const data = { title: title, description: description };

  const navigate = useNavigate();

  const Submit = () => {
    axios
      .post(BASE_URL + "/board", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.WriteDiv>
      <S.WritePost>
        <S.TitleInput
          name="title"
          onChange={onChange}
          placeholder="제목을 입력해주세요"
        />
        <S.TextInput
          name="description"
          onChange={onChange}
          placeholder="내용을 입력해주세요"
        />
        <S.Submit onClick={Submit} type="button" value="제출" />
      </S.WritePost>
    </S.WriteDiv>
  );
}

export default WritePost;
