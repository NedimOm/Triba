var koigra=false;
var prviIgrac=true;
var kliknuti = [];
var koordinateKrugova = [];
var trouglovi = [];
var kraj=false;
var c = document.getElementById("platno");
ctx = c.getContext("2d");
var ploca=0;



function iscrtaj(){
    prviIgrac=!prviIgrac;
    koigra=prviIgrac;
    document.body.style.background = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    ploca=1;
    ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(35,50);
        ctx.lineTo(35,370);
        if(koigra){
            ctx.strokeStyle = 'red';
        }
        else{
            ctx.strokeStyle = 'blue';   
        }
        ctx.moveTo(745,50);
        ctx.lineTo(745,370);
        ctx.stroke();
        ctx.lineWidth=1.5;

    wh=parseInt(600/10);
    console.log(wh);
    koordinateKrugova=[];
    trouglovi = [];
    for (let i = 1; i<13; i++) {
        for (let j = 1; j<7; j++) {
            ctx.beginPath();
            ctx.arc(i*wh,j*wh, 10, 0, 2 * Math.PI);
            koordinateKrugova.push({x: i*wh, y: j*wh});
            ctx.fillStyle = "gray";
            ctx.fill();
        }
    }  
}

function iscrtaj2(){
    prviIgrac=!prviIgrac;
    koigra=prviIgrac;
    document.body.style.background = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    ploca=2;
    ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(5,50);
        ctx.lineTo(5,490);
        if(koigra){
            ctx.strokeStyle = 'red';
        }
        else{
            ctx.strokeStyle = 'blue';   
        }
        ctx.moveTo(655,50);
        ctx.lineTo(655,490);
        ctx.stroke();
        ctx.lineWidth=1.5;
    wh=parseInt(600/10);
    console.log(wh);
    koordinateKrugova=[];
    trouglovi = [];
    for (let i = 1; i<11; i++) {
        for (let j = 1; j<9; j++) {
            ctx.beginPath();
            ctx.arc(i*wh,j*wh, 10, 0, 2 * Math.PI);
            koordinateKrugova.push({x: i*wh, y: j*wh});
            ctx.fillStyle = "gray";
            ctx.fill();
        }
    }
}

function iscrtaj3(){
    prviIgrac=!prviIgrac;
    koigra=prviIgrac;
    document.body.style.background = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    ploca=3;
    ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(5,45);
        ctx.lineTo(5,450);
        if(koigra){
            ctx.strokeStyle = 'red';
        }
        else{
            ctx.strokeStyle = 'blue';   
        }
        ctx.moveTo(710,45);
        ctx.lineTo(710,450);
        ctx.stroke();
        ctx.lineWidth=1.5;
    wh=parseInt(550/10);
    console.log(wh);
    koordinateKrugova=[];
    trouglovi = [];
    for (let i = 1; i<13; i++) {
        for (let j = 1; j<9; j++) {
            ctx.beginPath();
            ctx.arc(i*wh,j*wh, 10, 0, 2 * Math.PI);
            koordinateKrugova.push({x: i*wh, y: j*wh});
            ctx.fillStyle = "gray";
            ctx.fill();
        }
    }
}

function iscrtajNestandardni(){
    prviIgrac=!prviIgrac;
    koigra=prviIgrac;
    document.body.style.background = "black";
    ctx.clearRect(0, 0, c.width, c.height);
    ploca=4;
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(5,50);
        ctx.lineTo(5,520);
        if(koigra){
            ctx.strokeStyle = 'red';
        }
        else{
            ctx.strokeStyle = 'blue';   
        }
        ctx.moveTo(640,50);
        ctx.lineTo(640,520);
        ctx.stroke();
        ctx.lineWidth=1.5;

    wh=759/12;
    koordinateKrugova=[];
    trouglovi = [];
    for(i=1; i<=10; i++){ 
            for(j=1; j<=8; j++){
                if(i%4==3 || i%3==2 || i%2==1 && j%5==0){
                    ctx.beginPath();
                    ctx.arc(i*wh,j*wh, 10, 0, 2 * Math.PI);
                    koordinateKrugova.push({x: i*wh, y: j*wh});
                    ctx.fillStyle = "gray";
                    ctx.fill();
                }
            }

        }
}


