import "./Main.css";

import MainImage from "../../assets/main-photo.jpg";

function Main() {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${MainImage})`,
        backgroundPosition: "no-repeat",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main__content">
        <h1 className="main__title">Save Recipes To Your Personal Folder</h1>
        <p className="main__description">
          {" "}
          Link to Google Docs, Social Posts, or Websites
        </p>
        <form className="upload-container">
          <input
            type="url"
            className="upload-bar"
            id="url-input"
            placeholder="Input URL"
          />
          <button type="submit" className="upload-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
