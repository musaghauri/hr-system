import LoginContainer from '@redux/Auth/Login';
function LoginPage({ onSuccess }) {
  return <div><LoginContainer onSuccess={onSuccess} /> </div>
}

export default LoginPage
