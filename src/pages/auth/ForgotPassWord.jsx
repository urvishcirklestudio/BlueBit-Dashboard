import React, { useEffect, useRef, useState } from 'react'
import mainImage from '../../assets/images/forgotPass.png'
import bg_effect from '../../assets/images/login_image_back.png'
import { RxChevronLeft } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { BsEye,BsEyeSlash } from "react-icons/bs"; 
import { SetNewPassword } from '../../slices/auth/authSlices';
import { useNavigate } from "react-router-dom"; 
import {toast } from 'react-toastify';
import { handleLoader } from '../../slices/loader/loaderSlices';

function ForgotPassWord() {
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const [redirect,setRedirect] = useState(false)
    const [conformMail,setConformMail] = useState(false)
    const [showPass, SetShowPass] = useState({
        NewPassword:false,
        ConfirmPassword:false,
    })
    const [userData, setUserData] =useState({
        Email:'',
        Password:'',
        ConfirmPassword:''
    })
    const [error, setError] =useState({
        emailError:false,
        PasswordError:false,
        ConfirmPasswordError:false,
        emailErrorMsg:'Please Enater Valid Email',
        PasswordErrorMsg:'Please Enater Your Password',  
        conformPasswordErrorMsg:'Your Password Not Match',  
    })
    const {auth,RegisterUser} = useSelector(state=>state.authReducer) 
    const handleTimeout = () => {  
        setConformMail(false)
      };
    const handleSbumit = (e)=>{
        e.preventDefault()
        if(!conformMail && userData.Email !== ''){
            if(RegisterUser.Email === userData.Email){
                setConformMail(true)
                setError({...error,emailError:false,emailErrorMsg:'Please Enater Valid Email'})
            }else{
                setError({...error,emailError:true,emailErrorMsg:'Email is not exists...!'})
            }
        }else{ 
            if(conformMail && userData.Password.length > 8 && userData.ConfirmPassword === userData.Password){
                dispatch(SetNewPassword(userData.Password)) 
                toast.success('Your Password Reset successful!',{theme:'colored'})
                dispatch(handleLoader(true)) 
                setRedirect(true)
            }else{
            }
        }
    }
    const GetinputVal = (name,value)=>{
        setUserData({...userData,[name]:value,});
        switch (name) {
            case 'Email':  
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)? setError({...error,emailError:true}):setError({...error,emailError:false})
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
                case 'ConfirmPassword':  
            if(value !== userData.Password) {
                setError({
                    ...error, 
                    ConfirmPasswordError:true, 
                    ConfirmPasswordSucess:false,
                    conformPasswordErrorMsg:'Your Password Not Match'
                })
            }else{
                setError({
                    ...error, 
                    ConfirmPasswordError:true, 
                    ConfirmPasswordSucess:true,
                    conformPasswordErrorMsg:'Your Password Match'
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
                setConformMail(false)
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
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.994 38.7373C22.9618 40.2423 18.5517 40.4065 14.4187 39.2055C10.2858 38.0044 6.65057 35.5021 4.05306 32.0704C1.45556 28.6387 0.0343675 24.4606 0.000615377 20.1568C-0.0331368 15.8531 1.32235 11.6532 3.86571 8.18117C6.40907 4.70914 10.0046 2.15019 14.1182 0.884447C18.2318 -0.381291 22.6439 -0.286282 26.6992 1.15536C30.7545 2.59701 34.2366 5.30837 36.6281 8.88667C39.0196 12.465 40.1931 16.7193 39.9741 21.0176L34.0487 20.7157C34.2027 17.6925 33.3774 14.7003 31.6953 12.1835C30.0132 9.66672 27.5641 7.7597 24.7119 6.74573C21.8596 5.73175 18.7563 5.66493 15.8631 6.55518C12.9698 7.44543 10.4409 9.24526 8.65204 11.6873C6.86318 14.1293 5.9098 17.0833 5.93354 20.1103C5.95728 23.1374 6.95687 26.076 8.78381 28.4897C10.6107 30.9033 13.1676 32.6633 16.0744 33.5081C18.9813 34.3528 22.0832 34.2373 24.9192 33.1787L26.994 38.7373Z" fill="#7367F0"></path><path d="M36.9387 32.1869C35.9806 33.6719 34 34.0992 32.5149 33.1411C31.0299 32.183 30.6026 30.2024 31.5607 28.7173C32.5188 27.2322 34.4994 26.805 35.9845 27.7631C37.4696 28.7212 37.8968 30.7018 36.9387 32.1869Z" fill="#7367F0"></path>
                    </svg>
                </div>
                <div className="wel_heading mt-4">
                    <h2 className='display-4 fw-medium'>
                        {!conformMail?'Forgot Password? 🔒':'Reset Password 🔒'}
                        
                    </h2>
                </div>
                <p className="wel_desc mt-2">
                    {!conformMail?`Enter your email and we'll send you instructions to reset your password`:`for ${userData.Email}`}
                    
                </p>
            </div>

            <form action="#" className='form_apr' onSubmit={(e)=>{handleSbumit(e)}}>
                {!conformMail?
                <> 
                    <div className="input_wpr"> 
                         <label htmlFor="LoginEmail" className="form-label d-flex justify-content-between align-items-center mb-2"><p className='pe-4'>Email</p> </label>
                        <input type="text" className="form-control" name='Email' id="LoginEmail" placeholder="Enter your email" onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/> 
                        {
                            error.emailError?
                            <div className={`error_text ${error.emailError?'invalid':''}`}><p>{error.emailErrorMsg}</p></div>:''
                        }
                    </div>
                    <div className="form_btn_wpr my-4">
                        <button className='actionBtn btn'>Sign Up</button>
                    </div>
                    <div className="option_liks text-center">
                            <Link to="/" className='d-flex align-items-center justify-content-center'><div className="icon"><RxChevronLeft /></div> Back To Login</Link>
                    </div>
                </>
                :
                <>
                    <div className="input_wpr"> 
                        <label htmlFor="RegisterPass" className="form-label d-flex justify-content-between align-items-center mb-2"><p className='pe-4'>New Password</p></label>
                        <div className="passinput position-relative">
                            <input type={showPass.NewPassword?'text':'password'} name='Password' className="form-control" value={userData.Password} placeholder="Enter New Passwod" onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/> 
                            {!showPass.NewPassword?
                            <div className='icon' onClick={()=>SetShowPass({...showPass,NewPassword:!showPass.NewPassword})}><BsEyeSlash /></div>:
                            <div className='icon' onClick={()=>SetShowPass({...showPass,NewPassword:!showPass.NewPassword})}><BsEye/></div>
                            }  
                        </div>
                        {                    
                            error.PasswordError?
                            <div className={`error_text ${error.PasswordError?'invalid':''} ${error.PasswordSucess?'sucess':''}`}><p>{error.PasswordErrorMsg}</p></div>:'' 
                        
                        }
                    </div>
                    <div className="input_wpr"> 
                        <label htmlFor="RegisterPass" className="form-label d-flex justify-content-between align-items-center mb-2"><p className='pe-4'>Confirm Password</p></label>
                        <div className="passinput position-relative">
                            <input type={showPass.ConfirmPassword?'text':'password'} name='ConfirmPassword' className="form-control" value={userData.ConfirmPassword} placeholder="Enter New Passwod" onChange={(e)=>GetinputVal(e.target.name,e.target.value)}/> 
                            {!showPass.ConfirmPassword?
                            <div className='icon' onClick={()=>SetShowPass({...showPass,ConfirmPassword:!showPass.ConfirmPassword})}><BsEyeSlash /></div>:
                            <div className='icon' onClick={()=>SetShowPass({...showPass,ConfirmPassword:!showPass.ConfirmPassword})}><BsEye/></div>
                            }  
                        </div>
                        {                    
                            error.ConfirmPasswordError?
                            <div className={`error_text ${error.ConfirmPasswordError?'invalid':''} ${error.ConfirmPasswordSucess?'sucess':''}`}><p>{error.conformPasswordErrorMsg}</p></div>:'' 
                        
                        }
                    </div> 

                    <div className="form_btn_wpr my-4">
                        <button className='actionBtn btn'>Sign Up</button>
                    </div>
                </>
                }
            </form> 
            

        </div>
        </div>
    </div>
  )
}

export default ForgotPassWord

 