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

export function PerguntaEditor() {
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

  const salvarPergunta = () => {
    if (!titulo.trim()) return
    adicionarPergunta({
        titulo,
        codigo: titulo.toLowerCase().replace(/\s+/g, '_'),
        tipo_pergunta: tipo,
        obrigatoria,
        sub_pergunta: false,
        ordem: 1,
        opcoes_respostas: opcoes.map((resposta, idx) => ({
            id: '',
            id_pergunta: '',
            resposta,
            ordem: idx + 1,
            resposta_aberta: false,
        })),
        id_formulario: ''
    })
    // resetar
    setTitulo('')
    setTipo('texto_livre')
    setObrigatoria(false)
    setOpcoes([])
  }

  return (
    <div className="p-6 border border-gray-300 rounded-md bg-white shadow-md space-y-5 mt-8">
      <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        🧩 <span>Nova Pergunta</span>
      </h3>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Título</label>
        <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Tipo de Pergunta</label>
        <Select value={tipo} onValueChange={(v) => setTipo(v as TipoPergunta)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Sim_Nao">Sim / Não</SelectItem>
            <SelectItem value="multipla_escolha">Múltipla Escolha</SelectItem>
            <SelectItem value="unica_escolha">Única Escolha</SelectItem>
            <SelectItem value="texto_livre">Texto Livre</SelectItem>
            <SelectItem value="Inteiro">Número Inteiro</SelectItem>
            <SelectItem value="Numero_com_duas_casas_decimais">Número com 2 decimais</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <Switch checked={obrigatoria} onCheckedChange={setObrigatoria} />
        <label className="text-sm text-gray-600">Obrigatória?</label>
      </div>

      {(tipo === 'multipla_escolha' || tipo === 'unica_escolha') && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Opções</Label>
            <Button type="button" onClick={adicionarOpcao}>
              + Adicionar
            </Button>
          </div>

          {opcoes.map((opcao, i) => (
            <OpcaoRespostaEditor key={i} valor={opcao} onChange={(v) => atualizarOpcao(i, v)} />
          ))}
        </div>
      )}

      <div className="pt-4">
        <Button onClick={salvarPergunta} className="w-full sm:w-auto">
          💾 Salvar Pergunta
        </Button>
      </div>
    </div>
  )
}
