import React from 'react';

function ImageCard({ image }) {
    // const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.picture.large} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          <span className='text-base text-purple-600'>Photo by- </span>{image.name.first+" "+image.name.last}
        </div>
        <ul>
          <li>
            <strong>Gender: </strong>
            {image.gender}
          </li>
          {/* <li className='flex'>
            <strong>Email: </strong>
            {image.email}
          </li> */}
          <li>
            <strong>Phone: </strong>
            {image.phone}
          </li>
          <li>
            <strong>City: </strong>
            {image.location.city}
          </li>
          <li>
            <strong>Country: </strong>
            {image.location.country}
          </li>
        </ul>
      </div>
      {/* <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {tag}
        </span>
        ))}
      </div> */}
    </div>
  )
}

export default ImageCard;