interface TagProps {
  label: string
  className?: string
}

export function Tag({ label, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200 ${className}`}
    >
      {label}
    </span>
  )
}
