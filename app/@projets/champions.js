import { FaGolang } from 'react-icons/fa6';
import Card from '@/components/card';

function Champions() {
  const icons = [
    <FaGolang key="golang" className="text-blue-300 text-4xl"/>,
  ];

  return (
    <Card
      title="Champions Tactics"
      description="Le projet sur lequel j'ai travaillé pour Ubisoft. Il m'a permis de consolider et d'approfondir mes connaissances en programmation de système d'information."
      image="/images/champions.png"
      icons={icons}
    />
  );
}

export default Champions;