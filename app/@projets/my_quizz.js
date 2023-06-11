import Card from "@/components/card";
import { FaCss3Alt, FaPhp, FaHtml5 } from 'react-icons/fa';

function Quizz() {
    const icons = [
        <FaPhp key="php"  className="text-purple-500 text-4xl"/>,
        <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
        <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
      ];
    return (
    <Card title="my_quizz" 
    description="Site de quizz avec authentification admin & user." 
    image="/images/KwaKscreenshot.png" 
    icons={icons}/>
    )
}

export default Quizz;