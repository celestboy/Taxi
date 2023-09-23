perso_name = prompt("Quel est le nom de votre personnage ?")
perso_sanity = 10

musiques = ["anissa", "petit poney", "gigachad theme", "despacito", "baby shark"]

feux_rouges = 30
nb_taxi = 0



while (feux_rouges > 0 && perso_sanity > 0) {
    musique_actuelle = Math.floor(Math.random() * 5);

    if (feux_rouges > 0 && perso_sanity > 0) {
        if (musique_actuelle == 0) {
            perso_sanity--
            nb_taxi++
            console.log('"' + musiques[musique_actuelle] + '", il te reste ' + perso_sanity + " de santé mentale, tu en es à ton " + nb_taxi + "e taxi.")

            
            feux_rouges--
            console.log("ça avance, il te reste " + feux_rouges + " feux rouges.")
        }
        else {
            feux_rouges--
            console.log('"' + musiques[musique_actuelle] + '", il te reste ' + feux_rouges + " feux rouges.")

        }


        if (feux_rouges == 0) {
            alert(perso_name + " a réussi à rentrer chez lui en bonne santé, félicitations ! \n \n PS: Il lui restait " + perso_sanity + " de sanity.")
        }
        if (perso_sanity == 0) {
            alert(perso_name + " a malheureusement beaucoup trop écouté Wejdene et a fait une overdose... \n Tu en était pourtant qu'à " + feux_rouges + " feux rouges de chez toi !..")
        }
    }
}