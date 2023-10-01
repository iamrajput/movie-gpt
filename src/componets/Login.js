import {useState,useRef} from 'react';
import Header from './Header';
import { BG_URL,PROFILE_PICTURE } from '../utils/constant';
import { checkValidDate } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firbase';
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmission = () => {
    //checkValidDate()
    console.log("email===",email.current.value)
    console.log("password===",password.current.value)
    const message = checkValidDate(email.current.value,password.current.value)
    //console.log(isValid)
    setErrorMessage(message)
    if(message) return;

    //check the type for form
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(user,{
            displayName: name.current.value,
            photoURL: PROFILE_PICTURE
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
          }).catch((error) =>{
            setErrorMessage(error.message)
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage===",errorMessage);
        });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage===",errorMessage);
        });
    }
  }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <>
    <Header />
    <div className="absolute">
        <img src={BG_URL} alt="bg_image"/>
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       {!isSignInForm && (
              <input
              ref={name} 
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-700 rounded-lg"
              />
       )}
        <input 
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input 
        ref={password}
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleFormSubmission}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already register? Sign In Now"} </p>
    </form>
    </>
  )
}

export default Login