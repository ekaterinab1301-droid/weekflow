import type { CSSProperties } from 'react'
import type { DemoProject } from '../../demo/homeScreenData'
import styles from './ProjectMarker.module.css'

type ProjectMarkerProps = {
  project: DemoProject
  compact?: boolean
}

type ProjectStyle = CSSProperties & {
  '--project-color': string
}

export function ProjectMarker({ project, compact = false }: ProjectMarkerProps) {
  const projectStyle: ProjectStyle = {
    '--project-color': project.color,
  }

  return (
    <span
      className={compact ? styles.compactMarker : styles.marker}
      style={projectStyle}
      title={project.name}
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={compact ? styles.compactName : styles.name}>
        {project.name}
      </span>
    </span>
  )
}
