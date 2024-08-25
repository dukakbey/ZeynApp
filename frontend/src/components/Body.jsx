import { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/all')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the photos!', error);
      });
  }, []);

  const handleViewClick = (image) => {
    const originalImageUrl = `/api/original/${image}`; // Orijinal resim URL'si
    window.open(originalImageUrl, '_blank'); // Yeni sekmede aç
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {images.map((image, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm">
                <img
                  src={`/api/${image}`} // Küçük boyutlu veya thumbnail resim
                  className="bd-placeholder-img card-img-top"
                  alt="Thumbnail"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text">
                    anılar
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleViewClick(image)} // "View" butonuna tıklanma olayını tanımlıyoruz
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
