/* eslint-disable */
import "bootstrap";
import "./style.css";
import { defaultModifiers } from "@popperjs/core/lib/popper-lite";

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let index1 = Math.floor(Math.random() * who.length);
  let index2 = Math.floor(Math.random() * who.length);
  let index3 = Math.floor(Math.random() * who.length);
  let index4 = Math.floor(Math.random() * who.length);

  return (
    who[index1] + " " + action[index2] + " " + what[index3] + " " + when[index4]
  );
};
document.querySelector("#excuse").innerHTML = excuseGenerator;
