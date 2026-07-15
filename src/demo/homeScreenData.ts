export type DemoPriority = 'high' | 'medium' | 'low' | 'none'

export type DemoProject = {
  name: string
  color: string
  tint: string
}

export type DemoTask = {
  id: string
  title: string
  project: DemoProject
  priority: DemoPriority
  isCompleted?: boolean
  isOverdue?: boolean
}

export type DemoDay = {
  id: string
  name: string
  date: string
  fullDate: string
  load: 'Свободно' | 'Спокойно' | 'Плотно' | 'Перегружено'
  shortLoad: string
  isToday?: boolean
  tasks: DemoTask[]
}

export type DemoMultiDayTask = DemoTask & {
  startColumn: number
  span: number
  row: number
  period: string
  continuesAfter?: boolean
}

export type DemoTodayGroup = {
  id: string
  label: string
  items: Array<DemoTask & { period?: string }>
}

export const demoProjects = {
  northWind: {
    name: 'Северный ветер',
    color: '#3267d6',
    tint: '#eaf0fc',
  },
  personalFocus: {
    name: 'Личный фокус',
    color: '#2e7d4f',
    tint: '#e8f3ec',
  },
  designCourse: {
    name: 'Курс по дизайну',
    color: '#7651b5',
    tint: '#f0eaf8',
  },
  workRhythm: {
    name: 'Рабочий ритм',
    color: '#0b7f79',
    tint: '#e5f4f2',
  },
} satisfies Record<string, DemoProject>

const tasks = {
  agreeStructure: {
    id: 'agree-structure',
    title: 'Согласовать структуру обзора',
    project: demoProjects.northWind,
    priority: 'high',
    isOverdue: true,
  },
  sortNotes: {
    id: 'sort-notes',
    title: 'Разобрать рабочие заметки',
    project: demoProjects.workRhythm,
    priority: 'low',
  },
  checkCourse: {
    id: 'check-course',
    title: 'Проверить материалы курса',
    project: demoProjects.designCourse,
    priority: 'medium',
  },
  prepareQuestions: {
    id: 'prepare-questions',
    title: 'Подготовить вопросы к встрече',
    project: demoProjects.northWind,
    priority: 'none',
  },
  sendDraft: {
    id: 'send-draft',
    title: 'Отправить черновик обзора',
    project: demoProjects.northWind,
    priority: 'high',
  },
  interfacePractice: {
    id: 'interface-practice',
    title: 'Практика по интерфейсам',
    project: demoProjects.designCourse,
    priority: 'low',
  },
  prepareMeeting: {
    id: 'prepare-meeting',
    title: 'Подготовиться к созвону',
    project: demoProjects.workRhythm,
    priority: 'medium',
  },
  groceries: {
    id: 'groceries',
    title: 'Купить продукты на ужин',
    project: demoProjects.personalFocus,
    priority: 'none',
    isCompleted: true,
  },
  updateNotes: {
    id: 'update-notes',
    title: 'Обновить рабочие заметки',
    project: demoProjects.workRhythm,
    priority: 'low',
  },
  planNextWeek: {
    id: 'plan-next-week',
    title: 'Спланировать следующую неделю',
    project: demoProjects.personalFocus,
    priority: 'medium',
  },
  longWalk: {
    id: 'long-walk',
    title: 'Длинная прогулка',
    project: demoProjects.personalFocus,
    priority: 'none',
  },
} satisfies Record<string, DemoTask>

export const demoDays: DemoDay[] = [
  {
    id: 'monday',
    name: 'Пн',
    date: '13',
    fullDate: 'Понедельник, 13 июля',
    load: 'Плотно',
    shortLoad: 'Плотно',
    tasks: [tasks.agreeStructure, tasks.sortNotes],
  },
  {
    id: 'tuesday',
    name: 'Вт',
    date: '14',
    fullDate: 'Вторник, 14 июля',
    load: 'Плотно',
    shortLoad: 'Плотно',
    tasks: [tasks.checkCourse, tasks.prepareQuestions],
  },
  {
    id: 'wednesday',
    name: 'Ср',
    date: '15',
    fullDate: 'Среда, 15 июля',
    load: 'Перегружено',
    shortLoad: 'Перегр.',
    isToday: true,
    tasks: [
      tasks.sendDraft,
      tasks.interfacePractice,
      tasks.prepareMeeting,
      tasks.groceries,
    ],
  },
  {
    id: 'thursday',
    name: 'Чт',
    date: '16',
    fullDate: 'Четверг, 16 июля',
    load: 'Свободно',
    shortLoad: 'Свободно',
    tasks: [],
  },
  {
    id: 'friday',
    name: 'Пт',
    date: '17',
    fullDate: 'Пятница, 17 июля',
    load: 'Плотно',
    shortLoad: 'Плотно',
    tasks: [tasks.updateNotes, tasks.planNextWeek],
  },
  {
    id: 'saturday',
    name: 'Сб',
    date: '18',
    fullDate: 'Суббота, 18 июля',
    load: 'Спокойно',
    shortLoad: 'Спок.',
    tasks: [tasks.longWalk],
  },
  {
    id: 'sunday',
    name: 'Вс',
    date: '19',
    fullDate: 'Воскресенье, 19 июля',
    load: 'Спокойно',
    shortLoad: 'Спок.',
    tasks: [],
  },
]

export const demoMultiDayTasks: DemoMultiDayTask[] = [
  {
    id: 'presentation',
    title: 'Собрать презентацию',
    project: demoProjects.northWind,
    priority: 'medium',
    startColumn: 1,
    span: 3,
    row: 1,
    period: '13–15 июля',
  },
  {
    id: 'course-module',
    title: 'Подготовить модуль курса',
    project: demoProjects.designCourse,
    priority: 'low',
    startColumn: 5,
    span: 3,
    row: 2,
    period: '17–21 июля',
    continuesAfter: true,
  },
]

export const demoTodayGroups: DemoTodayGroup[] = [
  {
    id: 'overdue',
    label: 'Просрочено',
    items: [tasks.agreeStructure],
  },
  {
    id: 'active',
    label: 'В работе',
    items: [
      {
        ...demoMultiDayTasks[0],
        period: '13–15 июля',
      },
      tasks.sendDraft,
      tasks.interfacePractice,
    ],
  },
  {
    id: 'completed',
    label: 'Выполнено',
    items: [tasks.groceries],
  },
]
