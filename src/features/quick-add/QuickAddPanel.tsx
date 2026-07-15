import { useState, type FormEvent } from 'react'
import styles from './QuickAddPanel.module.css'

export function QuickAddPanel() {
  const [draft, setDraft] = useState('')
  const [message, setMessage] = useState('')

  const showStageMessage = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    if (!draft.trim()) {
      setMessage('Введите мысль, чтобы увидеть демонстрацию действия')
      return
    }

    setMessage('Функция будет доступна на следующем этапе')
  }

  return (
    <section className={styles.panel} aria-labelledby="quick-add-title">
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Сохранить за 10 секунд</span>
          <h2 id="quick-add-title">Быстрое добавление</h2>
        </div>
        <span className={styles.keyboardHint}>Enter</span>
      </div>

      <form className={styles.form} onSubmit={showStageMessage}>
        <label className={styles.label} htmlFor="quick-add-input">
          Новая запись
        </label>
        <input
          id="quick-add-input"
          value={draft}
          onChange={(event) => {
            setDraft(event.target.value)
            setMessage('')
          }}
          placeholder="Записать мысль…"
          autoComplete="off"
        />
        <div className={styles.actions}>
          <button className={styles.primaryButton} type="submit">
            Добавить
          </button>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={() => showStageMessage()}
          >
            Добавить детали
          </button>
        </div>
        <p className={styles.message} aria-live="polite" role="status">
          {message || 'Демонстрационный режим — данные не сохраняются'}
        </p>
      </form>
    </section>
  )
}
