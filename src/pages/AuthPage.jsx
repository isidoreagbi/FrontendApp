import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

function AuthPage({ type }) {
  return (
    <div>
      {type === 'login' ? <Login /> : <Register />}
    </div>
  );
}

export default AuthPage;
