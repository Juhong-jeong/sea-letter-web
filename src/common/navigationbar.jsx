import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "#fff",
        borderTop: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Button
        style={{
          width: "15%",
          height: "50%",
        }}
        isTrue={currentPath === "/"}
        onClick={() => {
          navigate("/");
        }}
        name="홈"
        imgsrc="home"
      ></Button>

      <Button
        style={{
          width: "15%",
          height: "50%",
        }}
        isTrue={currentPath?.toLowerCase() === "/letterbox"}
        onClick={() => navigate("/letterBox")}
        name="우편함"
        imgsrc="letterbox"
      ></Button>

      <Button
        style={{
          width: "15%",
          height: "50%",
        }}
        isTrue={currentPath?.toLowerCase() === "/store"}
        name={"스토어"}
        imgsrc={"store"}
        onClick={() => navigate("/store")}
      ></Button>
      <Button
        style={{
          width: "15%",
          height: "50%",
        }}
        isTrue={currentPath?.toLowerCase() === "/mypage"}
        name={"마이"}
        imgsrc={"mypage"}
        onClick={() => navigate("/mypage")}
      ></Button>
    </div>
  );
};

const Button = (props) => {
  const { name, imgsrc, onClick, isTrue } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
      onClick={onClick}
    >
      <div style={{ minWidth: "20px", width: "35%", height: "100%" }}>
        <img
          style={{ width: "100%" }}
          src={`/button/${imgsrc + (isTrue ? "T" : "")}.png`}
        />
      </div>
      <div style={{ color: "#9D9D9D" }}>{name}</div>
    </div>
  );
};

export default NavigationBar;
