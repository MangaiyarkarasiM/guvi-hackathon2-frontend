import React,{ useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import fetchApi from "../utils/fetchApi";
import TheaterList from '../components/TheaterList/TheaterList';
import { TheaterProvider} from '../context/theaterContext';
import TheaterForm from "../components/Theater/TheaterForm";


function TheatersPage(props) {
    let [message,setMessage] = useState("");
    let [theaters, setTheaters] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState('');

    //getting all theaters from backend
    useEffect(()=>{
      getTheater();
    },[]);

    async function getTheater()
    {
        let res = await fetchApi.get('/theaters');
        //console.log(res.data);
        if(res.data.statusCode === 200)
        {
            setTheaters(res.data.theaters);
            //setMessage(res.data.message);
        }
        else
        {
            console.log(res.data);
        }
    }

    //deleting a theater with ID
    const deleteTheater = async(id)=>{
        let res = await fetchApi.delete(`/theaters/${id}`);
        //console.log(res.data);
        if(res.data.statusCode === 200)
        {
            getTheater();
            //setMessage(res.data.message)
        }
        else
        {
            console.log(res.data);
        }
    }
    
    //editing a theater with ID
    const editTheater = async(value)=>{
        //console.log(value);
        let res = await fetchApi.put(`/theaters/${value._id}`,{...value});
        //console.log(res.data);
        if(res.data.statusCode === 200)
        {
            getTheater();
            setShowEdit(false);
            setId('');
            //setMessage(res.data.message)
        }
        else
        {
            console.log(res.data);
        }
    }
    
    //adding a new theater
    const addTheater = async(value)=>{
        let res = await fetchApi.post('/theaters/create-theater',{...value});
        //console.log(res.data);
        if(res.data.statusCode === 200)
        {
            getTheater();
            setShowEdit(false);
            //setMessage(res.data.message)
        }
        else
        {
            console.log(res.data);
        }
    }

    return (
      <TheaterProvider value={{theaters,deleteTheater,editTheater,addTheater,setShowEdit,setId}}>
        <div>
          <Layout role="admin" />
          <div className="row">
          <button className="btn btn-info mt-4 ml-4" onClick={()=>{setShowEdit(true)}}>Add Theater</button>
          </div>
          <div className="row">
                {showEdit ?
                id ? <div>
                <TheaterForm id={id}></TheaterForm>
                </div> : <div>
                    <TheaterForm></TheaterForm>
                </div>
                : null}
         </div>
         {
             message?<div>{message}</div>:''
         }
          <div className="row">
            <TheaterList theaters={theaters}/>
          </div>
        </div>

      </TheaterProvider>
    );
}

export default TheatersPage;