import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return ( 
    <div>
   <div className="flex flex-row">
			
			<div className="flex-auto w-full">
				<div className="flex flex-col">
					<div className="flex flex-col bg-white shadow-lg">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Sattlement</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							Payments
						</p>
					</div>
					<div className="h-screen bg-blue-50 w-full px-74">
						
						<div className="grid gap-3 lg:cols-1 md:cols-1 p-4">
							<div className="col-span-2 flex flex-auto bg-white rounded shadow-sm items-center">
								<table className="px-75">
									
									<div className="w-full">
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
													</div>
												</div>
											</td>
											<td className="px-50 py-4 whitespace-nowrap">
												
											</td>
                      
											<td className="px-6 py-4 whitespace-nowrap  text-green-800">
												50
											</td>
                      <td className="px-6 py-4 whitespace-nowrap">
												
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
  );
};
export default navbar