function loadingCard() {
    return (
        <div className="p-1">
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><picture>
                    {/* <img src={image} alt="Shoes" /> */}
                    </picture></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Loading</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loadingCard;