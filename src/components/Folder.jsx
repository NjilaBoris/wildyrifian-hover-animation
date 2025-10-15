import React from 'react'

const variantBgMap = {
  'variant-1': 'bg-[var(--variant-1)]',
  'variant-2': 'bg-[var(--variant-2)]',
  'variant-3': 'bg-[var(--variant-3)]',
}

const disabledBg = 'bg-[var(--disabled-folder-bg)]'
const disabledText = 'text-[var(--disabled-folder-fg)]'

function Folder({ variant = 'variant-1', index = '01', title = '', images = [], disabled = false, className = '' }) {
  const bgClass = disabled ? disabledBg : (variantBgMap[variant] || variantBgMap['variant-1'])
  const textClass = disabled ? disabledText : ''

  return (
    <div className={`relative flex-1 h-[200px] flex flex-col cursor-pointer ${className}`}>
      {/* Hover previews */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[25rem] h-full">
        {images.slice(0, 3).map((src, i) => (
          <div
            key={i}
            className={`absolute top-1/2 w-[8rem] h-[12rem] ${
              i === 0 ? 'left-[20%] [transform-origin:top_left]' : i === 1 ? 'left-1/2 [transform-origin:center]' : 'left-[80%] [transform-origin:top_right]'
            }`}
          >
            <img src={src} alt="preview" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Main folder body */}
      <div className="relative w-full h-full will-change-transform">
        <div className={`relative w-[40%] p-3 ${bgClass}`}>
          <p className={`uppercase text-[0.8rem] font-medium leading-none transition-colors duration-200 ${textClass}`}>{index}</p>
          {/* triangle notch */}
          <span className={`absolute top-0 left-[99%] h-[101%] aspect-[1/1] ${bgClass} [clip-path:polygon(0_0,25%_0,100%_100%,0%_100%)]`} />
        </div>
        <div className={`w-full h-full flex items-start pl-8 pr-1 ${bgClass}`}>
          <h1 className={`text-[2.75rem] font-normal leading-none transition-colors duration-200 ${textClass}`}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Folder
