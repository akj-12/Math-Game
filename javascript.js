var playing = false;
var score;
var action;
var timeremaining;

//if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    
   //if we are playing 
    if (playing == true){
        
       //reload page
        location.reload ();
        
    }
    //if we are not playing
    else {
        //change mode to playing
        playing=true;
        
        //set to score to 0
        score = 0;
        
document.getElementById("scorevalue").innerHTML=score;
        
        //show countdown box
        show("timeremaining");
        
        //countdown start
        timeremaining=60;
        
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        //hide scorecard
        hide("scoreCard");
        
          //change button reset
document.getElementById("startreset").innerHTML="Reset Game";
        //start countdown
        startCountdown();
        
        //generate new question and answer
        generateQA();
    }
    
   
}

for(i=1 ; i<5; i++){
    //clicking on answer box
document.getElementById("box"+i).onclick= function(){
    //check if we are playing 
    if(playing==true){
        //check correct answer
        if(this.innerHTML == correctAnswer){
            
            //increase the score by 1
            score++;
            
            //update the score
            document.getElementById("scorevalue").innerHTML=score;
            
            //hide wrong box shows correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //generate Q&A
            generateQA();
        }
        //if answer is wrong
        else{
            score-=0.5;
document.getElementById("scorevalue").innerHTML=score;
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
            
            //generate Q&A
            generateQA();
        }
    }


}
}


//functions

//start counter
function startCountdown(){
    action=setInterval(function(){
        timeremaining -=1 ;
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        //to stop timer to 0 sec
        if(timeremaining==0){
            stopCountdown();
            
            //when timer off show score box
           show("scoreCard");
            
            //in scorebox change the innerHTML property and updated score value
            document.getElementById("scoreCard").innerHTML="<p>Game Over!</p><p>Your Score is "+score+".</p>" ;
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game"
        }
    },1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//show function
function show(Id){
    document.getElementById(Id).style.display="block";
}

//hide function
function hide(Id){
    document.getElementById(Id).style.display="none";
}

function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctAnswer= x*y;
    
    //getting random question in question box
document.getElementById("question").innerHTML=x + "x" + y;
    
    var correctPosition =1+Math.round(3*Math.random());
    
    //fill box with correct answer
document.getElementById("box" +correctPosition).innerHTML = correctAnswer;
    
    //fill other boxes with wrong answer 
    var answer=[correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
              }while(answer.indexOf(wrongAnswer)>-1)
                
document.getElementById("box"+i).innerHTML=wrongAnswer;
            answer.push(wrongAnswer);
         }         
    }
}
    
    
