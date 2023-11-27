import './style.css';
import logo from '../../images/logo.PNG';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo HiveTech" className='logo-img'></img>
    </div>
  )
}

export default Logo;