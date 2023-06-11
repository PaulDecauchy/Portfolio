
import { FaCss3Alt, FaJs, FaHtml5 } from 'react-icons/fa';
import Card from '@/components/card';

function Battleship() {
  const icons = [
    <FaJs key="js"  className="text-yellow-300 text-4xl"/>,
    <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
    <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
  ];

  return (
    <Card
      title="Battleship"
      description="Reprendre le code d'un jeu touché/coulé et le rendre fonctionnel."
      image="/images/Battleshipscreenshot.png"
      icons={icons}
    />
  );
}

export default Battleship;
