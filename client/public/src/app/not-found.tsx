export default function NotFoundPage() {
	return (
		<>
			<div className='flex w-full h-screen bg-center bg-no-repeat bg-cover bg-pes-ecc'>
				<div className='flex flex-col items-center justify-center w-full px-12 bg-white bg-opacity-80'>
					<div className='flex flex-wrap justify-center w-full'>
						<span className='px-2 py-1 my-4 font-bold text-white bg-blue-800 rounded-md text-8xl w-fit'>
							404
						</span>
						<p className='w-full my-4 text-4xl font-bold text-center text-gray-800'>
							Page not found
						</p>
					</div>
					<span className='fixed m-3 text-sm text-gray-500 bottom-5'>
						Copyright ©️ PES University, Bengaluru, India
					</span>
				</div>
			</div>
		</>
	);
}
