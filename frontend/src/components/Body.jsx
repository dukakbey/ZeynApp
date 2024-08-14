import imgSrc from '../img/e1.PNG';
function Body() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* Kartlar */}
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={imgSrc} // Buraya kendi resim linkinizi koyabilirsiniz
                className="bd-placeholder-img card-img-top"
                alt="Thumbnail"
                width="100%"
                height="225"
              />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          {/* Diğer Kartlar */}
        </div>
      </div>
    </div>
  );
}

export default Body;
