// This component represents the top navigation bar of the application
// It stays fixed at the top and provides basic navigation elements

function Navbar() {
  return (
    // Main navbar container
    <div style={{
      position: "sticky",   // Keeps the navbar visible while scrolling
      top: 0,
      background: "#fff",
      borderBottom: "1px solid #dbdbdb",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between", // Spaces out logo and icons
      alignItems: "center"
    }}>
      
      {/* App title styled to resemble Instagram branding */}
      <h2 style={{ margin: 0 }}>Instagram</h2>

      {/* Simple icon section for actions like add, search, and profile */}
      <div style={{ fontSize: "20px" }}>
        ➕ 🔍 👤
      </div>

    </div>
  )
}

export default Navbar;