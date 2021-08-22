dbRef = firebase.database();

// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
  this.question = que;
  this.opt1 = o1;
  this.opt2 = o2;
  this.opt3 = o3;
  this.opt4 = o4;
  this.answer = ans;
  this.asked = d;
}

var ques;
var q1;
var arr = [];
// Question 1

dbRef.ref("/Questions").on("child_added", (snap) => {
  let ques = snap.val();
  console.log(ques);
  arr.push(ques);
});
setTimeout(function () {
  q1 = new CQuiz(
    arr[0].Ques,
    arr[0].o1,
    arr[0].o2,
    arr[0].o3,
    arr[0].o4,
    arr[0].ans,
    0
  );
}, 9000);

// Question 2
var q2;

setTimeout(function () {
  q2 = new CQuiz(
    arr[1].Ques,
    arr[1].o1,
    arr[1].o2,
    arr[1].o3,
    arr[1].o4,
    arr[1].ans,
    0
  );
}, 9000);

// Question 3
var q3;

setTimeout(function () {
  q3 = new CQuiz(
    arr[2].Ques,
    arr[2].o1,
    arr[2].o2,
    arr[2].o3,
    arr[2].o4,
    arr[2].ans,
    0
  );
}, 9000);
// Question 4
var q4;

setTimeout(function () {
  q4 = new CQuiz(
    arr[3].Ques,
    arr[3].o1,
    arr[3].o2,
    arr[3].o3,
    arr[3].o4,
    arr[3].ans,
    0
  );
}, 9000);

// Question 5
var q5;

setTimeout(function () {
  q5 = new CQuiz(
    arr[4].Ques,
    arr[4].o1,
    arr[4].o2,
    arr[4].o3,
    arr[4].o4,
    arr[4].ans,
    0
  );
}, 9000);

// Question 6

var q6;

setTimeout(function () {
  q6 = new CQuiz(
    arr[5].Ques,
    arr[5].o1,
    arr[5].o2,
    arr[5].o3,
    arr[5].o4,
    arr[5].ans,
    0
  );
}, 9000);

// Question 7
var q7;

setTimeout(function () {
  q7 = new CQuiz(
    arr[6].Ques,
    arr[6].o1,
    arr[6].o2,
    arr[6].o3,
    arr[6].o4,
    arr[6].ans,
    0
  );
}, 9000);

// Question 8
var q8;

setTimeout(function () {
  q8 = new CQuiz(
    arr[7].Ques,
    arr[7].o1,
    arr[7].o2,
    arr[7].o3,
    arr[7].o4,
    arr[7].ans,
    0
  );
}, 9000);

// Question 9
var q9;

setTimeout(function () {
  q9 = new CQuiz(
    arr[8].Ques,
    arr[8].o1,
    arr[8].o2,
    arr[8].o3,
    arr[8].o4,
    arr[8].ans,
    0
  );
}, 9000);

// Question 10
var q10;

setTimeout(function () {
  q10 = new CQuiz(
    arr[9].Ques,
    arr[9].o1,
    arr[9].o2,
    arr[9].o3,
    arr[9].o4,
    arr[9].ans,
    0
  );
}, 9000);

// total question...
var totQ;
setTimeout(function () {
  totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
  console.log(totQ[9]);
}, 10000);