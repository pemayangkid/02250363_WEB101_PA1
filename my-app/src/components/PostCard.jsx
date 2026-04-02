import { useState } from "react";

// This component represents a single post in the feed
// It receives data like username, media, caption, and profile image through props
function PostCard({ username, media, caption, profile }) {

  // useState is used here to keep track of whether the post is liked or not
  const [liked, setLiked] = useState(false);

  return (
    // Main container for each post card
    <div style={{
      border: "1px solid #dbdbdb",
      background: "#fff",
      marginBottom: "20px",
      width: "100%",
      maxWidth: "400px",   // Keeps the post responsive across devices
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "8px",
      overflow: "hidden"
    }}>

      {/* Profile Section: displays the user's profile picture and username */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "10px"
      }}>
        <img
          src={profile}
          alt={username}
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",  // Makes the image circular
            objectFit: "cover",
            marginRight: "10px"
          }}
        />
        <strong>{username}</strong>
      </div>

      {/* Media Section: checks if the media is a video or image and renders accordingly */}
      {media.endsWith(".mp4") ? (
        <video style={{ width: "100%", display: "block" }} controls>
          <source src={media} type="video/mp4" />
        </video>
      ) : (
        <img
          src={media}
          alt="post"
          style={{ width: "100%", display: "block" }}
        />
      )}

      {/* Action Section: includes like button, comment icon, and post details */}
      <div style={{ padding: "10px" }}>
        
        {/* Like button toggles between liked and unliked state */}
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          <span
            onClick={() => setLiked(!liked)} // Toggles like state when clicked
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            {liked ? "❤️" : "🤍"}
          </span>
          💬
        </div>

        {/* Displays the number of likes based on the current state */}
        <p style={{ fontWeight: "bold", margin: "5px 0" }}>
          {liked ? "1 like" : "0 likes"}
        </p>

        {/* Caption section showing username and post description */}
        <p style={{ margin: 0 }}>
          <strong>{username}</strong> {caption}
        </p>
      </div>

    </div>
  );
}

export default PostCard;