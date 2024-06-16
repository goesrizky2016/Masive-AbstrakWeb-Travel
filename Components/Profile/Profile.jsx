import React, { useState, useEffect } from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileSection() {
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Load saved profile data from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setFirstName(savedProfile.firstName);
      setLastName(savedProfile.lastName);
      setEmail(savedProfile.email);
      setGender(savedProfile.gender);
      setProfileImage(savedProfile.profileImage);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSelectGender = (eventKey) => {
    setGender(eventKey);
  };

  const handleSave = async () => {
    setMsg("");

    if (!selectedFile || !firstName || !lastName || !email || !gender) {
      setMsg("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("userId", 1); // Replace with the actual userId
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("gender", gender);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();

      if (data.status === "Success") {
        setMsg("Profile updated successfully!");
        // Save profile data to localStorage
        const profile = {
          firstName,
          lastName,
          email,
          gender,
          profileImage: URL.createObjectURL(selectedFile),
        };
        localStorage.setItem("profile", JSON.stringify(profile));
        toast.success("Data telah disimpan dengan sukses!"); // Show toast notification on success
      } else {
        setMsg("Failed to update profile.");
        toast.error("Gagal memperbarui profil."); // Show toast notification on failure
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setMsg("Error uploading image.");
      toast.error("Terjadi kesalahan saat mengunggah gambar."); // Show toast notification on error
    }
  };

  return (
    <div className="profile-form">
      <Container className="h-100 d-flex align-items-center justify-content-center text-light">
        <div className="wrapper">
          <div className="wrapper3-bayar">
            <Link to="/dasboard">
              <Button className="back-button2">
                <FontAwesomeIcon icon={faArrowLeft} className="text-color1" />
              </Button>
            </Link>
            <h4 className="pesan-paket-title fw-semibold">Akun Saya</h4>
            <form>
              <div className="profile-image-container">
                <img src={profileImage || "https://via.placeholder.com/100"} alt="Profile" className="profile-image" />
              </div>
              <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
              <Button className="button4" variant="primary" onClick={handleFileClick}>
                Pilih Foto
              </Button>
              <p className="has-text-centered"></p>
              <h4 className="form-title-profile1 text-white">Nama Depan</h4>
              <div className="input-box-profile-group">
                <input className="input-box-profile1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <h4 className="form-title-profile2 text-white">Nama Belakang</h4>
              <div className="input-box-profile-group">
                <input className="input-box-profile2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <h4 className="form-title-profile3 text-white">Email</h4>
              <div className="input-box-profile-group">
                <input className="input-box-profile3" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <h4 className="form-title-profile4 text-white">Jenis Kelamin</h4>
              <div className="input-box-profile-group">
                <Dropdown onSelect={handleSelectGender}>
                  <Dropdown.Toggle variant="primary" className="dropdown-toggle-custom">
                    {gender || "Pilih Jenis Kelamin"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Laki-laki" className="dropdown-item-custom">
                      Laki-laki
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Perempuan" className="dropdown-item-custom">
                      Perempuan
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button className="button1" variant="primary" onClick={handleSave}>
                Simpan
              </Button>
              {msg && <p className="message">{msg}</p>}
            </form>
          </div>
        </div>
      </Container>

      {/* Toast Container for showing toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default ProfileSection;
