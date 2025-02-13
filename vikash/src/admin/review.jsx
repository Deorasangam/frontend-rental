import React from 'react'

const review = () => {
  return (
    <div>
      <div className="flex flex-row">
			
			<div className="flex-auto">
				<div className="flex flex-col">
					<div className="flex flex-col bg-white shadow-lg">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Review</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							Comments
						</p>
					</div>
					<div className="min-h-screen bg-blue-50 px-54">
						
						<div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
							<div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
								<table>
									<div className="w-full"><tr>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>
									</tr></div>
									<div>
										<tr>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="..." ></img>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															Vikash sharma
														</div>
														<div className="text-sm text-gray-500">
															vikash@email.com
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												Good Service....thank you
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-green-100 text-green-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                  </svg>
                                                  </span>
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
												Property Title (test)
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Choose one</a>
											</td>
										</tr>
									</div>
									
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default review
