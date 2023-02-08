/**
 * Jeu du nombre mystère
 * @author  Domenico Pascale
 * @version 1.0
 * @since   2032-01-08 (date de création)
 */

"use strict";
// TODO afficher les messages d'erreur en HTML et pas avec alert
// TODO panneau de config pour modifer MIN et MAX
/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let nbMystere = tireNombre(1, 100);
let nbEssai = 0;
let reponse ="";
let message ="Entrez un nombre situé entre 1 et 100";
console.log(tireNombre(1,100));

do {
    let reponse = Number(prompt(message));


    if (reponse === nbMystere) {
        if (nbEssai === 1){
            alert("Félicitations, vous avez trouvé du premier coup !");
        }
        else
        {
            alert("Félicitations, vous avez trouvé en " + nbEssai + " essais");
        }
    }
    else if (reponse < nbMystere) {
        alert("Plus grand !")
    }
    else {
        alert("Plus petit !")
    }
    nbEssai++
} while (reponse !== nbMystere)


