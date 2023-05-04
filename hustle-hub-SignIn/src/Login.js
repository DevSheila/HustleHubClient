import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="login">
        <h2>Sign In</h2>
        <br></br>
        <p>We will send you an <b>One Time Password(OTP)</b> on this mobile number.</p>

        <br></br>
        Enter mobile no.
        <br></br>
        <br></br>
            <input style={{ 
          width: '200px', 
          height: '30px',
          
        }}>
         </input>
         <br></br>
         <br></br>
        <Link to="/otp">
      <button style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '5px',
          height: '30px' 
        }}>Send OTP</button>
    </Link>

    <p>Don't have an account? <a href="/" style={{ 
          textDecoration: 'none',
          color: '#f1356d',
         
        }}>Sign Up</a></p>
      </div>
    );
  }
  
  export default Login;