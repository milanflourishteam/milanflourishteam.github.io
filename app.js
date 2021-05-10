
const fields = ["Mobile App Development", "React Native", "GraphQL"];
var el = 0; //Indicate how element of fields is currently select for dynamic effect (value 0 to 3) 
var flag = 0; //status: indicate the function in execution: 0 writer, 1 eraser
var job = 0; //is current job finish?
//Call function every n millisecond
setInterval(function(){ 
    var txt = fields[el];
    var i = 0;
    var l = txt.length-1;
    var speed = 50;

    if (job !=0){ return }

    function typeWriter() {
        if (i < txt.length && flag==0) {
            job = 1;
            document.getElementById("message").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else{
            flag=1;
            job = 0;
        }
    }

    //Erase text in use
    function typeEraser() {
        if (l >= 0 && flag==1) {
            job = 1;
            document.getElementById("message").textContent = txt.substring(0,l);
            l--;
            setTimeout(typeEraser, speed);
        }

        else{
            flag=0;
            job = 0;
            el = (el==3)? 0: el+1;
        }
    }

    if(flag==0){ typeWriter(); }
    else { typeEraser();}
}, 2000);
