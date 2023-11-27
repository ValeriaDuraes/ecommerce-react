import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icons = [perfil, sacola];

function HeaderIcons() {
  return (
    <ul className='icons'>
      {icons.map((icon) => (
        <li className="iconsOptions"><img src={icon} alt="Icone de perfil" /></li>
      ))}
    </ul>
  )
}

export default HeaderIcons
