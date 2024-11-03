const Header=()=>{
  return(
    <div style={{ padding:"24px 48px", boxShadow: "0px 10px 10px gray",position:"sticky",top:"0",backgroundColor:"white"}}>
      <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
      <h3>WizWardo</h3>
      <ul style={{ display:"flex", listStyle: "none", gap:"16px", padding: 0 }}>
        <li>Docs</li>
        <li>Games</li>
        <li>Settings</li>
        <li>More</li>
      </ul>
      </div>
    </div>
  )
}

export default Header;