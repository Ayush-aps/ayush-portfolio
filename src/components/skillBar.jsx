// wherever SkillBar lives, e.g. src/components/SkillBar.jsx
'use client'
import { TechSymbol } from './TechStack3D'

export function SkillBar({ skill, index = 0 }) {
  return <TechSymbol skill={skill} index={index} />
}
