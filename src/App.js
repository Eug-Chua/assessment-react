import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListCustomerPage from "./pages/ListCustomerPage";
import AddNewCustomerPage from "./pages/AddNewCustomerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerContextData from "./CustomerContext";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NOMAD
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    All Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add New
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <CustomerContextData>
            <Route path="/" element={<ListCustomerPage />} />
            <Route path="/add" element={<AddNewCustomerPage />} />
          </CustomerContextData>
        </Routes>
      </div>
    </Router>
  );
}
