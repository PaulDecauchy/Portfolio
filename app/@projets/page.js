import Battleship from "./battleship"
import FreeAds from "./freeads";
import Morpion from "./morpion"
import Quizz from "./my_quizz";
import Twitter from "./my_twitter";
import Puissance4 from "./puissance4";

function ProjetLayout() {
  return (
    <div className="flex flex-wrap justify-evenly">
      <Battleship />
      <Morpion />
      <Twitter />
      <FreeAds />
      <Quizz />
      <Puissance4 />
    </div>
  )
}

export default ProjetLayout;