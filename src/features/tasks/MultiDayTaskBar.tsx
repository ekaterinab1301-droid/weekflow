import type { CSSProperties } from 'react'
import type { DemoMultiDayTask } from '../../demo/homeScreenData'
import { PriorityBadge } from '../../shared/components/PriorityBadge'
import styles from './MultiDayTaskBar.module.css'

type MultiDayTaskBarProps = {
  task: DemoMultiDayTask
}

type BarStyle = CSSProperties & {
  '--project-color': string
  '--project-tint': string
}

export function MultiDayTaskBar({ task }: MultiDayTaskBarProps) {
  const barStyle: BarStyle = {
    '--project-color': task.project.color,
    '--project-tint': task.project.tint,
    gridColumn: `${task.startColumn} / span ${task.span}`,
    gridRow: task.row,
  }

  return (
    <article
      className={`${styles.bar} ${task.continuesAfter ? styles.continues : ''}`}
      style={barStyle}
      role="listitem"
      data-testid="multi-day-task"
      aria-label={`${task.title}, проект ${task.project.name}, период ${task.period}${task.continuesAfter ? ', продолжение на следующей неделе' : ''}`}
    >
      <span className={styles.projectLine} aria-hidden="true" />
      <span className={styles.content}>
        <span className={styles.title}>{task.title}</span>
        <span className={styles.project}>{task.project.name}</span>
      </span>
      <PriorityBadge priority={task.priority} compact />
      {task.continuesAfter && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </article>
  )
}
