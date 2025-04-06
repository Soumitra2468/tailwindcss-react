import React from 'react'

function Card({userName, age= 24}) {
    // const userName = props.userName
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-5">
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {userName}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">age = {age}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card
