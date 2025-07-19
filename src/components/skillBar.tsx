// wherever SkillBar lives, e.g. src/components/SkillBar.tsx
"use client";
import { TechSymbol } from "./TechStack3D";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export function SkillBar({ skill, index = 0 }: { skill: Skill; index?: number }) {
  return <TechSymbol skill={skill} index={index} />;
}
