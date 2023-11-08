// import {useState} from 'react';
// import {useDispatch} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
// import { useSnackbar } from 'notistack';
// import {logIn} from '../redux/Slices/signInSlice';

// const SignIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();

//   function userSignIn (){
//     if (username === "test@gmail.com" && password === "123") {
//       console.log(username, password);
//       dispatch(logIn(username));
//       nav('/');
//     }else{
//       enqueueSnackbar('Incorrect username or password', { variant: 'error' });
//     }
//   }


//   return (
//     <div className="w-[100vw] h-[80vh] flex justify-center items-center border-2 border-purple-600">
      
//       <div className='text-2xl text-red-500 blinking'>
//         username: test@gmail.com password: 123
//       </div>
//     <div className="flex p-5 border-2 border-indigo-600 rounded w-1/3 h-96 shadow-lg shadow-slate-600">
    
//     <div className="flex flex-col justify-between border-r-indigo-600 border-2 items-center p-2">
//      <p className="text-3xl font-semibold text-slate-600">Signin</p>
//      <img className="w-60 h-[80%] rounded-ss-lg" src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg" alt="" />
//     </div>
 
    
//     <div className="flex flex-col justify-center items-center m-4">
//      <input className="outline-none border-b-2 m-3 border-blue-500" type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
//      <input className="outline-none border-b-2 m-3 border-blue-500" type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//      <button className="bg-blue-600 m-3 text-white p-2 w-20 h-10 rounded" onClick={userSignIn}>Sign in</button>
//     </div>
//     </div>
 
//     </div>
// );
// };

// export default SignIn;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logIn } from '../redux/Slices/signInSlice';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  function userSignIn() {
    if (username === "test@gmail.com" && password === "123") {
      console.log(username, password);
      dispatch(logIn(username));
      nav('/');
    } else {
      enqueueSnackbar('Incorrect username or password', { variant: 'error' });
    }
  }

  return (
    <div className="w-[100vw] h-[80vh] flex items-center justify-center border-t-2 border-purple-600">
      <div className="flex flex-col p-5 rounded w-1/3 h-96 shadow-lg shadow-slate-600">
        <div className="flex flex-col justify-between border-t-indigo-600 border-2 items-center p-2">
          <p className="text-3xl font-semibold text-slate-600">Signin</p>
          <img
            className="w-60 h-[80%] rounded-ss-lg"
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=2560,quality=75,format=auto/uploads/sites/2/2022/04/E-commerce-App-JPG-File-scaled.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center items-center m-4">
          <input className="outline-none border-b-2 m-3 border-blue-500" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="outline-none border-b-2 m-3 border-blue-500" type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-blue-600 m-3 text-white p-2 w-20 h-10 rounded" onClick={userSignIn}>Sign in</button>
        </div>
        <div>
        test user details: <br/> <p  className='text-2xl text-red-500 blinking'>username: test@gmail.com, password: 123</p>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
