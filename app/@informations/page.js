// import CSS from 'csstype';
import Collapse from "@/components/collapse";
import { FaCss3Alt, FaPhp, FaJs, FaHtml5, FaReact, FaSymfony, FaLaravel } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";

function Informations() {
    const icons = [
        <FaPhp key="php" className="text-purple-500 text-4xl" />,
        <FaJs key="js"  className="text-yellow-300 text-4xl"/>,
        <FaCss3Alt key="css" className="text-blue-500 text-4xl" />,
        <FaHtml5 key="html5" className="text-red-500 text-4xl" />,
        <FaReact key="react" className="text-blue-500 text-4xl" />,
        <FaSymfony key="symfony" className="text-black text-4xl" />,
        <FaLaravel key="laravel" className="text-red-500 text-4xl" />,
        <FaGolang key="golang" className="text-blue-300 text-4xl" />
    ];
    return (
        <div className="">
            <Collapse
                title="Experiences Professionnelles"
                content="Je travaille chez Ubisoft en tant que Backend Developer Assistant depuis septembre 2023." />
            <Collapse
                title="Langues et hobbies"
                content="Voir CV en haut a droite." />
            <Collapse
                title="Compétences"
                content=""
                icons={icons}/>


        </div>
    )
}

export default Informations;