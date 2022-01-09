import React from "react";

//名称で渡されたものはpropsという引数を設定して受け取る。
export const ColorfulMessage = (props) => {
  //親のコンポーネントが再レンダリングされるとこのconsoleも実行される
  // console.log("カラフル");
  const { color, children } = props; //分割代入を使うことでいちいち「props.」を使わなくて住む
  console.log(props);
  const contentStyle = {
    // color: "blue",
    // color: color,
    //color: props.color,
    color,
    fontSize: "20px"
  };
  // return <p style={contentStyle}>{props.message}</p>;
  //コンポーネントをタグで囲って、その中身をchildrenで拾う
  return <p style={contentStyle}>{children}</p>;
  //props.messageはjsなので{}で囲む必要がある
};

//exportはdefaultを使うより関数の前につけるのがいい
// export default ColorfulMessage;
