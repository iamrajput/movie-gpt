import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from 'firebase/auth'
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa'; 

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  
 //login with google
  const onGoogleClick = async() => {
      try {
          const auth = getAuth()
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth,provider)
          const user = result.user
          navigate('/browse')
      } catch (error) {
         //do nothing
      }
  }

  //login with github
  const onGitHubClick = async() => {
    try {
      const auth = getAuth()
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth,provider)
      if (!result) {
        throw new Error("Could not complete signup");
      }
      const user = result.user
      navigate('/browse')
  } catch (error) {
     //do nothing
     console.log("error::::::::::::",error);
  }

  }
 
  return (
    <div className="flex flex-row items-center gap-4 mt-3 justify-center">
    <div 
    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
    >
     <FcGoogle size={30} onClick={onGoogleClick}/>
    </div>
    <div 
    className="w-10 h-10 bg-black  rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
    >
     <FaGithub size={40} onClick={onGitHubClick}/>
    </div>
  </div>
    )
}

export default OAuth
