import { LOGO, USER_AVATAR, SUPPORT_LANGUAGE } from '../utils/constant';
import { auth } from '../utils/firbase';
import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import {useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addUser,removeUser} from '../utils/userSlice'
import {onAuthStateChanged } from "firebase/auth";
import {toggleGptSearchView} from '../utils/gptSlice'
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGpt = useSelector((store) => store.gpt?.showGptSearch);
console.log("SUPPORT_LANGUAGE",SUPPORT_LANGUAGE)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log("error",error)
    });
  }

 useEffect(() => {
  const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
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


 const handleGptClick = () => {
   dispatch(toggleGptSearchView())
 }

//  const changeLanguage = (e) => {
//   //const lang = e.target.value;
//   console.log(e.target.value);
//   dispatch(changeLanguage(e.target.value))
//  }


 const handleLanguageChange = (e) => {
  console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));
};




  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44 mx-auto md:mx-0"  src={LOGO} alt="logo" />
    {user && (
      <div className="flex p-2">
      <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
          {SUPPORT_LANGUAGE.map((lang) => {
             return <option value={lang.identifier} key={lang.identifier} >{lang.name}</option>
          })}
          </select>
        <img className="w-10 h-10 m-3 rounded-full" src={user?.photoURL} alt="usericon"/>
        <button className="py-2 px-4 m-2 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptClick}>{!isGpt ? 'GPT Search' :'Home'} </button>
        <button className="font-bold py-2 px-4 m-2 text-white bg-red-700 rounded-lg" onClick={handleSignOut}>Sign Out</button>
    </div>
    )}
    </div>
  )
}

export default Header