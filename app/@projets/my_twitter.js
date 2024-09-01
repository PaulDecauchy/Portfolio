import Card from "@/components/card";
import { FaPhp, FaCss3Alt, FaJs, FaHtml5 } from 'react-icons/fa';

function Twitter() {
    const icons = [
        <FaPhp key="php"  className="text-purple-500 text-4xl"/>,
        <FaJs key="js"  className="text-yellow-300 text-4xl"/>,
        <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
        <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
      ];
    return (
    <Card title="my_twitter" 
    description="Twitter-like qui m'a appris a travaillé en équipe." 
    image="/images/KwaKscreenshot.png" 
    icons={icons}/>
    )
}

export default Twitter;