function bojenjeKrugova() {

      for(let i=0;i<koordinateKrugova.length;i++){
          var A = koordinateKrugova[i].x - kliknuti[0].x;
          var B = koordinateKrugova[i].y - kliknuti[0].y;
          var C = kliknuti[1].x - kliknuti[0].x;
          var D = kliknuti[1].y - kliknuti[0].y;

          var dot = A * C + B * D;
          var len_sq = C * C + D * D;
          var param = -1;
          if (len_sq != 0) //in case of 0 length line
              param = dot / len_sq;

          var xx, yy;

          if (param < 0) {
            xx = kliknuti[0].x;
            yy = kliknuti[0].y;
          }
          else if (param > 1) {
            xx = kliknuti[1].x;
            yy = kliknuti[1].y;
          }
          else {
            xx = kliknuti[0].x + param * C;
            yy = kliknuti[0].y + param * D;
          }

          var dx = koordinateKrugova[i].x - xx;
          var dy = koordinateKrugova[i].y - yy;
          if(Math.sqrt(dx * dx + dy * dy)<=10){
            ctx.beginPath();
            ctx.arc(koordinateKrugova[i].x, koordinateKrugova[i].y, 10, 0, 2 * Math.PI);
            if(koigra)
                ctx.fillStyle = "cyan";
            else ctx.fillStyle = "orange";
            ctx.fill(); 
          }


          var A = koordinateKrugova[i].x - kliknuti[1].x;
          var B = koordinateKrugova[i].y - kliknuti[1].y;
          var C = kliknuti[2].x - kliknuti[1].x;
          var D = kliknuti[2].y - kliknuti[1].y;

          var dot = A * C + B * D;
          var len_sq = C * C + D * D;
          var param = -1;
          if (len_sq != 0) //in case of 0 length line
              param = dot / len_sq;

          var xx, yy;

          if (param < 0) {
            xx = kliknuti[1].x;
            yy = kliknuti[1].y;
          }
          else if (param > 1) {
            xx = kliknuti[2].x;
            yy = kliknuti[2].y;
          }
          else {
            xx = kliknuti[1].x + param * C;
            yy = kliknuti[1].y + param * D;
          }

          var dx = koordinateKrugova[i].x - xx;
          var dy = koordinateKrugova[i].y - yy;
          if(Math.sqrt(dx * dx + dy * dy)<=10){
            ctx.beginPath();
            ctx.arc(koordinateKrugova[i].x, koordinateKrugova[i].y, 10, 0, 2 * Math.PI);
            if(koigra)
                ctx.fillStyle = "cyan";
            else ctx.fillStyle = "orange";
            ctx.fill(); 
          }


          var A = koordinateKrugova[i].x - kliknuti[0].x;
          var B = koordinateKrugova[i].y - kliknuti[0].y;
          var C = kliknuti[2].x - kliknuti[0].x;
          var D = kliknuti[2].y - kliknuti[0].y;

          var dot = A * C + B * D;
          var len_sq = C * C + D * D;
          var param = -1;
          if (len_sq != 0) //in case of 0 length line
              param = dot / len_sq;

          var xx, yy;

          if (param < 0) {
            xx = kliknuti[0].x;
            yy = kliknuti[0].y;
          }
          else if (param > 1) {
            xx = kliknuti[2].x;
            yy = kliknuti[2].y;
          }
          else {
            xx = kliknuti[0].x + param * C;
            yy = kliknuti[0].y + param * D;
          }

          var dx = koordinateKrugova[i].x - xx;
          var dy = koordinateKrugova[i].y - yy;
          if(Math.sqrt(dx * dx + dy * dy)<=10){
            ctx.beginPath();
            ctx.arc(koordinateKrugova[i].x, koordinateKrugova[i].y, 10, 0, 2 * Math.PI);
            if(koigra)
                ctx.fillStyle = "cyan";
            else ctx.fillStyle = "orange";
            ctx.fill(); 
          }

       }

            for(let i=0;i<kliknuti.length;i++){
                ctx.beginPath();
                ctx.arc(kliknuti[i].x, kliknuti[i].y, 10, 0, 2 * Math.PI);
                if(koigra)
                    ctx.fillStyle = "blue";
                else ctx.fillStyle = "red";
                ctx.fill();
            }


}


function iscrtajTrouglove(){
    let pomocna = koigra;
    for(let i=0;i<trouglovi.length;i++){
            if(trouglovi.length%2==0)
                koigra = !koigra;
            ctx.beginPath();
            ctx.moveTo(trouglovi[i][0].x, trouglovi[i][0].y);
            ctx.lineTo(trouglovi[i][1].x, trouglovi[i][1].y);
            ctx.lineTo(trouglovi[i][2].x, trouglovi[i][2].y);
            ctx.lineTo(trouglovi[i][0].x, trouglovi[i][0].y);
            if(koigra)
                ctx.strokeStyle = "blue";
            else ctx.strokeStyle = "red";
            ctx.stroke();
            if(trouglovi.length%2!=0)
                koigra = !koigra;
    }
    koigra = pomocna;
}

