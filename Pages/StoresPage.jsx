import React, { useState } from "react";
import "./StoresPage.css";

const StoresPage = () => {
  const [stores, setStores] = useState([
    {
      id: 1,
      name: "Best Electronics Store",
      category: "Electronics",
      address: "123 Tech Avenue, Silicon Valley, CA 94102",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 2,
      name: "Coffee Corner Cafe",
      category: "Food & Beverage",
      address: "456 Bean Street, Portland, OR 97201",
      rating: 4.8,
      reviews: 157,
    },
    {
      id: 3,
      name: "Fashion Forward Boutique",
      category: "Fashion",
      address: "789 Style Boulevard, New York, NY 10001",
      rating: 4.2,
      reviews: 89,
    },
    {
      id: 4,
      name: "Green Garden Nursery",
      category: "Garden & Home",
      address: "321 Plant Road, Austin, TX 73301",
      rating: 4.6,
      reviews: 67,
    },
    {
      id: 5,
      name: "Book Haven Library",
      category: "Books & Education",
      address: "654 Reading Lane, Boston, MA 02101",
      rating: 4.4,
      reviews: 198,
    },
  ]);

  const [userRatings, setUserRatings] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [popup, setPopup] = useState("");

  const handleRating = (storeId, value) => {
    setUserRatings((prev) => ({
      ...prev,
      [storeId]: value,
    }));
    setPopup("Your rating has been submitted successfully.");
    setTimeout(() => setPopup(""), 2000);
  };

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="storespage-container">
      {/* Sidebar */}
      <aside className="storespage-sidebar">
        <h3 className="storespage-logo">Store Rating</h3>
        <ul>
          <li><a href="#">Stores</a></li>
          <li><a href="#">My Ratings</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="storespage-main">
        <h2 className="storespage-title">Browse Stores</h2>
        <p className="storespage-subtitle">
          Discover and rate stores in your area
        </p>

        {/* Search */}
        <div className="storespage-searchbox">
          <input
            type="text"
            placeholder="Find stores by name or address..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>

        {/* Store Cards */}
        <div className="storespage-grid">
          {filteredStores.map((store) => (
            <div className="storespage-card" key={store.id}>
              <h3>{store.name}</h3>
              <span className="storespage-category">{store.category}</span>
              <p className="storespage-address">📍 {store.address}</p>
              <p className="storespage-rating">
                ⭐ {store.rating} ({store.reviews} reviews)
              </p>

              <div className="storespage-user-rating">
                <p>Your Rating:</p>
                <div className="storespage-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        userRatings[store.id] >= star
                          ? "storespage-star active"
                          : "storespage-star"
                      }
                      onClick={() => handleRating(store.id, star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {userRatings[store.id] && (
                  <p className="storespage-rated">
                    Rated {userRatings[store.id]}/5
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Popup */}
      {popup && <div className="storespage-popup">{popup}</div>}
    </div>
  );
};

export default StoresPage;
