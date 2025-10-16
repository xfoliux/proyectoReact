export const CarProduct = ({producto}) => {
    return (
        <div className="col mb-4">
            <a href="detalles_producto.html?id=${producto.id}" className="text-decoration-none">
                <div className="car border-0 width-card-product">
                    <img src= {producto.image} className="card-img-top rounded-2" alt="green iguana" />
                    <div className="card-body p-0 mt-2">
                        <h5> {producto.title} </h5>
                        <div className="d-flex justify-content-between">
                            <span className="text-info">${producto.price}</span>
                            <span className="text-danger"> Reseñas {producto.rating.rate}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}