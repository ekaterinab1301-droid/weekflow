import { demoTodayGroups } from '../../demo/homeScreenData'
import { SingleDayTaskCard } from '../tasks/SingleDayTaskCard'
import styles from './TodayPanel.module.css'

export function TodayPanel() {
  return (
    <section className={styles.panel} aria-labelledby="today-title">
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Среда, 15 июля</span>
          <h2 id="today-title">Сегодня</h2>
        </div>
        <span className={styles.summary}>4 активные</span>
      </div>

      <div className={styles.groups}>
        {demoTodayGroups.map((group) => (
          <div className={styles.group} key={group.id}>
            <h3>{group.label}</h3>
            <div className={styles.list} role="list">
              {group.items.map((task) => (
                <SingleDayTaskCard
                  key={task.id}
                  task={task}
                  period={task.period}
                  variant="today"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
