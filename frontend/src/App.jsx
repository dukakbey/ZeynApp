import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="d-flex flex-column w-100" style={{ maxWidth: "960px" }}>
        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">
                    Add some information about the album below, the author, or any
                    other background context. Make it a few sentences long so folks can
                    pick up some informative tidbits. Then, link them off to some social
                    networking sites or contact information.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                    <li><a href="#" className="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <strong>Album</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album example</h1>
                <p className="lead text-muted">
                  Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2">Main call to action</a>
                  <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/* İlk Kart */}
                <div className="col">
                  <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"/>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Diğer Kartlar için aynı yapıyı kullanabilirsiniz */}
              </div>
            </div>
          </div>
        </main>

        <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
