player1name= localStorage.getItem("player1name");
player2name= localStorage.getItem("player2name");

player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";
document.getElementById("player1score").innerHTML = player1score ;
document.getElementById("player2score").innerHTML = player2score ;
document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1name ;
document.getElementById("playeranswer").innerHTML = "Answer Turn - " + player2name ;

function send(){
    
get_word = document.getElementById("word").value;
words= get_word.toLowerCase();
    c1=words.charAt(1);
    c2=Math.floor(words.length/2);
    c2new=words.charAt(c2);
    c3=words.length-1;
    c3new=words.charAt(c3);

    r1=words.replace(c1,"_");
    r2=r1.replace(c2new,"_");
    r3=r2.replace(c3new,"_");
    question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; document.getElementById("word").value = "";
}
questionturn="player1";
answerturn="player2";
function check()
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
if(answer==words)
{
   if(answerturn=="player1")
{ 
    player1score=player1score+1;
   document.getElementById("player1score").innerHTML = player1score;
}
else  
{
    player2score=player2score+1;
    document.getElementById("player2score").innerHTML = player2score;

}
}
if(questionturn=="player1")
{
    questionturn="player2";
    document.getElementById("playerquestion").innerHTML = "Question turn-"+player2name;
}
else
{
    questionturn="player1";
    document.getElementById("playerquestion").innerHTML = "Question turn-"+player1name;
}
if(answerturn=="player1")
{
    answerturn="player2";
    document.getElementById("playeranswer").innerHTML = "Answer turn-"+player2name;
}
else
{
    answerturn="player1";
    document.getElementById("playeranswer").innerHTML = "Answer turn-"+player1name;
}
}

