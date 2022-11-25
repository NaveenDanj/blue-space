import React from 'react'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from '@mui/material';

function Register() {
  return (
    <div className='w-full h-[100vh] flex justify-center'>
        <div className='mt-10'>
            <div className=' mx-auto flex justify-center'>
                <div>
                    <HomeWorkOutlinedIcon sx={{ fontSize: 40 }} className='mt-[-8px]' />
                    <label className='text-2xl font-bold ml-3'>Blue Space</label>
                </div>
            </div>

            <div className='mt-10'>
                <center>
                    <h1 className=' text-5xl font-bold' >First, enter your email</h1>
                </center>
                <center className='mt-3'>
                    <label className=' font-semibold'>We suggest using the email address you use at work.</label>
                </center>

                <div className='mx-5 mt-10'>

                    <TextField
                        size="small"
                        className="text-white w-full mb-5"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="name@work-email.com"
                    />

                    <div className='mt-5'></div>

                    <Button variant="contained" className='w-full' color="primary" autoFocus>
                        Continue
                    </Button>

                </div>

                <div className='flex mt-5 mx-5'>
                    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" , width : '100%' }}></div>
                    <label className=' relative top-2 mx-2'>Or</label>
                    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" , width : '100%' }}></div>
                </div>

                <div className='mb-5'></div>

                <div className='mt-5 mx-5'>

                    <div className='mt-5'></div>

                    <Button variant="outlined" className='w-full' color="primary" autoFocus>
                        Continue With Google
                    </Button>

                    <div className='mb-6'></div>

                    <Button variant="outlined" className='w-full' color="primary" autoFocus>
                        Continue With Facebook
                    </Button>
                </div>

                <div className='mt-7 mx-5 flex justify-center'>
                    <div className='flex flex-col'>
                        <center>
                            <label className=''>Already using Blue Space?</label>
                        </center>
                        <center>
                            <Link className=' cursor-pointer'>Sign in to an existing workspace</Link>
                        </center>
                    </div>
                </div>

            
            </div>


        </div>
    </div>
  )
}

export default Register