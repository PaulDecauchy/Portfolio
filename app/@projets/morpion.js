import Card from "@/components/card";
import { FaCss3Alt, FaJs, FaHtml5 } from 'react-icons/fa';


function Morpion() {
    const icons = [
        <FaJs key="js"  className="text-yellow-300 text-4xl"/>,
        <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
        <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
      ];
    
    return (
    <Card title="Morpion" 
    description="Jeu du morpion." 
    image="/images/MORPIONscreenshot.png" 
    icons={icons}/>
    )
}

export default Morpion;

// import Card from "../../components/card";


// export default function Battleship() {
//     return (
//       <Card
//         title="Battleship"
//         description="Battleship is a 2-player, 1-player, and 2-player battleship game"
//         image="https://picsum.photos/200"
//       />
//     )
// }