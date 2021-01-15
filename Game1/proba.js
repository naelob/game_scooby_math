var i = 0;
var tableau = [];

document.getElementById("envoyer-1").addEventListener("click", function () {
    var taille = document.getElementById("taille").value;
    document.getElementById("envoyer-2").addEventListener("click", function () {
        if (i < taille) {
            var chiffre = document.getElementById("tab").value;
            tableau.push(chiffre);
            i++;
        } else {
            console.log(tableau);
            document.getElementById("envoyer-2").value = "Generate!";
            document.getElementById("envoyer-2").addEventListener("mouseover", function () {
                document.getElementById("moyenne").textContent = moyenne(tableau);
                document.getElementById("variance").textContent = variance(tableau);
                document.getElementById("ecart-type").textContent = ecartType(tableau);
            });

        }


    });
});
document.getElementById("reset-1").addEventListener('click', function () {
    document.location.reload(true);
});
document.getElementById("reset-2").addEventListener('click', function () {
    document.location.reload(true);
});

function moyenne(tableau) {
    var sum = 0;
    for (var j = 0; j < tableau.length; j++) {
        sum += parseInt(tableau[j]);
    }
    var b = sum / tableau.length;
    return b;
}

function variance(tableau) {
    var moy = moyenne(tableau);
    var calcul = 0;
    for (var j = 0; j < tableau.length; j++) {
        calcul += (parseInt(tableau[j]) - moy) * (parseInt(tableau[j]) - moy);
    }
    return calcul / tableau.length;
}

function ecartType(tableau) {
    var a = variance(tableau);
    return Math.sqrt(a);
}
