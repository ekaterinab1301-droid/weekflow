import type { DemoPriority } from '../../demo/homeScreenData'
import styles from './PriorityBadge.module.css'

type PriorityBadgeProps = {
  priority: DemoPriority
  compact?: boolean
}

const priorityContent = {
  high: { symbol: '!!', label: 'Высокий' },
  medium: { symbol: '!', label: 'Средний' },
  low: { symbol: '↓', label: 'Низкий' },
} as const

export function PriorityBadge({
  priority,
  compact = false,
}: PriorityBadgeProps) {
  if (priority === 'none') {
    return null
  }

  const content = priorityContent[priority]

  return (
    <span
      className={`${styles.badge} ${styles[priority]}`}
      aria-label={`Приоритет: ${content.label.toLowerCase()}`}
      title={`Приоритет: ${content.label.toLowerCase()}`}
    >
      <span aria-hidden="true">{content.symbol}</span>
      {!compact && <span>{content.label}</span>}
    </span>
  )
}
