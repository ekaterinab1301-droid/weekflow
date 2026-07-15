import styles from './AppHeader.module.css'

const showStaticMessage = () => {
  // Статический этап: элементы демонстрируют состояние нажатия без навигации.
}

export function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1>WeekFlow</h1>
        <span>Рабочая неделя без лишнего шума</span>
      </div>

      <nav className={styles.weekNavigation} aria-label="Навигация по неделям">
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Предыдущая неделя"
          onClick={showStaticMessage}
        >
          ←
        </button>
        <span className={styles.period}>13–19 июля 2026</span>
        <button
          className={styles.iconButton}
          type="button"
          aria-label="Следующая неделя"
          onClick={showStaticMessage}
        >
          →
        </button>
        <button
          className={styles.todayButton}
          type="button"
          onClick={showStaticMessage}
        >
          Сегодня
        </button>
      </nav>

      <nav className={styles.utilityNavigation} aria-label="Дополнительные разделы">
        <button type="button" onClick={showStaticMessage}>
          Входящие <span className={styles.counter}>3</span>
        </button>
        <button type="button" onClick={showStaticMessage}>
          Проекты
        </button>
      </nav>
    </header>
  )
}
