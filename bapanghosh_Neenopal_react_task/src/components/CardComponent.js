import React, { useState } from "react";
import img_url from "../constants/imgUrl";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import Heart from "@react-sandbox/heart";
import Users from "../data/Users";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ThreeDots } from 'react-loader-spinner'

const CardComponent = () => {
  const [active, setActive] = useState(Array(Users.length).fill(false));
  const [users, setUsers] = useState(Users);
  const [open, setOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const onOpenModal = (user) => {
    setEditedUser(user);
    setOpen(true);
  };

  const onCloseModal = () => setOpen(false);

  const toggleActive = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSave = () => {
    // Update user details
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    // Close modal
    setOpen(false);
  };

  return (
    <div className="m-flex">
      {users.length === 0 ?
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        :
      users.map((user, index) => {
        return (
          <div key={user.id} className="card-container">
            <div className="card-image">
              <img src={img_url} alt="card image" />
            </div>
            <div className="card-body">
              <h3>{user.name}</h3>
              <div className="flex">
                <MdOutlineEmail size={24} />
                <p>{user.email}</p>
              </div>
              <div className="flex">
                <IoCallOutline size={24} />
                <p>{user.phone}</p>
              </div>
              <div className="flex">
                <TfiWorld size={24} />
                <p>{user.website}</p>
              </div>
            </div>
            <div className="card-actions">
              <ul>
                <li>
                  <Heart
                    active={active[index]}
                    onClick={() => toggleActive(index)}
                    width={24}
                    height={24}
                    style={{ color: "red" }}
                  />
                </li>{" "}
                |
                <li>
                  <CiEdit
                    onClick={() => onOpenModal(user)}
                    size={24}
                    style={{ cursor: "pointer" }}
                  />
                </li>
                |
                <li>
                  <AiTwotoneDelete
                    onClick={() => handleDelete(user.id)}
                    size={24}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        );
      })}
      <Modal open={open} onClose={onCloseModal} center classNames="c">
        <h4>Basic Modal</h4>
        <form>
          <label>
          <div><span className="star">*</span>Name:</div>
            <input
              type="text"
              value={editedUser ? editedUser.name : ""}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />
          </label>
          <label>
            <div><span className="star">*</span>Email:</div>
            <input
              type="email"
              value={editedUser ? editedUser.email : ""}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
          </label>
          <label>
          <div><span className="star">*</span>Phone:</div>
            <input
              type="text"
              value={editedUser ? editedUser.phone : ""}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
            />
          </label>
          <label>
          <div><span className="star">*</span>Website:</div>
            <input
              type="text"
              value={editedUser ? editedUser.website : ""}
              onChange={(e) =>
                setEditedUser({ ...editedUser, website: e.target.value })
              }
            />
          </label>
          
        </form>
          <h4 ></h4>
          <div className="btn">
               <button className="btn1" onClick={onCloseModal}>Cancel</button>
               <button className="btn2" type="button" onClick={handleSave}>
                 Ok
               </button> 
          </div>
          
      </Modal>
    </div>
  );
};

export default CardComponent;
