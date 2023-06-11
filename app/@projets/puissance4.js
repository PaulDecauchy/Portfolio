import { FaCss3Alt, FaJs, FaHtml5 } from 'react-icons/fa';
import Card from '@/components/card';

function Puissance4() {
  const icons = [
    <FaJs key="nodejs"  className="text-yellow-300 text-4xl"/>,
    <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
    <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
  ];

  return (
    <Card
      title="Puissance 4"
      description="Coder un puissance 4 en JS."
      image="/images/Puissance4screenshot.png"
      icons={icons}
    />
  );
}

export default Puissance4;