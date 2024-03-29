import LogoIcon from "../../assets/images/logo.icon";

export default function FooterComponent() {
	return (
		<footer className='color-seplag mt-14'>

			<div className='mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>

				<div className='mb-16 md:mb-10'>
					<a href='https://www.seplag.ce.gov.br/' className='flex items-center'>
						<LogoIcon width={250} height={45}/>
					</a>

				</div>

				<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
					<div>
						<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Serviços</h2>
						<ul className='text-gray-500 dark:text-gray-400 font-medium'>
							<li className='mb-4'>
								<a href='https://www.seplag.ce.gov.br/acesso-a-sistemas/' className='hover:underline'>Acesso a Sistemas</a>
							</li>
							<li className='mb-4'>
								<a href='http://www.casacivil.ce.gov.br/diario-oficial/' className='hover:underline'>Diário Oficial</a>
							</li>
							<li>
								<a href='http://s2gpr.sefaz.ce.gov.br/licita-web/paginas/licita/PublicacaoList.seam/' className='hover:underline'>Carta de Serviços do Cidadão</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Acesso Rápido</h2>
						<ul className='text-gray-500 dark:text-gray-400 font-medium'>
							<li className='mb-4'>
								<a href='https://www.seplag.ce.gov.br/acesso-a-sistemas/' className='hover:underline'>Acesso a Sistemas</a>
							</li>
							<li>
								<a href='https://www.al.ce.gov.br/' className='hover:underline'>Legislação Estadual</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Acesso Rápido SEPLAG</h2>
						<ul className='text-gray-500 dark:text-gray-400 font-medium'>
							<li className='mb-4'>
								<a href='https://www.seplag.ce.gov.br/telefones/' className='hover:underline'>Telefones</a>
							</li>
							<li className='mb-4'>
								<a href='http://web3.seplag.ce.gov.br/guardiao3cliente/Login.aspx' className='hover:underline'>Servidor Online</a>
							</li>
							<li className=''>
								<a href='http://172.27.37.196/intranet/' className='hover:underline'>Intranet</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2024 <a href='https://www.airtonfilhodev.com.br/' className='hover:underline'>AF Software Enginner</a>. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
}
