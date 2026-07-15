import {
  demoDays,
  demoMultiDayTasks,
} from '../../demo/homeScreenData'
import { MultiDayTaskBar } from '../tasks/MultiDayTaskBar'
import { DayColumn } from './DayColumn'
import styles from './WeekOverview.module.css'

const loadClassNames = {
  Свободно: styles.free,
  Спокойно: styles.calm,
  Плотно: styles.busy,
  Перегружено: styles.overloaded,
} as const

export function WeekOverview() {
  return (
    <section className={styles.panel} aria-labelledby="week-title">
      <div className={styles.sectionHeader}>
        <div>
          <span className={styles.eyebrow}>Главный обзор</span>
          <h2 id="week-title">Вся неделя</h2>
        </div>
        <p>13–19 июля · 12 задач</p>
      </div>

      <div className={styles.weekFrame}>
        <div className={styles.dayHeaders}>
          {demoDays.map((day) => (
            <div
              key={day.id}
              id={`day-${day.id}`}
              className={`${styles.dayHeader} ${day.isToday ? styles.today : ''}`}
              aria-current={day.isToday ? 'date' : undefined}
              aria-label={`${day.fullDate}. Загрузка: ${day.load}`}
            >
              <div className={styles.dateRow}>
                <span className={styles.dayName}>{day.name}</span>
                <span className={styles.date}>{day.date}</span>
              </div>
              {day.isToday && <span className={styles.todayLabel}>Сегодня</span>}
              <span
                className={`${styles.load} ${loadClassNames[day.load]}`}
              >
                <span className={styles.fullLoad}>{day.load}</span>
                <span className={styles.shortLoad}>{day.shortLoad}</span>
              </span>
            </div>
          ))}
        </div>

        <div className={styles.multiDayArea}>
          <div className={styles.gridLines} aria-hidden="true">
            {demoDays.map((day) => (
              <span key={day.id} />
            ))}
          </div>
          <div
            className={styles.multiDayGrid}
            role="list"
            aria-label="Многодневные задачи"
          >
            {demoMultiDayTasks.map((task) => (
              <MultiDayTaskBar key={task.id} task={task} />
            ))}
          </div>
        </div>

        <div className={styles.taskColumns}>
          {demoDays.map((day) => (
            <DayColumn key={day.id} day={day} />
          ))}
        </div>
      </div>
    </section>
  )
}
