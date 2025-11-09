import React from 'react'

import defaultAvatar from '../images/avatar.jpg'

export default function Avatar({ src = defaultAvatar, alt = 'Avatar', variant = 'circle', size = 224 }){
  const img = (
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-full"
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.target.onerror = null
        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=5dd3d3&color=fff&size=400`
      }}
    />
  )

  if(variant === 'polaroid'){
    return (
      <figure className="avatar-polaroid" style={{width: size, maxWidth: '100%'}}>
        <div className="polaroid-frame">{img}</div>
        <figcaption className="polaroid-caption">{alt}</figcaption>
      </figure>
    )
  }

  if(variant === 'rounded'){
    return (
      <div className="avatar-rounded" style={{width: size, height: size}}>
        {img}
      </div>
    )
  }

  // default: circle
  return (
    <div className="avatar-circle" style={{width: size, height: size}}>
      {img}
    </div>
  )
}
