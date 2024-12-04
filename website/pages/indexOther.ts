import { send } from "../utilities";

console.log("test");
let bm = document.getElementById("bm")!;
let b = document.getElementById("b")!;
let tea = document.getElementById("tea")!;


b.onclick = async function () {
  let num = await send("messageButton", null) as number;
   console.log(num);
   tea.innerText = num.toString();
}
bm.onclick = async function () {
  let num = await send("minusButton", null) as number;
   console.log(num);
   tea.innerText = num.toString();
}
