import type { CSSProperties } from 'react'
import type { DemoTask } from '../../demo/homeScreenData'
import { PriorityBadge } from '../../shared/components/PriorityBadge'
import { ProjectMarker } from '../../shared/components/ProjectMarker'
import styles from './SingleDayTaskCard.module.css'

type SingleDayTaskCardProps = {
  task: DemoTask
  period?: string
  variant?: 'week' | 'today'
}

type TaskStyle = CSSProperties & {
  '--project-color': string
  '--project-tint': string
}

export function SingleDayTaskCard({
  task,
  period,
  variant = 'week',
}: SingleDayTaskCardProps) {
  const taskStyle: TaskStyle = {
    '--project-color': task.project.color,
    '--project-tint': task.project.tint,
  }

  const className = [
    styles.card,
    styles[variant],
    task.isCompleted ? styles.completed : '',
    task.isOverdue ? styles.overdue : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={className} style={taskStyle} role="listitem">
      <div className={styles.titleRow}>
        <span className={styles.stateIcon} aria-hidden="true">
          {task.isCompleted ? '✓' : '○'}
        </span>
        <h4 className={styles.title}>{task.title}</h4>
        {variant === 'today' && (
          <PriorityBadge priority={task.priority} compact={false} />
        )}
      </div>

      <div className={styles.meta}>
        <ProjectMarker project={task.project} compact />
        {period && <span className={styles.period}>{period}</span>}
        {variant === 'week' && (
          <PriorityBadge priority={task.priority} compact />
        )}
      </div>

      {task.isOverdue && (
        <span className={styles.overdueLabel}>! Просрочено</span>
      )}
      {task.isCompleted && (
        <span className={styles.completedLabel}>✓ Выполнено</span>
      )}
    </article>
  )
}
