import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

//
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setprojectName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (projectName) {
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, where("name", "==", projectName));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        await addDoc(projectsRef, {
          name: projectName,
        });
        setShowModal(false);
        setprojectName("");
      } else {
        // eslint-disable-next-line no-restricted-globals
        alert("gsgsgsgsggs");
      }
    }
  };
  return (
    <div>
      <Plus
        size={20}
        className="cursor-pointer mr-1.5"
        onClick={() => setShowModal(true)}
      ></Plus>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading={"New project"}
          value={projectName}
          setShowModal={setShowModal}
          setValue={setprojectName}
          confirmText={"+ add project"}
        ></ProjectForm>
      </Modal>
    </div>
  );
};

export default AddNewProject;
