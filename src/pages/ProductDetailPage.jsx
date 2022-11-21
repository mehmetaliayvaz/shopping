function ProductDetailPage() {
  const productSm = Array.from({ length: 4 })

  return (
    <div className="page-wrapper">
      
      <section>
        <div className="container">
          <div className="flex gap-8">
            <div className="w-1/12 space-y-4">
              {
                productSm.map((el, index) => (
                  <div className="bg-white aspect-square border border-gray-100 p-3">
                    <img src="/img/product-detail.png" className="w-full h-full object-cover" alt="" />
                  </div>
                ))
              }
            </div>
            <div className="w-5/12 bg-white border border-gray-100 aspect-square p-10">
            <img src="/img/product-detail.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-6/12">
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductDetailPage