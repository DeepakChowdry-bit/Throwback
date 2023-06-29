import Link from 'next/link'

export default function Home() {
  return (
    <>

      <section className='h-128 flex flex-col items-center justify-center lg:h-full lg:pt-20 pt-20'>
        <div className='w-11/12 bg-zinc-900 flex flex-col items-center p-6 text-white h-80 justify-center my-4'>
          <h4 className='text-lg'>This Sale is BIG!</h4>
          <h2 className='text-4xl font-bold mb-3'>Up to 50% off</h2>
          <p className='text-center text-base'>Get your favourite pieces-choose from 10000+ styles</p>
        </div>
        <img className='h-96 w-11/12 my-4 object-cover lg:h-full' src="/loro.jpg" alt="" />
      </section>
      <section className="flex flex-col px-2">
        <h2 className="font-bold px-4 my-8 tracking-widest text-base">
          CATEGORIES
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col mx-4 items-center">
            <Link href={'/shirts'}>
              <img
                className="w-24 h-24 rounded-full object-cover lg:w-60 lg:h-60"
                src="/Shirt (2).jpg"
                alt=""
              />
            </Link>
            <h3>Shirts</h3>
          </div>

          <div className="flex flex-col mx-4 items-center">
            <Link href={'/trousers'}>
              <img
                className="w-24 h-24 rounded-full object-cover lg:w-60 lg:h-60"
                src="/Trousers (1).jpg"
                alt=""
              />
            </Link>
            <h3>Trousers</h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-2">
        <h2 className="font-bold px-4 my-8 tracking-widest text-base">
          NEW ARRIVALS
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col mx-2">
            <Link href={'/product'}>
              <img
                className="object-cover lg:w-60 lg:h-60"
                src="/loro2.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-sm font-semibold">Blue Trouser</h3>
            <p className="text-xs">₹799</p>
          </div>
          <div className="flex flex-col mx-2">
            <Link href={'/product'}>
              <img
                className="object-cover lg:w-60 lg:h-60"
                src="/loro3.jpg"
                alt=""
              />
            </Link>
            <h3 className="text-sm font-semibold">White Trouser</h3>
            <p className="text-xs">₹1199</p>
          </div>
        </div>
        <h2 className="w-full text-center my-8 font-semibold px-4 text-sm">SHOW MORE</h2>
      </section>
    </>
  )
}
