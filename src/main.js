// const div = dom.create("<div>newDiv</div>");
// console.log(div);
// // dom.after(test, div);
// // dom.before(test, div);
// // dom.append(test, div);
// // dom.wrap(test, div);
// // let x = dom.remove(test);
// // console.log(x);

// let r = dom.empty(window.empty);
// console.log(r);

// // dom.attr(test, "title", "hi, i am frank");

// // console.log(dom.attr(test, "title"));
// dom.text(test, "你好，这是新的内容");

// console.log(dom.text(test));

// // dom.style(test, {
// //   border: "1px solid red",
// //   color: "blue",
// //   backgroundColor: "black",
// // });

// // dom.style(test, "color", "white");
// // console.log(dom.style(test, "color"));
// dom.class.add(test, "red");
// dom.class.add(test, "blue");
// dom.class.remove(test, "blue");
// console.log(dom.class.has(test, "blue"));

// const fn = () => {
//   console.log("我被点了");
// };
// dom.on(test, "click", fn);
// dom.off(test, "click", fn);

// let testDiv = dom.find("#test")[0];
// console.log(testDiv);

// let test2 = dom.find("#test2")[0];
// // console.log(dom.find(".red", test2)[0]);

// // console.log(dom.parent(test2));
// // console.log(dom.siblings(dom.find("#s1")[0]));

// const s2 = dom.find("#s1")[0];
// console.log(dom.siblings(s2));

// console.log(dom.next(s2));
// console.log(dom.previous(s2));

// const travel = dom.find("#travel")[0];
// dom.each(dom.children(travel), (n) => {
//   dom.style(n, "color", "red");
// });

// console.log(dom.index(t2));
const travel = dom.find(".red", test)[0];
console.log(travel);

dom.style(test, "color", "blue");
console.log(dom.style(test, "color"));

dom.each(dom.find("#empty>div"), (n) => {
  console.log(n);
});