function ponistiKrugove(){
    for(let i=0;i<kliknuti.length;i++){
            ctx.beginPath();
            ctx.arc(kliknuti[i].x, kliknuti[i].y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = "gray";
            ctx.fill();
        }
}

function nedozvoljenPotez(x,y){
    for(let i=0; i<trouglovi.length;i++){
        for(let j=0;j<trouglovi[i].length;j++){
            if(x==trouglovi[i][j].x && y==trouglovi[i][j].y){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Nedozvoljen potez!");
                return true;
            }
        }
    }
    return false;
}

function crtaj() {
        bojenjeKrugova();
        ctx.beginPath();
        ctx.moveTo(kliknuti[0].x, kliknuti[0].y);
        ctx.lineTo(kliknuti[1].x, kliknuti[1].y);
        ctx.lineTo(kliknuti[2].x, kliknuti[2].y);
        ctx.lineTo(kliknuti[0].x, kliknuti[0].y);
        if(koigra)
            ctx.strokeStyle = "blue";
        else ctx.strokeStyle = "red";
        ctx.stroke();

        if(daLiJeKraj()) 
            kraj=true;

}

function ispravanTrougao(x,y,z){

    let d1=Math.sqrt( ( (y.x - x.x) * (y.x - x.x) ) + ( (y.y - x.y) * (y.y - x.y)));

    let d2=Math.sqrt( ( (z.x - y.x) * (z.x - y.x) ) + ( (z.y - y.y) * (z.y - y.y)));

    
    let d3=Math.sqrt( ( (z.x - x.x) * (z.x - x.x) ) + ( (z.y - x.y) * (z.y - x.y)));


    let s = ((d1+d2+d3) / 2);

    let p = Math.sqrt(s*(s-d1)*(s-d2)*(s-d3));

    if(p==0) {
        ponistiKrugove();
        iscrtajTrouglove();
        alert("Niste nacrtali trougao!");
        return false;
    }
    return true;

}

function ispravanTrougao2(A, B, C){

    let d1=Math.sqrt( ( (B.x - A.x) * (B.x - A.x) ) + ( (B.y - A.y) * (B.y - A.y)));

    let d2=Math.sqrt( ( (C.x - B.x) * (C.x - B.x) ) + ( (C.y - B.y) * (C.y - B.y)));

    
    let d3=Math.sqrt( ( (C.x - A.x) * (C.x - A.x) ) + ( (C.y - A.y) * (C.y - A.y)));
    let s = ((d1+d2+d3) / 2);

    let p = Math.sqrt(s*(s-d1)*(s-d2)*(s-d3));

    if(p==0)
        return false;
    return true;

}


function presjekStranica(x1, y1, x2, y2, x3, y3, x4, y4){
    s1_x=x2-x1;
    s2_x=x4-x3;

    s1_y=y2-y1;
    s2_y=y4-y3;

    nazivnik = ((-s2_x * s1_y) + (s1_x * s2_y));

    s=((-s1_y * (x1-x3)) + ((s1_x * (y1-y3)))) / nazivnik;
    t=((s2_x * (y1 - y3)) - ((s2_y * (x1-x3)))) / nazivnik;

    if(s>=0 && s<=1 && t>=0 && t<=1)
        return true;
    return false;
}

function daLiSeSijeku(A, B, C){
    for(let i=0;i<trouglovi.length;i++){
            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y))
                return true;

            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y))
                return true;

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y))
                return true;

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y))
                return true;

    }
    return false;
}

function daLiSeSijeku2(A, B, C){
    for(let i=0;i<trouglovi.length;i++){
            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(A.x, A.y, B.x, B.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(A.x, A.y, C.x, C.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][1].x, trouglovi[i][1].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][0].x, trouglovi[i][0].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

            if(presjekStranica(B.x, B.y, C.x, C.y, trouglovi[i][1].x, trouglovi[i][1].y, trouglovi[i][2].x, trouglovi[i][2].y)){
                ponistiKrugove();
                iscrtajTrouglove();
                alert("Ne mozete nacrtati trougao da se sijece s drugim!");
                return true;
            }

    }
    return false;
}



