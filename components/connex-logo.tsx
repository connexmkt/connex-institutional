import Image from "next/image"

interface ConnexLogoProps {
  variant?: "full" | "mark"
  className?: string
  width?: number
  height?: number
}

export function ConnexLogo({ 
  variant = "full", 
  className = "",
  width,
  height 
}: ConnexLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yW6Qt5sYzrM5F6hy79Y3559xogDqz9.png"
        alt="Connex"
        width={width || 40}
        height={height || 40}
        className={`dark:block hidden ${className}`}
        priority
      />
    )
  }

  return (
    <>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-62Ia8SggpMLcKmtSDcsWdcN27VsKye.png"
        alt="Connex"
        width={width || 120}
        height={height || 40}
        className={`dark:hidden block ${className}`}
        priority
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5rB71K10bH0bLWph4cmiHo9H0IUqy7.png"
        alt="Connex"
        width={width || 120}
        height={height || 40}
        className={`dark:block hidden ${className}`}
        priority
      />
    </>
  )
}
