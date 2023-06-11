import Image from 'next/image';

function Hero() {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse bg-base-100 rounded-xl shadow-md">
          <Image src="/images/photo_pro.JPG" width={300} height={384} className="max-w-sm rounded-lg shadow-2xl" alt="Paul Decauchy de profil"/>
          <div>
            <h1 className="text-5xl font-bold">Paul Decauchy</h1>
            <h2 className="text-3xl font-bold">Web Developer</h2>
            <p className="py-6">Etudiant à la web@cademie d&apos;Epitech et futur alternant chez Ubisoft.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
            )      
}

export default Hero;