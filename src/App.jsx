//コンポーネントの流れ
//コンポーネントなら拡張子をjsxにするほうがいい
//コンポーネントはパスカルケースで記述する
//以下はEslintをoffにするコード
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react"; //必須入力
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // console.log("最初");//state変更時もレンダリングするので通る
  //コンポーネントないでつかうStateはこの状態を持っているとわかるように最初のところに書く
  const [num, setNum] = useState(0); //[動的に代わるnum,それを更新していくsetNum関数名]
  //表示非表示という状態をもたせたいのでStateを使う。ここではon/offなのでboolean
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //Stateの更新はsetNum関数を使用する
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //これもstateの更新。つまりfaceShowFlagを変えたい処理なのでsetFaceShowFlag関数を使う
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //useEffectは監視を分岐させたいと気に使う
    //useEffectの第2引数に空の配列や配列を取る。
    //空配列のときは読み込んだときの一回だけ通したいときに使用。表示した一回だけ通る
    //つまり[変数]とすればnumにだけ関心を持つ。変数が変わったらuseEffectの中を表示する
    // console.log("useEffect!!");
    if (0 < num) {
      //値に応じてレンダリングするかは|| &&　で簡単にできる
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //||は左がfalseのときに右を返す
      } else {
        faceShowFlag && setFaceShowFlag(false); //&&は左がtrueなら右を返す
      }
    }

    // },[]);
  }, [num]); //useEffect内でで使う変数はここに記述しないとEslintがアラートを出す

  //State:useState()関数を使う→import Reactが自動で変化する

  //スタイルをconstで定義する。それを適用させる

  // const contenLedytStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };
  return (
    //Propsについて（２パターン）
    //特定の名称をつけて渡すパターン
    //タグで囲った中身をchildrenとして渡すパターンが有る
    <>
      <h1 style={{ color: "red" }}>あ、こんちゃ</h1>
      <ColorfulMessage color="blue">おげんきですか？</ColorfulMessage>
      {/* //コンポーネントにPropsとして引数を渡している */}
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      {/* <p style={contenLedytStyle}>元気です！</p> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>顔文字ON/OFF</button>
      <p>{num}</p>
      {/* //値に応じてレンダリングするかは簡単にかける(&&) */}
      {faceShowFlag && <p>(。-ω-)zzz. . . (。ﾟωﾟ) ﾊｯ!</p>}
    </>
    //イベントを割り当てたいとき「キャメルケース」で記述していく。
    //上で関数を定義してonClickでそれを呼ぶ。{}はjsっていう意味
    //スタイルについて（２パターン）
    //{{}}外側はjsってことを意味して内側はjsのオブジェクトを表す。直接記述するとき
    //文字列みたいに囲む
    //constでスタイルを定義するやり方
  );
};

export default App; //このファイルとして他のファイルでApp関数を使用できるようにする
