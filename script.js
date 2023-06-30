const questions=[
  {
    question:"What is Full Form of Js",
    optionA:"Javascript",
    optionB:"Java",
    optionC:"Jackson",
    optionD:"Jason",
    Answer:"Javascript"
  },
  {
    question:"How Can We Create Rounded Corners in CSS",
    optionA:"border-radius: 30px;",
    optionB:"border[round]: 30px;",
    optionC:"alpha-effect: round-corner;",
    optionD:"Jcorner-effect: round;",
    Answer:"border-radius: 30px;"
  },
  {
    question:"Which is the Markup Language",
    optionA:"Javascript",
    optionB:"Css",
    optionC:"C++",
    optionD:"HTML",
    Answer:"HTML"
  },
  {
    question:"How we add event to the HTML Elements",
    optionA:"addEventListener",
    optionB:"Event",
    optionC:"Listener",
    optionD:"addEvent",
    Answer:"addEventListener"
  }
];

const ques=document.getElementById('question');
const option=document.getElementById('option');
const res=document.getElementById('result');
const container=document.getElementById('container');
const prevb=document.getElementById('left-btn');
const nextb=document.getElementById('right-btn');
const b=document.getElementById('btn');
const btns=document.getElementById('btns');
var index=0,A,B,C,D;
var cor=0;
function display(){
    if(index<questions.length){
    ques.innerHTML=questions[index].question;
    A=questions[index].optionA;
    B=questions[index].optionB;
    C=questions[index].optionC;
    D=questions[index].optionD;
    option.innerHTML=`
        <label><input type="radio" name="option" value="${A}">${A}</label><br>
        <label><input type="radio" name="option" value="${B}">${B}</label><br>
        <label><input type="radio" name="option" value="${C}">${C}</label><br>
        <label><input type="radio" name="option" value="${D}">${D}</label><br>
    `
    }else{
        container.innerHTML=`
        <p>Your Answered ${cor}/${questions.length} Correctly</p>
        <button class="buttons" onclick="location.reload()">Reset</button>
        `
    }
  }
  function correctanswer(){
    var opt=document.getElementsByName("option"),rs;
    // console.log(opt.length);
    for(var i=0;i<opt.length;i++){
      if(opt[i].checked){
        rs=opt[i].value;
        console.log(rs);
      }
    }
    // console.log(rs);
    // console.log(questions[index].Answer);
    if(rs==questions[index].Answer){
        cor++;
    }
    index++;
    display()
}
// prevb.addEventListener('click',()=>{
//   const res=correctanswer()
//   index--;
//   if(index<0){
//     window.location.reload();
//   }else{
//     display()
//   }
// })

// nextb.addEventListener('click',()=>{
//   const res=correctanswer()
//   index++;
//   if(index>=questions.length){
//        window.location.reload();
//   }else{
//     display()
//   }
// })
// function resetquiz(){
//   index=0;
//   cor=0;
//   display()
// }

 
b.addEventListener('click',(e)=>{
  e.preventDefault()
  correctanswer()
})

display()




