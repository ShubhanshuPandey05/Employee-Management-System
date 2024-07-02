import React, { useEffect } from 'react'
import SignUpComponent from '../components/addEmployeeComponent'
import { useAuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const { isAuth } = useAuthContext();
  const navigator = useNavigate();
  function onclick() {
    navigator("/")
  }
  return (

    <>
    <span onClick={onclick} className='font-bold absolute left-20 top-10 cursor-pointer'>←&nbsp; back</span>
      <SignUpComponent />
    </>

  )
}
