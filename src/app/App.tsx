import { QuickAddPanel } from '../features/quick-add/QuickAddPanel'
import { TodayPanel } from '../features/today/TodayPanel'
import { WeekOverview } from '../features/week/WeekOverview'
import { AppHeader } from './AppHeader'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.workspace}>
        <div className={styles.weekZone}>
          <WeekOverview />
        </div>
        <div className={styles.quickAddZone}>
          <QuickAddPanel />
        </div>
        <div className={styles.todayZone}>
          <TodayPanel />
        </div>
      </main>
    </div>
  )
}
