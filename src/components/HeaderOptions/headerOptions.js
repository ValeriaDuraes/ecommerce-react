const categories = ['Artigos Recentes', 'Dicas', 'Mais Vistos'];

function HeaderOptions() {
  return (
    <ul className='options'>
          {categories.map((category) => (
            <li className='categoryOptions'>{category}</li>
          ) )}
    </ul>
  )
}

export default HeaderOptions;
