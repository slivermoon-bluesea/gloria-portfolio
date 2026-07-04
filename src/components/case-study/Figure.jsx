function Figure({ src, alt, mainCaption, subCaption, overlayLabel, aspectRatio = '21/9' }) {
  return (
    <figure className="flex flex-col gap-[var(--text-gap)]">
      <div
        className="relative w-full rounded-card overflow-hidden bg-bg-card-darker"
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {overlayLabel && (
          <span className="absolute top-[16px] right-[16px] font-medium uppercase font-body text-caption tracking-[var(--letter-spacing-wide)] text-text-primary">
            {overlayLabel}
          </span>
        )}
      </div>

      {(mainCaption || subCaption) && (
        <figcaption className="flex flex-col gap-[4px]">
          {mainCaption && (
            <span className="font-medium font-body text-body text-accent-gold">
              {mainCaption}
            </span>
          )}
          {subCaption && (
            <span className="font-normal font-body text-body text-text-secondary">
              {subCaption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
