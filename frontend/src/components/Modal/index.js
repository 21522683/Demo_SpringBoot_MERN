import React, { useState } from "react";
import "./Modal.css";
import axios from '../../customize-axios'

function Modal({ clickClose, title, textButton, setIsOpenModal, action, getStaffs, staff}) {

  const [post, setPost] = useState(
    action === "update"
      ? staff
      : {
          name: "",
          phone: "",
          email: "",
          avatarURL: "",
          birthday: "",
          salary: "",
          type: "Lập trình viên",
          quantityHour: "",
          quantityError: "",
        }
  );

  const handleInput = (e) => {
    let key = e.target.name;
    let value;
    if (key === "avatarURL") {
      // handleUploadImage(e);
      if (e.target.files[0]) {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        value = url;
      }
    } 
    else {
      value = e.target.value;
    }

    setPost((prev) => {
      const nextState = { ...prev };
      nextState[key] = value;
      nextState.id = new Date().getTime();
      return nextState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === 'add') {
      axios.post('/api/staff/add', post)
        .then(res => {
          console.log(res)
          getStaffs();
          setIsOpenModal(false)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (action === 'update') {
      axios.put('/api/staff/' + staff.id, post)
        .then(res => {
          console.log(res)
          getStaffs();
          setIsOpenModal(false)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginTop: "40px",
          width: "60%",
          height: "88%",
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
          }}
        >
          <span
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            {title}
          </span>
          <span className="btn-close" role="button" onClick={clickClose}>
            &times;
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ height: "auto", margin: "10px 40px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div class="preview">
                <img
                  id="img-preview"
                  src={post.avatarURL}
                  alt="avt"
                />
                <label for="file-input">Upload Image</label>
                <input
                  accept="image/*"
                  onChange={handleInput}
                  type="file"
                  id="file-input"
                  name="avatarURL"
                />
              </div>

              <div style={{ marginLeft: "20px", width: "100%" }}>
                <p
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Họ tên:{" "}
                </p>
                <input
                  style={{ width: "80%", padding: "8px 16px", outline: "none" }}
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={post.name}
                  required
                />

                <p
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Ngày sinh:{" "}
                </p>
                <input
                  style={{ padding: "8px 16px", outline: "none" }}
                  type="date"
                  name="birthday"
                  value={post.birthday}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div
              style={{
                margin: "40px 100px 0 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Số điện thoại:{" "}
                </span>
                <input
                  style={{
                    width: "200px",
                    padding: "8px 16px",
                    outline: "none",
                    marginLeft: "20px",
                  }}
                  type="tel"
                  name="phone"
                  value={post.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <span
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Email:{" "}
                </span>
                <input
                  style={{
                    width: "240px",
                    padding: "8px 16px",
                    outline: "none",
                    marginLeft: "20px",
                  }}
                  type="email"
                  value={post.email}
                  name="email"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>

            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Lương cơ bản
                </p>
                <input
                  style={{
                    width: "200px",
                    padding: "4px 16px",
                    outline: "none",
                    height: "28px",
                  }}
                  type="number"
                  onChange={handleInput}
                  name="salary"
                  value={post.salary}
                />
              </div>

              <div>
                <p
                  style={{
                    fontSize: "16px",
                    margin: "10px 0",
                    fontWeight: "500",
                  }}
                >
                  Loại nhân viên
                </p>
                <select
                  style={{
                    width: "200px",
                    padding: "4px 16px",
                    outline: "none",
                    height: "40px",
                  }}
                  onChange={handleInput}
                  name="type"
                  value={post.type || "Lập trình viên"}
                >
                  <option value="Lập trình viên">Lập trình viên</option>
                  <option value="Kiểm thử viên">Kiểm thử viên</option>
                </select>
              </div>

              {post.type  === "Kiểm thử viên" ? (
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      margin: "10px 0",
                      fontWeight: "500",
                    }}
                  >
                    Số lỗi phát hiện được
                  </p>
                  <input
                    style={{
                      width: "200px",
                      padding: "4px 16px",
                      outline: "none",
                      height: "28px",
                    }}
                    type="number"
                    value={post.quantityError}
                    name="quantityError"
                    onChange={handleInput}
                  />
                </div>
              ) :
              (
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      margin: "10px 0",
                      fontWeight: "500",
                    }}
                  >
                    Số giờ tăng ca
                  </p>
                  <input
                    style={{
                      width: "200px",
                      padding: "4px 16px",
                      outline: "none",
                      height: "28px",
                    }}
                    type="number"
                    value={post.quantityHour}
                    name="quantityHour"
                    onChange={handleInput}
                  />
                </div>
              )}
            </div>

            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "content",
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
                type="submit"
              >
                {textButton}
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
          </div>
        </form>
      </div>

    </div>
  );
}

export default Modal;
