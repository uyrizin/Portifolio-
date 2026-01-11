import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
  outline:
    'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', asChild, children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible-ring disabled:opacity-50 disabled:pointer-events-none'
    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

    // Quando usado com asChild, o componente pai (ex: Link) deve aplicar as classes
    if (asChild) {
      return <>{children}</>
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
