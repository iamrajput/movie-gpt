import {useState,useCallback} from 'react'
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
import {BsChevronDown} from 'react-icons/bs'
import Menu from './common/Menu';
import Avatar from 'react-avatar';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showMenu,setShowMenu] = useState(false)
  const isGpt = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log("error",error)
    });
    toggleMenu();
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
   toggleMenu();
 }

 const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
};

const toggleMenu = useCallback(() => {
    setShowMenu((current) => !current)
  },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-44 mx-auto md:mx-0"  src={LOGO} alt="logo"/>
    {user && (
      <div className="flex p-2">
        {isGpt && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
            {SUPPORT_LANGUAGE.map((lang) => {
                return <option value={lang.identifier} key={lang.identifier} >{lang.name}</option>
              })}
            </select>
        )}
        <div onClick={toggleMenu}>
          {user?.photoURL ?  <img className="w-10 h-10 m-3 rounded-full" src={user?.photoURL} alt="usericon"/> : <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={user?.displayName} round size={'50px'} className="mr-2" />}
       
        </div>
        <BsChevronDown className="text-white mt-6" onClick={toggleMenu}/>
       {showMenu && (<Menu handleSignOut={handleSignOut} handleGptClick={handleGptClick}/>)}
    </div>
    )}
    </div>
  )
}

export default Header