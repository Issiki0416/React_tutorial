//コンポーネントの流れ
//コンポーネントなら拡張子をjsxにするほうがいい
//コンポーネントはパスカルケースで記述する
import React from "react"; //必須入力

const App = () => {
  const onClickBitton = () => alert();
  //スタイルをconstで定義する。それを適用させる
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>あ、こんちゃ</h1>
      <p style={contentStyle}>おげんきですか</p>
      <button onClick={onClickBitton}>ボタン</button>
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
