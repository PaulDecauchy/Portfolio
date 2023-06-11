import Card from "@/components/card";
import { FaCss3Alt, FaHtml5, FaPhp } from 'react-icons/fa';

function FreeAds() {
    const icons = [
        <FaPhp key="php"  className="text-purple-500 text-4xl"/>,
        <FaCss3Alt key="css" className="text-blue-500 text-4xl"/>,
        <FaHtml5 key="html5"  className="text-red-500 text-4xl"/>
      ];
    return (
    <Card title="FreeAds" 
    description="Site d'annonces publicitaires en ligne avec authentification." 
    image="/images/FREEADSscreenshot.png" 
    icons={icons}/>
    )
}

export default FreeAds;