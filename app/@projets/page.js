import Link from "next/link";
import Battleship from "./battleship"
import FreeAds from "./freeads";
import Morpion from "./morpion"
import Quizz from "./my_quizz";
import Twitter from "./my_twitter";
import Puissance4 from "./puissance4";

function ProjetLayout() {

  //TODO: Add a link to the github repo of each project
  return (
    <div className="flex flex-wrap justify-evenly">
      <Link href="https://github.com/EpitechWebAcademiePromo2024/W-JSC-501-PAR-1-1-battleship-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <Battleship />
      </Link>
      <Link href="https://github.com/EpitechWebAcademiePromo2024/W-COL-501-PAR-1-1-morpion-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <Morpion />
      </Link>
      <Link href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-090-PAR-1-1-academie-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <Twitter />
      </Link>
        <Link href="https://github.com/EpitechWebAcademiePromo2024/W-PHP-502-PAR-2-2-FreeAds-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <FreeAds />
      </Link >
      <Link href="https://github.com/EpitechWebAcademiePromo2024/W-PHP-502-PAR-2-2-Quiz-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <Quizz />
      </Link >
      <Link href="https://github.com/EpitechWebAcademiePromo2024/W-JSC-501-PAR-1-1-puissance4-paul.decauchy" rel="noopener noreferrer" target="_blank">
      <Puissance4 />
      </Link >
    </div >
  )
}

export default ProjetLayout;