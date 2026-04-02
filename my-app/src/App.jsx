// Importing the main components used in the application
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";

// Importing media files (videos) from the assets folder
import video1 from "./assets/videos/myvids.mp4";
import video2 from "./assets/videos/myvids1.mp4";

// Importing profile images for each post
import profile1 from "./assets/images/profile1.jpg";
import profile2 from "./assets/images/profile2.jpg";

function App() {

  // This array acts as a simple data source for the posts
  // Each object represents one post with its details
  const posts = [
    {
      username: "BBS",
      media: video1,
      caption: "HM the 4th Druk Gyalpo🙏",
      profile: profile1
    },
    {
      username: "fanpage",
      media: video2,
      caption: "BTS✨ the most beautiful moment in life",
      profile: profile2
    }
  ];

  return (
    // Main container for the whole application
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      
      {/* Navbar component placed at the top */}
      <Navbar />

      {/* Centering the feed on the page */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        <div>

          {/* Looping through the posts array to render each post */}
          {posts.map((post, index) => (
            <PostCard
              key={index} // Unique key for each element in the list
              username={post.username}
              media={post.media}
              caption={post.caption}
              profile={post.profile}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;