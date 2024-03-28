import { Fragment } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponenets } from "./StyledComponenets";
import { Emotion } from "./Emotion";

export const App = () => {
  const [num, setNum] = useState(5);
  // 버튼 클릭 시 실행하는 함수 정의
  const onClickButton = () => {
    setNum(num + 1);
  };
  return (
    <Fragment>
      {console.log("TEST")}
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
      <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Fragment>
        <CssModules />
      </Fragment>
      <Fragment>
        <StyledJsx />
      </Fragment>
      <Fragment>
        <StyledComponenets />
      </Fragment>
      <Fragment>
        <Emotion />
      </Fragment>
    </Fragment>
  );
  // return (
  //   <div>
  //   <h1>안녕하세요!</h1>
  //   <p>잘 지내시죠?</p>
  //   </div>
  // );
  // return (
  //   < >
  //   <h1>안녕하세요!</h1>
  //   <p>잘 지내시죠?</p>
  //   </>
  // );
};
