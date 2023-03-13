import React, {useState} from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { doc, updateDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        password:'',
        error:null,
        loading:false
    });

    const {email, password, error, loading} = data;
    console.log(data, 'ini data register');

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
         setData({ ...data, error: null, loading:true });
        if( !email || !password) {
            setData({...data, error: 'All fields are required'})
        }
        try{
            //sign in with email and password
            const result = await signInWithEmailAndPassword(auth, email, password);
            // console.log(result.user, 'ini result')

            //put data user in firestore
                //note --> result.user.uid --> dari results user, ditaro disitu sbg parameter
            await updateDoc(doc(db, 'user', result.user.uid), {
             isOnline:true,
            });
            
            //set semua jadi null
            setData({
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
        <h3>login account</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit
        }>
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
            <button>{loading? 'loading' : 'Login'}</button>
          </div>
        </form>
      </section>
    );
}

export default Login;