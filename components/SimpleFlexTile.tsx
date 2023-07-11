import React from 'react'


const SimpleFlexTile = ({ title, description}:{title: string, description: string}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-600 rounded-lg p-10">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-white text-xl flex-wrap">{description}</p>
        </div>
    )
}

export default SimpleFlexTile