export type TipoPergunta =
  | 'Sim_Nao'
  | 'multipla_escolha'
  | 'unica_escolha'
  | 'texto_livre'
  | 'Inteiro'
  | 'Numero_com_duas_casas_decimais';

export interface Formulario {
  id: string;
  titulo: string;
  descricao?: string;
  ordem: number;
  perguntas: Pergunta[];
}

export interface Pergunta {
  id: string;
  id_formulario: string;
  titulo: string;
  codigo: string;
  orientacao_resposta?: string;
  ordem: number;
  obrigatoria: boolean;
  sub_pergunta: boolean;
  tipo_pergunta: TipoPergunta;
  opcoes_respostas: OpcaoResposta[];
  condicional?: Condicional;
}

export interface OpcaoResposta {
  id: string;
  id_pergunta: string;
  resposta: string;
  ordem: number;
  resposta_aberta: boolean;
}

export interface Condicional {
  id_pergunta_dependente: string;
  id_opcao_ativa: string;
}