import React from 'react'

const booking = () => {
  return (
    <div>
      <div className="flex flex-row w-xl w-full">
			
			<div className="flex-auto">
				<div className="flex flex-col">
					<div className="flex flex-col bg-white shadow-lg">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Booking</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							Clients
						</p>
					</div>
					<div className="min-h-screen bg-blue-50 px-56">
						
						<div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
							<div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
								<table>
									<thead><tr>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th>
									</tr></thead>
									<tbody>
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
												
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
												Customer
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Approv</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Delete</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Update</a>
											</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="..." ></img>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															Sangam Deora
														</div>
														<div className="text-sm text-gray-500">
															congrasi@email.com
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
												Fraud
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Approv</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Delete</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Update</a>
											</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="..." ></img>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">
															Shubham Soni
														</div>
														<div className="text-sm text-gray-500">
															shubham@email.com
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
												Customer
											</td>
											
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Approv</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Delete</a>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<a href="" className="text-indigo-600 hover:text-indigo-900">Update</a>
											</td>
										</tr>
									</tbody>
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

export default booking
