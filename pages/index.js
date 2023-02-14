export default function Home() {
	return (
		<div className='p-5 bg-blue-100'>
			<div>
				<h2 className='text-2xl font-bold'>Mobiles</h2>
				<div className='py-4'>
					<div className='w-64 bg-white p-5 rounded-xl'>
						<div>
							<img
								src='products_img/edge.jpg'
								alt=''
							/>
						</div>
						<div className='mt-2'>
							<h3 className='font-bold text-lg'>Molo Edge</h3>
						</div>
						<p className='text-sm mt-2 leading-4'>
							The motorola edge 30 pro features the Ready For platform, where
							you can plug your smartphone into a TV or monitor to amplify all
							features.
						</p>
						<div className='flex  mt-3 mb-2'>
							<p className='font-bold text-2xl grow'>$ 800</p>
							<button className='bg-emerald-400 text-white px-4 rounded-md py-1'>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
