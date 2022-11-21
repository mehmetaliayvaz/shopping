import ProductSlider from "../components/ProductSlider"

function ProductDetailPage() {
  const productSm = Array.from({ length: 4 })

  return (
    <div className="page-wrapper">
      
      <section className="mb-[100px]">
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
            <div className="w-6/12 px-4">
              <div>
                <h1 className="font-semibold text-xl mb-8">
                  LG 55UP77006 55" 139 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV
                </h1>
              </div>
              <div className="mb-8 flex items-center">
                <span className="font-semibold text-3xl mr-10">14890 TL</span>
                <div className="text-sm flex shadow-md">
                  <button className="bg-gray-300 w-6 h-6 flex justify-center items-center">-</button>
                  <div className="w-10 flex items-center justify-center">3</div>
                  <button className="bg-gray-300 w-6 h-6 flex justify-center items-center">+</button>
                </div>
              </div>
              <div className="mb-8">
                <button className="btn-primary px-8 py-2">
                  Sepete Ekle
                </button>
              </div>
              <div>
                <p className="text-sm">
                  Televizyon üretiminde ve tasarımında öncü bir marka olan LG tarafından üretilen, bir televizyon olan LG 55UP77006LB 55" 
                  139 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV birçok anlamda yenilik barındıran LG televizyon ile izLEDiğiniz içeriklerden 
                  daha fazla keyif alabilirsiniz. Boyut ve teknik özellikler bakımından kullanıcısına birçok yenilik sunan LG televizyon ile en
                  sevdiğiniz içerikleri kaliteli bir ekran aracılığı ile seyretme şansı bulabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider />

    </div>
  )
}

export default ProductDetailPage