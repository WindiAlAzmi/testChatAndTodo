import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import {setDoc, doc, Timestamp} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        error:null,
        loading:false
    });

    const {name, email, password, error, loading} = data;
    console.log(data, 'ini data register');

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
         setData({ ...data, error: null, loading:true });
        if(!name || !email || !password) {
            setData({...data, error: 'All fields are required'})
        }
        try{
            //sign in with email and password
            const result = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(result.user, 'ini result')

            //put data user in firestore
                //note --> result.user.uid --> dari results user, ditaro disitu sbg parameter
            await setDoc(doc(db, 'user', result.user.uid), {
             uid:result.user.uid,
             name, 
             email,
             createdAt: Timestamp.fromDate(new Date()),
             isOnline:false
            });
            
            //set semua jadi null
            setData({
                name:"",
                email:"",
                password:"",
                error:null,
                loading:false
            })

            //PINDAH KE HALAMAN UTAMA
            navigate('/')
        }catch(err){
             setData({ ...data, error: err.message, loading: false });

        }
    }

    return (
      <section>
        <h3>create account</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit
        }>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          {error ? <p>{error}</p> : null}
          <div>
            <button>Register</button>
          </div>
        </form>
      </section>
    );
}

export default Register;