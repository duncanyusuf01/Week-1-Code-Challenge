const button=document.getElementById('button1');
button.addEventListener('click', function(){
    const value1=document.getElementById('marks_input');
    const numValue=parseInt(value1.value);
    let grade='D';

    if(numValue>80){
        grade='A';
    } else if(numValue>=60){
        grade='B';
    } else if(numValue>=49){
        grade='C';
    } /*else if(numValue<=49){
        grade='D'
    }*/

    document.getElementById('grade').innerText=`GRADE: ${grade}`;
});


const key=document.getElementById('get_speed');
key.addEventListener('click', function(){
    let speed = parseInt(document.getElementById('speed_input').value);
    let speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed < speedLimit) {
        document.getElementById('speeding_outcome').innerText = "Ok";
        return;
    }
    
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    if (demeritPoints > 12) {
        document.getElementById('speeding_outcome').innerText = "License suspended";
    } else {
        document.getElementById('speeding_outcome').innerText = `Points: ${demeritPoints}`;
    }
})
