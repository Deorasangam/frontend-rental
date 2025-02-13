import React from 'react'
import {Outlet,Link} from 'react-router-dom'

const navbar1 = () => {
  return (
	
	<aside className="flex flex-col bg-gray-50 h-screen justify-between w-60 py-4 px-2">
				<div className="flex items-center justify-between text-gray-600 text-3xl px-5">
					<b>
						<Link to="/index"><img className="w-16" src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="..." height="30" width="30"/></Link>
					</b>
				</div>
				<div className="flex flex-col flex-auto py-2">

					<Link to="/index"><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
							  </svg>
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Dashboard</h4>							  
						</div>
					</div></Link>

					<Link to="/booking"><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Booking</h4>							  
						</div>
					</div></Link>

					<Link to="/add"><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Add New</h4>							  
						</div>
					</div></Link>

					<Link to="/review"><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Review</h4>							  
						</div>
					</div></Link>

					<Link to=""><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Payments</h4>							  
						</div>
					</div></Link>

					<Link to=""><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Setting</h4>							  
						</div>
					</div></Link>

					<Link to=""><div className="p-2 hover:bg-pink-100">
						<div className="flex flex-row space-x-3">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-800" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" classNameName="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
							  </svg>							  
							  <h4 className="font-bold text-gray-500 hover:text-pink-600">Help</h4>							  
						</div>
					</div></Link>
				</div>
				<div className="flex flex-col">
					<button className="rounded-full bg-pink-500 py-1 text-white text-lg">Logout</button>
				</div>
	</aside>
  )
}

export default navbar1
