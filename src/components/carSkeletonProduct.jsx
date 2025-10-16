export const CardSkeletonProduct = () => {
    return (
        <div className="col mb-4">
            <div className="card border-0 width-card-product">
                <div className="card-img-top rounded-2 bg-secondary placeholder" style={{height: 200}}></div>

                <div className="card-body p-0 mt-2">
                    <h5 className="placeholder-glow">
                        <span className="placeholder col-8"></span>
                    </h5>

                    <div className="d-flex justify-content-between">
                        <span className="placeholder col-3"></span>
                        <span className="placeholder col-4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}