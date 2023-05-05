import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/users?search=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      if (data.length === 0) {
        toast.error("No users found!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="searchFunction">
      <h1>Search for a Football Friend</h1>
      <input
        className="searchInputForFootballFriend"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="searchButtonForFootballFriend" onClick={handleSearch}>
        Search
      </button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}