function daLiJeKraj(){

    for(let i=0;i<koordinateKrugova.length;i++){
        for(let j=i+1;j<koordinateKrugova.length;j++){
            for(let k=j+1;k<koordinateKrugova.length;k++){
                for(let f=0;f<trouglovi.length;f++){
                    if( koordinateKrugova[i] == trouglovi[f][0] || koordinateKrugova[i] == trouglovi[f][1] || koordinateKrugova[i] == trouglovi[f][2] || koordinateKrugova[j] == trouglovi[f][0] || koordinateKrugova[j] == trouglovi[f][1] || koordinateKrugova[j] == trouglovi[f][2] || 
                        koordinateKrugova[k] == trouglovi[f][0] || koordinateKrugova[k] == trouglovi[f][1] || koordinateKrugova[k] == trouglovi[f][2] ){
                        continue;
                    }
                    else{
                        if(!daLiSeSijeku(koordinateKrugova[i], koordinateKrugova[j], koordinateKrugova[k]) && ispravanTrougao2(koordinateKrugova[i], koordinateKrugova[j], koordinateKrugova[k])){
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}

c.addEventListener('click', function(event) {
    var element = c.getBoundingClientRect();
    scaleX = c.width / element.width;
    scaleY = c.height / element.height;

    var x = (event.pageX * scaleX - element.left * scaleX);
    var y = (event.pageY * scaleY - element.top * scaleY );

    if(x<280) x-=9;
    else if(x>500) x+=4

    console.log(element.width,element.top,element.left,element.height )

    for(let i=0; i<koordinateKrugova.length; i++){
        let dx = x - koordinateKrugova[i].x;
        let dy = y - koordinateKrugova[i].y;
        if((dx * dx) + (dy * dy) < (10 * 10)){
            if(!nedozvoljenPotez(koordinateKrugova[i].x,koordinateKrugova[i].y)){
                ctx.beginPath();
                ctx.arc(koordinateKrugova[i].x, koordinateKrugova[i].y, 10, 0, 2 * Math.PI);
                if(koigra)
                    ctx.fillStyle = "red";
                else ctx.fillStyle = "blue";
                ctx.fill();
                kliknuti.push({
                    x:  koordinateKrugova[i].x,
                    y:  koordinateKrugova[i].y
                });
            }
        }
    }

    if(kliknuti.length == 3){
        if(ispravanTrougao(kliknuti[0], kliknuti[1], kliknuti[2]) && !daLiSeSijeku2(kliknuti[0], kliknuti[1], kliknuti[2])){
            trouglovi.push(kliknuti);
            koigra = !koigra;
            crtaj();   
        }
        if(kraj){
            if(koigra){
                document.getElementById('exampleModalLabel').innerHTML = 'Ukoliko želite nastaviti igrati, odaberite ploču:';
                document.getElementById('pobjeda').innerHTML = '<div class="alert alert-primary centriranje" role="alert">Plavi igrač je pobjednik!</div>';
            }
            else{
                document.getElementById('exampleModalLabel').innerHTML = 'Ukoliko želite nastaviti igrati, odaberite ploču:';
                document.getElementById('pobjeda').innerHTML = '<div class="alert alert-danger centriranje" role="alert">Crveni igrač je pobjednik!</div>';
            }
            kraj=false;
            var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
            myModal.show();
        }
        if(ploca==1){
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(35,50);
            ctx.lineTo(35,370);
            if(koigra){
                ctx.strokeStyle = 'red';
            }
            else{
                ctx.strokeStyle = 'blue';   
            }
            ctx.moveTo(745,50);
            ctx.lineTo(745,370);
            ctx.stroke();
            ctx.lineWidth=1.5;
        }
        else if(ploca==3){
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(5,45);
            ctx.lineTo(5,450);
            if(koigra){
                ctx.strokeStyle = 'red';
            }
            else{
                ctx.strokeStyle = 'blue';   
            }
            ctx.moveTo(710,45);
            ctx.lineTo(710,450);
            ctx.stroke();
            ctx.lineWidth=1.5;
        }
        else if(ploca==2){
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(5,50);
            ctx.lineTo(5,490);
            if(koigra){
                ctx.strokeStyle = 'red';
            }
            else{
                ctx.strokeStyle = 'blue';   
            }
            ctx.moveTo(655,50);
            ctx.lineTo(655,490);
            ctx.stroke();
            ctx.lineWidth=1.5;
        }
        else{
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(5,50);
            ctx.lineTo(5,520);
            if(koigra){
                ctx.strokeStyle = 'red';
            }
            else{
                ctx.strokeStyle = 'blue';   
            }
            ctx.moveTo(640,50);
            ctx.lineTo(640,520);
            ctx.stroke();
            ctx.lineWidth=1.5;
        }
        kliknuti=[];
    }
});
