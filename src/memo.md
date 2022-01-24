[忘れやすいこと]
//export は最終行で行う

//onClick={}の{}は js を書くってこと

//css は js のオブジェクトとして書いていく
//オブジェクトの変数を定義してそれを{}内に書く

//画面に反映させるための ReactDom の render 関数を利用する
// ReactDom.render(コンポーネントとしてレンダリングする値,どこに反映させるか)
// return(
// <>
// </>
// )

props で渡したいものをコンポーネントタグがあるところに書く
名前は自由に決める
<ColorfulMessage color="pink" message="元気です！" />
<ColorfulMessage color="pink">元気です</ColorfulMessage>

//名称で渡されたものは props という引数を設定して受け取る。
//props の受け取りの方は引数に props とする。
//props は json になるため,props.color などとする

export const ColorfulMessage = (props) => {
//親のコンポーネントが再レンダリングされるとこの console も実行される
// console.log("カラフル");
const { color, children } = props; //分割代入を使うことでいちいち「props.」を使わなくいい
console.log(props);
const contentStyle = {
// color: "blue",
// color: color,
//color: props.color,
color,
fontSize: "20px"
};
// return <p style={contentStyle}>{props.message}</p>;
//コンポーネントをタグで囲って、その中身を children で拾う
return <p style={contentStyle}>{children}</p>;
//props.message は js なので{}で囲む必要がある
};

//state について
//コンポーネントないでつかう State はこの状態を持っているとわかるように最初のところに書く
const [num, setNum] = useState(0);
//useState(0)の 0 は初期値
//[state の変数名,state を更新する関数名]
//[動的に代わる num,それを更新していく setNum 関数名]
//State の更新は自分で決めた関数ここでは setNum 関数を使用する
const onClickCountUp = () => {
setNum(num + 1);
};

//表示非表示という状態をもたせたいので State を使う。ここでは on/off なので boolean
　 const [faceShowFlag, setFaceShowFlag] = useState(false);
//faceShowFlag が true のときにだけ顔文字を返す
{faceShowFlag && <p>(。-ω-)zzz. . . (。ﾟ ω ﾟ) ﾊｯ!</p>}

//state が変わるとコンポーネントが再レンダリングされる
→ 画面の遷移が表される

//３のが倍数のときに顔を出す
num % 3 == 0 のとき faceShowFlag を true にする
if(num % 3 === 0){
setShowFlag(true);
}else{
setShowFlag(false);
}

//このままだと再レンダリングがいっぱいに成るエラー発生
すでに true の場合は true にしないでいい処理にする
→ 左が false のとき右をだすようにする
if(num % 3 === 0){
faceShowFlag || setShowFlag(true);
}else{
faceShowFlag && setShowFlag(false);
}

//on/off ができなくなった
→on/off の state を実行したら再レンダリングでさっきの if に入ってしまうから
→ 関心の分離を行う →useEffect を使う！！　第２引数に配列をとる
→[]配列だけだと最初の一回だけ通したい処理を書く
→[num]なら num に関心をおく

useEffect(() => {

},[num]);

//export import について
export const ColorfulMessage = (props) => {
import { ColorfulMessage } from "./components/ColorfulMessage";

→import は分割代入を行う
