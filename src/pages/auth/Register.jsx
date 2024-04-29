import React, { useEffect, useState } from 'react'
import './auth.scss'
import mainImage from '../../assets/images/register.png'
import bg_effect from '../../assets/images/login_image_back.png'
import { BiLogoFacebook,BiLogoGoogle,BiLogoTwitter } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { BsEye,BsEyeSlash } from "react-icons/bs"; 
import { useDispatch, useSelector } from 'react-redux'
import { getNewUser } from '../../slices/auth/authSlices'; 
import { handleLoader } from '../../slices/loader/loaderSlices';
import { useNavigate } from "react-router-dom"; 
import {toast } from 'react-toastify';
 
function Register() {
  const [redirect,setRedirect] = useState(false)

    const [showPass, SetShowPass] = useState(false)
    const [userData, setUserData] =useState({UserName:'',Email:'',Password:'',privacypolicy:false}) 
    const [error, setError] =useState({
        userNameError:false,
        emailError:false,
        PasswordError:false,
        userNameErrorMsg:'',
        emailErrorMsg:'',
        PasswordErrorMsg:'', 
        PasswordSucess:false,
        PassStrogStep:0
    }) ; 
    const {auth,RegisterUser} = useSelector(state=>state.authReducer) 
    const dispatch = useDispatch()
    const navigate = useNavigate(); 
      const handleSbumit = (e)=>{  
          e.preventDefault();
          if(userData.UserName !== '' && userData.Email !== '' && userData.Password !== ''){ 
            // const isDuplicateUserData = RegisterUser.some(user => {
                if(RegisterUser.UserName === userData.UserName && RegisterUser.Email === userData.Email){
                    setError({
                        ...error,
                        userNameError:true,
                        emailError:true, 
                        userNameErrorMsg:'Username already exists. Please choose a different username.',
                        emailErrorMsg:'Email already exists. Please use a different email.', 
                    }) 
                }else if(RegisterUser.UserName === userData.UserName){
                    setError({
                        ...error,
                        userNameError:true,
                        emailError:false, 
                        userNameErrorMsg:'Username already exists. Please choose a different username.', 
                    }) 
                }else if(RegisterUser.Email === userData.Email){
                    setError({
                        ...error,
                        userNameError:false,
                        emailError:true,  
                        emailErrorMsg:'Email already exists. Please use a different email.', 
                    }) 
                }else{
                  dispatch(getNewUser(userData))
                  setUserData({UserName:'',Email:'',Password:'' ,privacypolicy:false})
                  toast.success('You are Register successful!',{theme:'colored'})
                  dispatch(handleLoader(false));
                   setRedirect(true)
                }
            // } );
            
            // if (!isDuplicateUserData) {
            //   dispatch(getNewUser(userData))
            //   setUserData({UserName:'',Email:'',Password:'' ,privacypolicy:false})
            //   toast.success('You are Register successful!',{theme:'colored'})
            //   navigate('/');     
            // } else {
            //     console.log("User with the same UserName or Email does not exist.");
            // }
         }else{
            if(userData.UserName.length < 6){
                setError({...error,userNameError:true,userNameErrorMsg:'Username must be more than 6 characters'})
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.Email) || userData.Email === ''){
                setError({
                    ...error,
                    emailError:true,
                    emailErrorMsg:'Please Enter Valid Email'
                })
            }else if(userData.Password.search(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/) < 0){
                setError({
                    ...error, 
                    PasswordError:true,
                    PasswordErrorMsg:'Password must be at least 8 characters'
                })
            }
         }
      }  
      const GetinputVal = (name,value)=>{  
        setUserData({...userData,[name]:value,}) 
        switch (name) {
            case 'UserName': 
                if(value.length < 1){
                    setError({...error,userNameError:true,userNameErrorMsg:'Please enter username'})
                }else if(value.length < 6){
                    setError({...error,userNameError:true,userNameErrorMsg:'Username must be more than 6 characters'})
                }else{
                    setError({...error,userNameError:false})
                } 
            break;
          case 'Email':
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                setError({
                    ...error,
                    emailError:true,
                    emailErrorMsg:'Please Enter Valid Email'
                })
              }else{
                setError({
                    ...error, 
                    emailError:false, 
                }) 
              }
            
            break;
    
            case 'Password':           
              if(value.length < 8) {  
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:false, 
                        PasswordErrorMsg:'Password must be at least 8 characters'
                    })
                }else if(value.search(/[a-z]/) < 0) {  
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:false,
                        PassStrogStep:(error.PassStrogStep++),
                        PasswordErrorMsg:'Password must contain at least one lowercase letter !'
                    })
                }else if(value.search(/[A-Z]/) < 0) {  
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:false,
                        PassStrogStep:(error.PassStrogStep++),
                        PasswordErrorMsg:'Password must contain at least one uppercase letter'
                    })
                }else if(value.search(/[0-9]/) < 0) {  
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:false,
                        PassStrogStep:(error.PassStrogStep++),
                        PasswordErrorMsg:'Password must contain at least one number'
                    })
                }else if(value.search(/[!@#$%^&*(),.?":{}|<>]/) < 0){ 
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:false,
                        PassStrogStep:(error.PassStrogStep++),
                        PasswordErrorMsg:'Password must contain at least one special character.'
                    })
                }
                else{
                    setError({
                        ...error, 
                        PasswordError:true,
                        PasswordSucess:true,
                        PasswordErrorMsg:'Password Is Strong'
                    })
                }
                 
            break;
        
          default:
            break;
        }
      }

  useEffect(()=>{
    if(redirect){
      const timeout = setTimeout(() => {
        navigate('/'); 
        dispatch(handleLoader(false));

      }, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
    } 
  },[redirect])
    
  return (
    <div className='main_page_wpr row align-items-center'>
        <div className="col-md-6 left_side">
          <div className="img-box">
            <img src={mainImage} alt="Side Image" className='main_img'/>
            <img src={bg_effect} alt="Side Image" className='bg_effect'/>
          </div>
         

        </div>
        <div className="col-md-6 right_side">
          <div className="cont_wpr ">
            <div className="welcome_text mb-5">
              <div className="bluerit_logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.994 38.7373C22.9618 40.2423 18.5517 40.4065 14.4187 39.2055C10.2858 38.0044 6.65057 35.5021 4.05306 32.0704C1.45556 28.6387 0.0343675 24.4606 0.000615377 20.1568C-0.0331368 15.8531 1.32235 11.6532 3.86571 8.18117C6.40907 4.70914 10.0046 2.15019 14.1182 0.884447C18.2318 -0.381291 22.6439 -0.286282 26.6992 1.15536C30.7545 2.59701 34.2366 5.30837 36.6281 8.88667C39.0196 12.465 40.1931 16.7193 39.9741 21.0176L34.0487 20.7157C34.2027 17.6925 33.3774 14.7003 31.6953 12.1835C30.0132 9.66672 27.5641 7.7597 24.7119 6.74573C21.8596 5.73175 18.7563 5.66493 15.8631 6.55518C12.9698 7.44543 10.4409 9.24526 8.65204 11.6873C6.86318 14.1293 5.9098 17.0833 5.93354 20.1103C5.95728 23.1374 6.95687 26.076 8.78381 28.4897C10.6107 30.9033 13.1676 32.6633 16.0744 33.5081C18.9813 34.3528 22.0832 34.2373 24.9192 33.1787L26.994 38.7373Z" fill="#7367F0"></path><path d="M36.9387 32.1869C35.9806 33.6719 34 34.0992 32.5149 33.1411C31.0299 32.183 30.6026 30.2024 31.5607 28.7173C32.5188 27.2322 34.4994 26.805 35.9845 27.7631C37.4696 28.7212 37.8968 30.7018 36.9387 32.1869Z" fill="#7367F0"></path></svg>
              </div>
              <div className="wel_heading mt-4">
                <h2 className='display-4 fw-medium'>Adventure starts here 🚀</h2>
              </div>
              <p className="wel_desc mt-2">Make your app management easy and fun!</p>
            </div>

            <form action="#" className='form_apr' onSubmit={(e)=>{handleSbumit(e)}}>
                <div className="input_wpr"> 
                    <label htmlFor="UserName" className="form-label d-flex justify-content-between align-items-center mb-2">
                        <p className='pe-4'>Username</p> 
                    </label>
                    <input type="text" className="form-control" name='UserName' id="UserName" placeholder="Enter your username" value={userData.UserName} onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/>   
                    
                    {
                        error.userNameError? 
                        <div className={`error_text ${error.userNameError?'invalid':''}`}>
                            <p>{error.userNameErrorMsg}</p>
                        </div>
                        :''
                    }
                </div>
              <div className="input_wpr"> 
                  <label htmlFor="RegesterEmail" className="form-label d-flex justify-content-between align-items-center mb-2">
                    <p className='pe-4'>Email</p> 
                  </label>
                  <input type="email" className="form-control" name='Email' id="RegesterEmail" placeholder="Enter your email or username" value={userData.Email} onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/> 
                  {
                    error.emailError?
                    <div className={`error_text ${error.emailError?'invalid':''} ${error.emailSucess?'sucess':''}`}><p>{error.emailErrorMsg}</p></div>:''
                  }
              </div>
              
              <div className="input_wpr"> 
                  <label htmlFor="RegisterPass" className="form-label d-flex justify-content-between align-items-center mb-2">
                    <p className='pe-4'>Password</p>
                  </label>
                  <div className="passinput position-relative">
                  <input type={showPass?'text':'password'} name='Password' className="form-control" autoComplete="off"
 id="RegesterPass" value={userData.Password} placeholder="Enter your email or username" onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/> 
                  {!showPass?
                  <div className='icon' onClick={()=>SetShowPass(!showPass)}><BsEyeSlash /></div>:
                  <div className='icon' onClick={()=>SetShowPass(!showPass)}><BsEye/></div>
                  }  
                  </div>
                  {                    
                    error.PasswordError?
                    <div className={`error_text ${error.PasswordError?'invalid':''} ${error.PasswordSucess?'sucess':''}`}><p>{error.PasswordErrorMsg}</p></div>:'' 
                 
                  }
              </div>

              <div className="form-check mb-0 input_wpr">
                <input className="form-check-input" type="checkbox" name='privacypolicy' id="RemmberCheckBox" defaultChecked={userData.privacypolicy} onChange={(e)=>GetinputVal(e.target.name,e.target.checked)}/>
                <label className="form-check-label" htmlFor="RemmberCheckBox">
                  <p>I agree to privacy policy & terms</p>
                </label>
              </div>

              <div className="form_btn_wpr my-4">
                <button className='actionBtn btn'>Sign Up</button>
              </div>

              <div className="option_liks text-center">
                <p>Already have an account? <Link to="/">Sign in instead</Link></p>
              </div>

                <div className="or_devider text-center my-4">
                  <p>Or</p>
                </div>

                <div className="login-option d-flex align-items-center justify-content-center gap-4">
                  <Link className='facebook'><BiLogoFacebook /></Link>
                  <Link className='Google'><BiLogoGoogle /></Link>
                  <Link className='twitter'><BiLogoTwitter /></Link>
                </div> 
            </form>
            

          </div>
        </div>
    </div>
  )
}

export default Register
