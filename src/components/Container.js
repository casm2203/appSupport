import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
//import Cardinstances from "./Cardinstances/Cardinstances"
//import CardClient from "./CardClient/CardClient"
import Client from "./Client/Client"
import SideBar from './SideBar/SideBar';
import Form from './Form/Form';
import We from './We/We';
import Contact from './Contact/Contact';
import Error404 from './Pages/Error404';
//Firebase
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Login from './User/Login';
import SignUp from './User/SignUp';
import axios from 'axios';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Container = () => {
  const [dbs, setDbs] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = query(collection(db, "instances"));
    // eslint-disable-next-line
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arrayDatas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDbs(arrayDatas);

    });
  }, []);



  //Crear
  const createData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "instances"), data);
      setDbs([...dbs, { ...data, id_instances: docRef.id }]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Actualizar
  const updateData = async (data) => {
    try {
      const updateInstance = doc(db, "instances", data.id);
      await updateDoc(updateInstance, data);
      let newData = dbs.map((el) => (el.id === data.id ? data : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Eliminar
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "instances", id));
      let newData = dbs.filter((el) => (el.id === id ? null : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const testGlobal = async () => {
    const date = new Date();
    dbs.forEach((element, i) => {
      setTimeout(() => {
        axios.post(`https://api.chat-api.com/instance179543/sendMessage?token=w3pj45t6b053m56z`, {
          phone: `${element.movil}`,
          body: `[*${date.toLocaleDateString()} ${date.toLocaleTimeString()}]* Prueba Sagicc: Por favor cerrar el caso.`
        }).then(res => {
          console.log("res:", res.data);
        }).catch(err => {
        });
        console.log(element.movil, "envio envio")
      }, i * 1000);
    })
  }

  //filtrado
  let results = [];
  if (!search) {
    results = dbs;
  } else {
    results = dbs.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase()));
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }


  return (

    <Box sx={{ display: 'flex' }}>
      {console.log(dbs, "consulta dbs")}
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route exact path="/" element={
            <Client
              data={results}
              searcher={searcher}
              createData={createData}
              deleteData={deleteData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
              testGlobal={testGlobal}
            />}
          />
          {/* <Route exact path="/" element={<SignUp />} /> */}
          <Route exact path="/agregar" element={
            <Form
              createData={createData}
              deleteData={deleteData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />}
          />
          <Route exact path="/nosotros" element={<We />} />
          <Route exact path="/contactanos" element={<Contact />} />
          <Route exact path="/iniciarsesion" element={<Login />} />
          <Route exact path="/registro" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Container;
