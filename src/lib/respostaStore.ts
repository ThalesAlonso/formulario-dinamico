import { create } from 'zustand'

interface Resposta {
  idPergunta: string
  resposta: string
}

interface RespostaState {
  respostas: Resposta[]
  setResposta: (idPergunta: string, resposta: string) => void
  limparRespostas: () => void
}

export const useRespostaStore = create<RespostaState>((set) => ({
  respostas: [],
  setResposta: (idPergunta, resposta) =>
    set((state) => {
      const atualizadas = state.respostas.filter((r) => r.idPergunta !== idPergunta)
      return {
        respostas: [...atualizadas, { idPergunta, resposta }]
      }
    }),
  limparRespostas: () => set({ respostas: [] }),
}))
