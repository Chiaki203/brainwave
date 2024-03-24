import Link from 'next/link'
import ButtonSvg from './svg/ButtonSvg'

type ButtonProps = {
  className?: string
  href?: string
  white?: boolean
  children: React.ReactNode
  px?: string
  onClick?: () => void
}

const Button = ({
  className,
  href,
  children,
  white,
  px,
  onClick = () => {},
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
  const spanClasses = 'relative z-10'
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )
  const renderLink = () => (
    <Link href={href || ''} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  )
  return href ? renderLink() : renderButton()
}

export default Button
