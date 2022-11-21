function SidebarCategories() {
  const categories = [
    { title: 'Elektronik', slug: '/' },
    { title: 'Moda', slug: '/' },
    { title: 'Kırtasiye', slug: '/' },
    { title: 'Oyuncak', slug: '/' },
    { title: 'Kozmetik', slug: '/' },
    { title: 'Hobi', slug: '/' },
    { title: 'Süpermarket', slug: '/' },
    { title: 'Spor', slug: '/' },
    { title: 'Mobilya', slug: '/' },
    { title: 'Züccaciye', slug: '/' },
  ]


  return (
    <div className="bg-white shadow-md rounded">
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