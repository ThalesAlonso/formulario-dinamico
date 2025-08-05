
'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { OpcaoRespostaEditor } from './OpcaoRespostaEditor'
import { TipoPergunta } from '@/lib/types'
import { useFormularioStore } from '@/lib/store'

interface PerguntaEditorProps {
  formularioId: string
}

export function PerguntaEditor({ formularioId }: PerguntaEditorProps) {
  const [titulo, setTitulo] = useState('')
  const [tipo, setTipo] = useState<TipoPergunta>('texto_livre')
  const [obrigatoria, setObrigatoria] = useState(false)
  const [opcoes, setOpcoes] = useState<string[]>([])

  const adicionarOpcao = () => setOpcoes([...opcoes, ''])
  const atualizarOpcao = (i: number, v: string) => {
    const novas = [...opcoes]
    novas[i] = v
    setOpcoes(novas)
  }

  const { adicionarPergunta } = useFormularioStore()

  const handleSalvar = () => {
    if (!titulo.trim()) return
    adicionarPergunta({
      formularioId,
      titulo,
      tipo,
      obrigatoria,
      opcoes_respostas: opcoes,
    })
    setTitulo('')
    setTipo('texto_livre')
    setObrigatoria(false)
    setOpcoes([])
  }

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Título da Pergunta</Label>
        <Input placeholder="Digite o título da pergunta" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>

      <div>
        <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">Tipo de Pergunta</Label>
        <Select value={tipo} onValueChange={(v: TipoPergunta) => setTipo(v)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo de pergunta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="texto_livre">Texto Livre</SelectItem>
            <SelectItem value="sim_nao">Sim ou Não</SelectItem>
            <SelectItem value="multipla_escolha">Múltipla Escolha</SelectItem>
            <SelectItem value="unica_escolha">Única Escolha</SelectItem>
            <SelectItem value="numero_inteiro">Número Inteiro</SelectItem>
            <SelectItem value="numero_decimal">Número com Duas Casas Decimais</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(tipo === 'multipla_escolha' || tipo === 'unica_escolha') && (
        <OpcaoRespostaEditor opcoes={opcoes} adicionarOpcao={adicionarOpcao} atualizarOpcao={atualizarOpcao} />
      )}

      <div className="flex items-center gap-2">
        <Switch id="obrigatoria" checked={obrigatoria} onCheckedChange={setObrigatoria} />
        <Label htmlFor="obrigatoria" className="text-gray-700 dark:text-gray-200">
          Essa pergunta é obrigatória?
        </Label>
      </div>

      <Button className="w-full" onClick={handleSalvar}>
        💾 Salvar Pergunta
      </Button>
    </div>
  )
}
