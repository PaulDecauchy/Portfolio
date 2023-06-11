import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
        <div className="hero min-h-screen bg-slate-100 mt-5 mb-5 pt-5 pb-10 shadow-xl rounded-xl w-11/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-100 rounded-xl shadow-md max-w-[91%]">
          <Image src="/images/photo_pro.JPG" width={300} height={384} className="max-w-sm rounded-lg shadow-2xl" alt="Paul Decauchy de profil"/>
          <div>
            <h1 className="text-5xl font-bold">Paul Decauchy</h1>
            <h2 className="text-3xl font-bold">Web Developer</h2>
            <p className="py-6">Etudiant à la web@cademie d&apos;Epitech et futur alternant chez Ubisoft.</p>
            <Link href="#contact"><button className="btn btn-primary">Me contacter</button></Link>
          </div>
        </div>
      </div>
            )      
}

export default Hero;