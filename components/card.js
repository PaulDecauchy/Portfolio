"use client";

import Image from 'next/image';

function Card({
    title,
    description,
    image,
    icons = [],
}) {
    return (
        <div className="p-1">
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure>
                    <Image src={image} width={200} height={160} className="w-full" alt="Projects" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {icons.map((icon, index) => (
                            <div key={index} >
                               {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <div className="p-1">
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10"><picture><img src={image} alt="Shoes" /></picture></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div> */}
export default Card;
