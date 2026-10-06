/* alert('Hello World!');*/

document.writeln("<h1> bem vindo</h1>");

var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var comecar = document.getElementById('comecar');

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i=0; i<=59; i++) {
    minutos.innerHTML+='<option value=" '+i+'">'+i+'<option>';
}

for(var i=0; i<=59; i++){
    segundoAtual.innerHTML+='<option value="'+i+'">'+i+'<option>';
}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

    interval=setInterval(function(){
        segundoAtual--;
        if (minutoAtual<= 0) {
            if(minutoAtual>0) {
                minutoAtual--;
                segundoAtual = 59;
        
            }
        else{
            document.getElementById("sound").play();
            alert("Deligar Alarme!");
            clearInterval(interval);
            location.reload();
        }
        
        }

        display.childnodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    }.1000);

    interval = setinterval(function())
    }
}

