import { send } from "../utilities";

let welcomeDiv=document.querySelector("#welcomDiv")as HTMLDivElement;
if(localStorage.getItem("userId")!= null){ 
  let userName = await(send("getUserName",localStorage.getItem("userId")))as string;
  
    welcomeDiv.innerText="Welcome"+ userName +"!";
} 