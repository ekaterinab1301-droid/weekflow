import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('показывает три основные зоны главного экрана', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'WeekFlow' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Вся неделя' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Сегодня' })).toBeTruthy()
    expect(
      screen.getByRole('heading', { name: 'Быстрое добавление' }),
    ).toBeTruthy()
  })

  it('показывает семь дней и две непрерывные многодневные задачи', () => {
    render(<App />)

    expect(
      screen.getByLabelText('Понедельник, 13 июля. Загрузка: Плотно'),
    ).toBeTruthy()
    expect(
      screen.getByLabelText('Воскресенье, 19 июля. Загрузка: Спокойно'),
    ).toBeTruthy()
    expect(screen.getAllByTestId('multi-day-task')).toHaveLength(2)
    expect(
      screen.getByLabelText(/продолжение на следующей неделе/),
    ).toBeTruthy()
  })

  it('передает состояния задачи не только цветом', () => {
    render(<App />)

    expect(screen.getAllByText('! Просрочено').length).toBeGreaterThan(0)
    expect(screen.getAllByText('✓ Выполнено').length).toBeGreaterThan(0)
    expect(
      screen.getAllByLabelText('Приоритет: высокий').length,
    ).toBeGreaterThan(0)
  })

  it('безопасно демонстрирует быстрое добавление без сохранения данных', () => {
    render(<App />)

    fireEvent.change(screen.getByPlaceholderText('Записать мысль…'), {
      target: { value: 'Проверить новую мысль' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Добавить' }))

    expect(
      screen.getByText('Функция будет доступна на следующем этапе'),
    ).toBeTruthy()
    expect(screen.getByDisplayValue('Проверить новую мысль')).toBeTruthy()
  })

  it('сохраняет компактные входы во вспомогательные разделы', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /Входящие/ })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Проекты' })).toBeTruthy()
  })
})
