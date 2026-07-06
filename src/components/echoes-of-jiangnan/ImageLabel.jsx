function ImageLabel({ children, position = 'bottom-right' }) {
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  }

  return (
    <span
      className={`absolute ${positionClasses[position]} font-body font-normal text-caption uppercase pointer-events-none`}
      style={{
        color: 'rgba(255,255,255,0.7)',
        letterSpacing: '0.15em'
      }}
    >
      {children}
    </span>
  )
}

export default ImageLabel
