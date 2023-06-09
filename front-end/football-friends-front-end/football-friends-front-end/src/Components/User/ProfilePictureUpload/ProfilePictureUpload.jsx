import { useState, useEffect } from "react";
import axios from "axios";


const ProfilePictureUpload = () => {
    const [uploadedImagePath, setUploadedImagePath] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // Get image path from local storage
        const localStorageImagePath = localStorage.getItem("uploadedImagePath")
        if (localStorageImagePath) {
            setUploadedImagePath(localStorageImagePath)
        }
    }, []);

        // Called when user selects a file
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

        // Called when user submits form
    const onFileUpload = async (event) => {
        event.preventDefault();
        // If they click upload without choosing a file

        if (!selectedFile) {
            alert("Select a file to upload");
            return;
        }

        // This form data object holds the file data - it's equivalent to the postman option form-data (within Body)
        const formData = new FormData();
        // profilePicture refers to the naming convention in profilePicture.js + the key name in Postman
        // selectedFile.name refers to the original file name that the user uploads
        formData.append("profilePicture", selectedFile, selectedFile.name);

        // Send the POST req with the users file data
        try {
            const response = await axios.post(
                "http://localhost:5001/uploadProfilePicture",
                // send formData object from above to the server
                formData
            );
            console.log(response.data);
            alert("Profile picture uploaded succesfully!");
            setUploadedImagePath(response.data.imagePath);

            // Saving the pic to local storage
            localStorage.setItem("uploadedImagePath", response.data.imagePath);
        } catch (err) {
            console.log(err);
            alert("Error uploading the profile picture");
        }
    };

    return (
        <div className="container mt-4">
    <h3 className="text-center">Upload your profile picture</h3>
    <form onSubmit={onFileUpload} className="d-flex flex-column align-items-center">
        <div className="mb-3">
            <input type="file" onChange={onFileChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
    </form>
    {uploadedImagePath && (
        <div className="mt-4 text-center">
            <h3>Uploaded Profile Picture:</h3>
            <img src={`http://localhost:5001/${uploadedImagePath}`} alt="Profile" className="img-thumbnail" />
        </div>
    )}
</div>

    );
};

export default ProfilePictureUpload
