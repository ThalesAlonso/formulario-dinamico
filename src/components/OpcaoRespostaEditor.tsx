
'use client'

import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
  opcoes: string[]
  adicionarOpcao: () => void
  atualizarOpcao: (index: number, valor: string) => void
}

export function OpcaoRespostaEditor({ opcoes, adicionarOpcao, atualizarOpcao }: Props) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-gray-700">Opções de Resposta</h4>
      {opcoes.map((opcao, index) => (
        <Input
          key={index}
          placeholder={`Opção ${index + 1}`}
          value={opcao}
          onChange={(e) => atualizarOpcao(index, e.target.value)}
        />
      ))}
      <Button variant="outline" onClick={adicionarOpcao}>
        ➕ Adicionar Opção
      </Button>
    </div>
  )
}
