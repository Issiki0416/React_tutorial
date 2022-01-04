import React from "react"; //JSXを使用するだけならReactのimportは必須ではない
import ReactDom from "react-dom"; //htmlにコンポーネントを反映する必要があるのでそれを記述
import App from "./App"; //Appファイルのコンポーネントをimportする

// const App = () => {
//   //nullを返すApp関数作成
//   return (
//     //複数書くならreturn()としてその中に記述する
//     //JSX記法では一つのタグで囲わないとエラーになるので
//     //<React.Fragment>はReactのなかのFragmentを指定している
//     //もしくは<>でもいい
//     <>
//       <h1>こんちゃ</h1>
//       <p>おげんきですか</p>
//     </>
//   ); //jsの中でhtmlを書いてreturnする→JSX記法
// };

ReactDom.render(<App />, document.getElementById("root")); //ReactDomの中にあるrenderという関数を使用して実行する
