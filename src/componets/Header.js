import { LOGO,USER_AVATAR } from '../utils/constant';
import { auth } from '../utils/firbase';
import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import {useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addUser,removeUser} from '../utils/userSlice'
import {onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log("error",error)
    });
  }

 useEffect(() => {
  const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user----",user)
        const {uid,email,displayName,photoURL} = user;
        console.log("photoUrl--",photoURL)
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/browse')
      } else {
          dispatch(removeUser());
          navigate('/')
      }
    });
    //this will called unsubcribe when componets unMount
    return () => {
      unsubcribe();
    }
}, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44 mx-auto md:mx-0"  src={LOGO} alt="logo" />
    {user && (
      <div className="flex p-2">
      <img className="w-10 h-10" src={user?.photoURL} alt="usericon"/>
    <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
    </div>
    )}
    </div>
  )
}

export default Header