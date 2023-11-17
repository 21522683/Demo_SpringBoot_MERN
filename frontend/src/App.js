import { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import Modal from "./components/Modal";
import axios from "./customize-axios";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const [listStaffs, setListStaffs] = useState([]);
  const [staff, setStaff] = useState({});
  const [action, setAction] = useState("");

  useEffect(() => {
    getStaffs();
  }, []);

  const getStaffs = async () => {
    const res = await axios.get("/api/staff");
    console.log(res);
    if (res) {
      console.log(res)
      setListStaffs(res);
    }
  };

  const handleAdd = () => {
    setAction('add');
    setIsOpenModal(true);
  }

  const handleUpdate = (item) => {
    setAction('update');
    setStaff(item);
    setIsOpenModal(true);
  }

  const handleDelete = (id) => {
    axios.delete(`/api/staff/${id}`)
    .then(res =>{
      console.log(res)
      getStaffs();
    })
    .catch(err => console.log(err))
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        height: "100%",
      }}
    >
      <h1>QUẢN LÝ NHÂN VIÊN</h1>
      <button
        onClick={handleAdd}
        style={{
          fontSize: "16px",
          width: "200px",
          height: "40px",
          borderRadius: "4px",
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          border: "0",
          cursor: "pointer",
        }}
        type="submit"
      >
        Thêm nhân viên
      </button>
      <div
        style={{
          width: "80%",
          height: "64%",
          marginTop: "20px",
          border: "2px solid #ccc",
          borderRadius: "4px",
          padding: "20px",
          overflowY: "scroll",
        }}
      >
        {listStaffs.map((item, index) => {
          return (
            <ItemList
              key={index}
              avatarURL={item.avatarURL}
              name={item.name}
              type={item.type}
              email={item.email}
              birthday={item.birthday}
              salaryFinal={item.salaryFinal}
              clickUpdate={() => handleUpdate(item)}
              clickDelete={() => handleDelete(item.id)}
            />
          );
        })}
      </div>
      {isOpenModal && (
        action === "add" ? (
          <Modal textButton="Thêm" title="THÊM NHÂN VIÊN" setIsOpenModal={setIsOpenModal} action={action} getStaffs={getStaffs} staff={staff} clickClose={() => setIsOpenModal(false)}
        />
        ) : (
          action === "update" && (
            <Modal textButton="Xác nhận" title="CẬP NHẬT THÔNG TIN NHÂN VIÊN" setIsOpenModal={setIsOpenModal} action={action} getStaffs={getStaffs} staff={staff} clickClose={() => setIsOpenModal(false)}
        />
          )
        )
      )}
    </div>
  );
}

export default App;
