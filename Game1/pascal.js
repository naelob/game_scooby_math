var bool = true;
document.getElementById('valider').addEventListener('click', function () {

    if (bool == true) {
        var taille = document.getElementById('infos').value;
        afficherTriangle(TrianglePascal(taille));
        bool = false;  
    }
});
document.getElementById('valider-1').addEventListener('click', function () {

    if (bool == true) {
        var taille = document.getElementById('stern').value;
        afficheStern(Stern(taille));
        bool = false;
    }
});

document.getElementById("retry").addEventListener('click', function () {
    document.location.reload(true);
});
document.getElementById("retry-1").addEventListener('click', function () {
    document.location.reload(true);
});



function TrianglePascal(taille) {

    var tab = new Array();

    for (var i = 0; i < taille; i++) {
        tab[i] = new Array();
        for (var j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                tab[i][j] = 1;
            } else {
                tab[i][j] = tab[i - 1][j - 1] + tab[i - 1][j];
            }

        }

    }
    return (tab);
}


function afficherTriangle(tab) {

    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            document.getElementById("res").innerHTML += tab[i][j] + "  ";
        }
        document.getElementById("res").innerHTML += "<br>";

    }
}



function Stern(numero) {
    var tab2 = TrianglePascal(numero+100);
    var tab3 = [];
    tab3.push(1);
    tab3.push(1);
    tab3.push(2);
    tab3.push(1);
    
    for (var j = 4; j <numero; j++) {
        var sum = 0;
        var newval = Math.trunc(j / 2);
        for (var i = 0; i < newval + 1; i++) {
            sum += (tab2[j - i][i]) % 2;

        }
        tab3.push(sum);
    }
    return tab3;
}
function afficheStern(tab){
    for(var i=0;i<tab.length;i++){
        var u = i+1;
        document.getElementById("stern-res").innerHTML+= "s"+u+"="+" "+tab[i]+",  ";
    }
}


