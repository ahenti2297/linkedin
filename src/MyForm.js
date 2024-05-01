import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './MyForm.css';


export default function MyForm(){
    return(
        <>
        <div>
            <form className="login-data" >
                <div className='datain'>
                    <h1>Welcome to your professional community</h1>                    
                    <Box className='gapText'
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div className='emailprop'>
                    <p>Email or phone</p>
                    <TextField className="loginText" id="outlined-basic" label="" variant="outlined"/>
                    </div>
                    <div className='passprop'>
                    <p>Password</p>
                    <TextField className="loginText" id="outlined-basic" label="" variant="outlined" placeholder='show'/>
                    </div>
                    <div className='forgot'>
                    <p>Forgot password?</p>
                    </div>
                    </Box>
                    <div className="signIn-btn">
                    <Button variant="outlined">Sign in</Button>
                    </div>
                    
                    <div className='orOption'>
                        <div className='box1'></div>
                            <div className='circle' > 
                            or
                            </div>
                        
                    </div>
                    <div  className='agreement'>
                        <p>By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
                    </div>
                </div>    
                <div><img src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png" alt=''/>  </div>      
            </form>
        </div>
        </>
    )
};