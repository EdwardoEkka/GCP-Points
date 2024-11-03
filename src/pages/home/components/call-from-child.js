const CallFromChild = ({ increament, num }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          increament(num + 1); //There no function definition just the props passed which is called here along with an arguement
        }}
        style={{
          outline: "none",
          backgroundColor: "turquoise",
          padding: "16px",
          border: "none",
          borderRadius: "8px",
          cursor:"pointer",
          fontWeight:"700"
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default CallFromChild;
