import { useState } from "react";
export default function Homepage() {
  return (
    <div className="homepage">
      <h1 class="logo">
        👍🏻Football Friends
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          👍🏻
        </span>
      </h1>
      <div className="homepageContent">
        <div className="newUsers">
          <h2>New Football Friends</h2>
        </div>
        <div className="trendingUsers">
          <h2>Trending Football Friends</h2>
        </div>
        <div className="userLikeThis">
          <h2>Football Friends who like XXX</h2>
        </div>
        <div className="localUsers">
          <h2>Football Friends in XXX</h2>
        </div>
      </div>
    </div>
  );
}
