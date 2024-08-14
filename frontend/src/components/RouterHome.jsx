import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function RouterHome(){

    return(
        <div>
            <a href="/" className="badge bg-primary">Primary</a>
            <a href="/home" className="badge bg-secondary">Secondary</a>
            <a href="/photos" className="badge bg-success">Success</a>
        </div>
    )
}

export default RouterHome;