import type { DemoDay } from '../../demo/homeScreenData'
import { SingleDayTaskCard } from '../tasks/SingleDayTaskCard'
import styles from './DayColumn.module.css'

type DayColumnProps = {
  day: DemoDay
}

export function DayColumn({ day }: DayColumnProps) {
  return (
    <div
      className={`${styles.dayColumn} ${day.isToday ? styles.selected : ''}`}
      role="list"
      aria-labelledby={`day-${day.id}`}
    >
      <div className={styles.mobileHeading}>
        <div>
          <span className={styles.mobileEyebrow}>Выбранный день</span>
          <h3>{day.fullDate}</h3>
        </div>
        <span className={styles.mobileLoad}>{day.load}</span>
      </div>

      {day.tasks.length > 0 ? (
        day.tasks.map((task) => (
          <SingleDayTaskCard key={task.id} task={task} />
        ))
      ) : (
        <p className={styles.empty}>Нет отдельных задач</p>
      )}
    </div>
  )
}
