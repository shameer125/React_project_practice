import React from "react";

const Card = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
        <h4>Hamza Malik</h4>
        <button>Add friend</button>
      </div>
      <div className="card">
        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />
        <h4>Sara Ahmad</h4>
        <button>Add friend</button>
      </div>
      <div className="card">
        <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="" />
        <h4>James Walker</h4>
        <button>Add friend</button>
      </div>
      <div className="card">
        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
        <h4>Sophia Taylor</h4>
        <button>Add friend</button>
      </div>
      <div className="card">
        <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="" />
        <h4>Ethan Miller</h4>
        <button>Add friend</button>
      </div>
    </div>
  );
};

export default Card;
