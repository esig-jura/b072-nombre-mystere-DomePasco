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
console.log(tireNombre(1,100));

let nbMystere = tireNombre(1, 100);

let reponse = Number(prompt("Entrez un nombre situé entre 1 et 100"));

do {
    if (reponse < nbMystere) {
        prompt("Plus grand !")
    }
    else {
        prompt("Plus petit !")
    }

} while (reponse !== nbMystere)


