import React from "react";

function Toast({ title, content, status, clickClose }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "auto",
          backgroundColor: "#fff",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px 40px",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >{title}</span>
          <span className="btn-close" role="button" onClick={clickClose}>
            &times;
          </span>
        </div>

        <div
          style={{
            margin: "30px 50px 0",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "18px" }}>{content}</span>
        </div>

        {status === "success" ? (
          <div
            style={{
              margin: "40px 40px 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "content",
              paddingTop: "30px",
              borderTop: "1px solid #ccc",
            }}
          >
            <button
              className="btn"
              style={{
                borderRadius: "4px",
                width: "100px",
                height: "40px",
                backgroundColor: "#000",
                color: "#fff",
                border: "0",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              type="button"
              onClick={clickClose}
            >
              Xác nhận
            </button>
          </div>
        ) : (
          <div
            style={{
              margin: "40px 40px 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "content",
              paddingTop: "30px",
              borderTop: "1px solid #ccc",
            }}
          >
            <button
              className="btn"
              style={{
                borderRadius: "4px",
                width: "100px",
                height: "40px",
                backgroundColor: "#000",
                color: "#fff",
                border: "0",
                marginRight: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              type="button"
            >
              Xác nhận
            </button>
            <button
              className="btn"
              style={{
                borderRadius: "4px",
                width: "100px",
                height: "40px",
                backgroundColor: "#000",
                color: "#fff",
                border: "0",
                marginLeft: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              type="button"
              onClick={clickClose}
            >
              Hủy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Toast;
