

const index = () => {
  return (
    
      <div className="flex flex-row px-80">
      
			<div className="flex-auto w-full">
				<div className="flex flex-col">
					<div className="flex flex-col bg-white shadow-lg">
						<div className="flex flex-row space-x-3">
							<h4 className="font-bold text-gray-500 p-1 pl-2">Add Property for Rent</h4>
						</div>
						<p className="text-gray-400 p-1 pl-2">
							New
						</p>
					</div>
                </div>
                    
    <div className="max-w-4xl mx-auto rounded-lg w-full bg-blue-50 px-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6"></h1>
        
        <form action="#" method="POST" enctype="multipart/form-data" className="mb-6 px-10">
            <div className="w-full grid grid-cols-2 min-h-screen bg-white px-10">

                
            <div className="flex flex-col">
                    <label for="location" className="text-sm font-semibold text-gray-600 ml-2">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter location" className="mt-2 ml-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                </div>

                
                <div className="flex flex-col">
                    <label for="propertyType" className="text-sm font-semibold text-gray-600 ml-2">Property Type</label>
                    <select id="propertyType" name="propertyType" className="mt-2 ml-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        <option value="apartment" selected>--Select--</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="PG">PG</option>
                        <option value="Hostel">Hostel</option>
                    </select>
                </div>

                
                <div className="flex flex-col">
                    <label for="price" className="text-sm font-semibold text-gray-600">Price (per month)</label>
                    <input type="number" id="price" name="price" placeholder="Enter price" className="mt-2 mr-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                </div>

                
                <div className="flex flex-col">
                    <label for="location" className="text-sm font-semibold text-gray-600 ml-2">Location</label>
                    <input type="text" id="location" name="location" placeholder="Enter location" className="mt-2 ml-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                </div>

                
                <div className="flex flex-col">
                    <label for="category" className="text-sm font-semibold text-gray-600">Mobile No</label>
                    <input type="number" id="price" name="price" placeholder="Enter Mobile No" className="mt-2 mr-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                </div>

               
                <div className="flex flex-col col-span-2">
                    <label for="description" className="text-sm font-semibold text-gray-600">Description</label>
                    <textarea id="description" name="description" rows="4" placeholder="Enter a description of the property" className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" required></textarea>
                </div>

    
                <div className="flex flex-col col-span-2">
                    <label for="video" className="text-sm font-semibold text-gray-600">Upload Video Proof</label>
                    <input type="file" id="video" name="video" accept="video/*" className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    <span className="text-sm text-gray-500 mt-2">or</span>
                    <input type="text" id="videoUrl" name="videoUrl" placeholder="Enter YouTube/Vimeo URL" className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                    <small className="text-gray-500 text-xs mt-1">You can also provide a URL to a YouTube or Vimeo video.</small>
                </div>

                
                <div className="flex flex-col col-span-2">
                    <label for="mapLocation" className="text-sm font-semibold text-gray-600">Property Location on Map</label>
                    <div id="map" className="w-full h-64 rounded-md bg-gray-200 mt-2"></div>
                    <small className="text-gray-500 text-xs mt-2">Drag the marker to the property location.</small>
                </div>

                
                <div className="flex flex-col col-span-2">
                    <label for="gallery" className="text-sm font-semibold text-gray-600">Property Image Gallery</label>
                    <input type="file" id="gallery" name="gallery[]" multiple className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>

                
                <div className="flex flex-col col-span-2">
                    <label for="floorPlans" className="text-sm font-semibold text-gray-600">Upload Floor Plans</label>
                    <input type="file" id="floorPlans" name="floorPlans[]" multiple className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>

                
                <div className="col-span-2 text-center">
                    <button type="submit" className="w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none">Add Property</button>
                </div>

            </div>
        </form>
    </div>		
			</div>
		</div>
  )
}

export default index
