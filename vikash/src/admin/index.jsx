import React from 'react'


const index = () => {
  return (
      <div className="flex flex-row w-fit">
		
			<div className="flex-row">
				<div className="flex flex-col">
					<div className="flex flex-col bg-white">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Dashboard</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							09 November 2024 
						</p>
					</div>
					<div className="min-h-screen bg-blue-50 w-full w-max px-9">
						<div className="mt-8 grid gap-4 lg:grid-cols-3 sm-grid-cols p-3">
							
							<div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
								<div>
									<div className="text-sm text-gray-400">Check out Today</div>

									<div className="text-3xl font-medium text-gray-600">21</div>
								</div>
								<div className="text-pink-500">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
									  </svg> 
								</div>
							</div>

							<div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
								<div>
									<div className="text-sm text-gray-400">Today</div>

									<div className="text-3xl font-medium text-gray-600">45</div>
								</div>
								<div className="text-pink-500">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
									  </svg> 
								</div>
							</div>

							<div className="flex item-center bg-white rounded shadow-sm justify-between p-5">
								<div>
									<div className="text-sm text-gray-400">Total Properties</div>

									<div className="text-3xl font-medium text-gray-600">2100</div>
								</div>
								<div className="text-pink-500">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
									  </svg>
									   
								</div>
							</div>
						</div>
							<div className="mt-5 grid lg:grid-cols-3 md:grid-cols-3 p-4 gap-3">
								<div className="col-span-2 bg-white p-8 flex-col rounded shadow-sm"><b className="flex flex-row text-gray-500">Property Realease Today</b>
								<canvas className="p-5" id="chartLine"></canvas>
								</div>
								<div className="flex flex-col p-8 bg-white rounded shadow-sm">
									<b className="flex flex-row text-gray-500">Occupancy Percentage</b>
									<canvas className="p-5" id="chartRadar"></canvas>
								</div>
							</div>
						
						<div className="p-4 font-bold text-gray-600">
							clients
						</div>
						<div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
							<div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
								<table>
									<thead><tr>
										<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Name</th>
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
												<a href="" className="text-indigo-600 hover:text-indigo-900">Edit</a>
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
  )
}
export default index