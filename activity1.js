score=0;
function update()
{
    score=score+1;
    document.getElementById("score").innerHTML=score;
}
function save()
{
    localStorage.setItem("score",score);

}