import React from 'react'

const VARIANT_COLORS = {
  'variant-1': 'var(--variant-1)',
  'variant-2': 'var(--variant-2)',
  'variant-3': 'var(--variant-3)'
}

const DISABLED_BG = 'var(--disabled-folder-bg)'
const DISABLED_FG = 'var(--disabled-folder-fg)'

function Folder({
  variant = 'variant-1',
  index = '',
  title = '',
  images = [],
  disabled = false,
  className = ''
}) {
  const color = VARIANT_COLORS[variant] || VARIANT_COLORS['variant-1']
  const bgColor = disabled ? DISABLED_BG : color
  const textColor = disabled ? DISABLED_FG : 'inherit'

  return (
    <div className={`relative flex-1 h-[200px] flex flex-col cursor-pointer ${className}`}>
      {/* Floating preview images (hidden on small screens as in CSS) */}
      <div className="absolute top-0 left-0 w-[25rem] h-full pointer-events-none max-[1000px]:hidden">
        {images.slice(0, 3).map((src, i) => (
          <div
            key={i}
            className="absolute top-1/2 w-32 h-48"
            style={{
              left: i === 0 ? '20%' : i === 1 ? '50%' : '80%',
              transformOrigin: i === 0 ? 'top left' : i === 1 ? 'center' : 'top right'
            }}
          >
            <img src={src} alt="preview" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Folder body */}
      <div className="relative w-full h-full will-change-transform">
        {/* Index tab with angled after element */}
        <div className="relative w-[40%] p-3" style={{ backgroundColor: bgColor }}>
          <p className="uppercase text-[0.8rem] font-medium leading-none" style={{ color: textColor }}>{index}</p>
          <span
            aria-hidden
            className="absolute top-0"
            style={{
              left: '99%',
              height: '101%',
              aspectRatio: '1 / 1',
              clipPath: 'polygon(0 0, 25% 0, 100% 100%, 0% 100%)',
              backgroundColor: bgColor
            }}
          />
        </div>

        {/* Name bar */}
        <div
          className="w-full h-full flex items-start px-1 pl-8 max-[1000px]:px-8 max-[1000px]:pb-8"
          style={{ backgroundColor: bgColor }}
        >
          <h1 className="text-[2.75rem] font-normal max-[1000px]:text-[2rem]" style={{ color: textColor }}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Folder
