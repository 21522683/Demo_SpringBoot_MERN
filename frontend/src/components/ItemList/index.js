import React from 'react'
import './ItemList.css'


function ItemList({clickUpdate, clickDelete, avatarURL, name, type, email, birthday, salaryFinal}) {
  return (
    <div style={{border: '1px solid #ccc', borderRadius: '4px', padding: '10px', margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
       
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%'}}>
            <img 
                style={{width: '70px', height: '70px', borderRadius: '10px'}} 
                src={avatarURL} alt="avt"
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '20px'}}>
                <span style={{fontSize: '20px', fontWeight: '600'}}>{name}</span>
                <span style={{fontSize: '12px', fontStyle: 'italic'}}>{type}</span>
                <div>
                    <span style={{fontSize: '12px', fontStyle: 'italic'}}>{email}</span>
                    <span style={{fontSize: '12px', fontStyle: 'italic', marginLeft: '10px'}}>{birthday}</span>
                </div>
                <span style={{fontSize: '12px', marginTop: '4px'}}>Lương: <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>{salaryFinal}</span> VND</span>
            </div>
        </div>
        <div style={{width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}> 
            <button className='hov-btn' type="button" onClick={clickUpdate}>Sửa</button>
            <button className='hov-btn' type="button" onClick={clickDelete}>Xóa</button>
        </div>
    </div>
  )
}

export default ItemList