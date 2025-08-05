'use client'

import { Input } from './ui/input'

interface Props {
  valor: string
  onChange: (valor: string) => void
}

export function OpcaoRespostaEditor({ valor, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Input
        className="w-full"
        placeholder="Digite a opção"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
