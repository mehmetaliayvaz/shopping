function SidebarCategories(props) {
  const categories = [
    { title: 'Elektronik', slug: '/category/elektronik' },
    { title: 'Moda', slug: '/category/moda' },
    { title: 'Kırtasiye & Ofis', slug: '/category/kirtasiye-ofis' },
    { title: 'Oyuncak', slug: '/category/oyuncak' },
    { title: 'Kozmetik', slug: '/category/kozmetik' },
    { title: 'Hobi', slug: '/category/hobi' },
    { title: 'Süpermarket', slug: '/category/supermarket' },
    { title: 'Spor', slug: '/category/spor' },
    { title: 'Ev & Mobilya', slug: '/category/ev-mobilya' },
    { title: 'Züccaciye & Mutfak', slug: '/category/zuccaciye-mutfak' },
    { title: 'Ayakkabı & Çanta', slug: '/category/ayakkabi-canta' },
    { title: 'Saat & Aksesuar', slug: '/category/saat-aksesuar' },
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