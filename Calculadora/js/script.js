function calc(){
    var vi = document.getElementById("vi").value;
    var qm = document.getElementById("qm").value;
    var ju = document.getElementById("ju").value;
    ju = (Number(ju) + 100) / 100;
    var x = 0;
    var result = new Array(qm);
    var rend;
    var i = 0; //Conta quantas vezes a funcao foi chamada

    i++;
    //se a funcao for chamada mais de 1 vez entao ele limpa as div result e result2
    if(i > 0){
       document.getElementById("result").innerHTML = " ";
       document.getElementById("result2").innerHTML = " ";
       }
    
    //Imprime os valores em cada mes
    for(x=1; x <= qm; x++){
        var montante = vi * (Math.pow(ju, x));
        var montanteA = parseFloat(montante.toFixed(2));   
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + x + "ª Mês: <font style='color: #4caf50;'>R$" + montanteA + "</font><br>";
    }
    
    rend =  montante - vi;
    var rendA = parseFloat(rend.toFixed(2)); //arredonda o valor do rendimento
    rendPorcent = ((100 * montante) / vi) - 100;
    var rendPorcentA = parseFloat(rendPorcent.toFixed(2)); //arredonda o valor do rendimento em %
    
    document.getElementById("result2").innerHTML = "Rendimento: <font style='color: #4caf50;'>R$" + rendA + "</font> - - " + rendPorcentA + "%";
}    
