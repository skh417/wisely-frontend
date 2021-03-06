import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { addSelect2 } from "../../store/actions/addSelect2";
import { withRouter } from "react-router-dom";

const NextBtnBox2_1 = (props) => {
  const goTo = (path) => {
    props.history.push(path);
    props.addSelect2("1");
  };

  return (
    <NextBtnBox1Wrapper>
      <BtnTextBox>
        <p>산뜻하고 끈적임 없는 제품으로 추천해드릴게요</p>
      </BtnTextBox>
      <BtnBox onClick={() => goTo("/Survey3")}>
        <p>다음</p>
      </BtnBox>
    </NextBtnBox1Wrapper>
  );
};

export default withRouter(connect(null, { addSelect2 })(NextBtnBox2_1));

const NextBtnBox1Wrapper = styled.div`
  margin-top: 50px;
`;

const BtnTextBox = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #0055b8;
`;

const BtnBox = styled.button`
  height: 60px;
  font-weight: 400;
  font-size: 20px;
  width: 195px;
  margin-top: 50px;

  outline: none;
  cursor: pointer;
  border: 0;
  background: #0055b8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #fff;
  line-height: 59px;
  letter-spacing: -0.06em;
  /* font-family: SpoqaHanSans; */
`;
