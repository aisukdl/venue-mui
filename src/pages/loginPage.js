import LoginLayout from '../layouts/LoginLayout';
import LoginForm from '../components/LoginForm';

const welcomeSection = {
    text : "Hi, Welcome back",
    image : {
        src:'https://minimal-kit-react.vercel.app/assets/illustrations/illustration_login.png',
        alt: 'login-illust'
    }
}

function LoginPage() {
  return (
    <LoginLayout welcomeText={welcomeSection.text} welcomeImage={welcomeSection.image}>
        <LoginForm />
    </LoginLayout>
  );
}

export default LoginPage;