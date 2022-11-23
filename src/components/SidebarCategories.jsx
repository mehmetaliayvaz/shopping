function SidebarCategories(props) {
  const categories = [
    { title: 'Elektronik', slug: '/' },
    { title: 'Moda', slug: '/' },
    { title: 'Kırtasiye & Ofis', slug: '/' },
    { title: 'Oyuncak', slug: '/' },
    { title: 'Kozmetik', slug: '/' },
    { title: 'Hobi', slug: '/' },
    { title: 'Süpermarket', slug: '/' },
    { title: 'Spor', slug: '/' },
    { title: 'Ev & Mobilya', slug: '/' },
    { title: 'Züccaciye & Mutfak', slug: '/' },
    { title: 'Ayakkabı & Çanta', slug: '/' },
    { title: 'Saat & Aksesuar', slug: '/' },
    { title: 'Kitap', slug: '/' },
  ]


  return (
    <div className={'bg-white shadow-md rounded ' + props.className}>
      <ul className="text-sm font-medium py-2">
        {categories.map((category, index) => (
          <li key={index} className="hover:bg-gray-100 transition-colors">
            <a href={category.slug} className="flex py-3 px-5">
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarCategories