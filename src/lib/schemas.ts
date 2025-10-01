import { z } from "zod";

// Schema para dados de um mês específico
const monthDataSchema = z.object({
  mes_ano: z.string().min(1, "Mês/Ano é obrigatório"),
  investimento: z.string().min(1, "Investimento é obrigatório"),
  leads: z.number().min(0, "Leads deve ser um número positivo"),
  cpl: z.string().min(1, "CPL é obrigatório"),
  agendamentos: z.number().min(0, "Agendamentos deve ser um número positivo"),
  comparecimentos: z.number().min(0, "Comparecimentos deve ser um número positivo"),
  fechamentos: z.number().min(0, "Fechamentos deve ser um número positivo"),
  faturamento_mes: z.string().min(1, "Faturamento do mês é obrigatório"),
  acao_mes: z.string().optional(),
});

// Schema principal do formulário
export const caseFormSchema = z.object({
  // SEÇÃO 1: IDENTIFICAÇÃO DO CLIENTE
  nome_clinica: z.string().min(1, "Nome da clínica é obrigatório"),
  cidade_estado: z.string().min(1, "Cidade/Estado é obrigatório"),
  tipo_clinica: z.enum([
    "geral",
    "ortodontia", 
    "implantodontia",
    "odontopediatria",
    "hof",
    "franquia",
    "outro"
  ]).refine((val) => val !== undefined, {
    message: "Tipo de clínica é obrigatório"
  }),
  tipo_clinica_outro: z.string().optional(),
  perfil_cliente: z.enum([
    "pequena",
    "media", 
    "grande",
    "referencia",
    "saindo_franquia"
  ]).refine((val) => val !== undefined, {
    message: "Perfil do cliente é obrigatório"
  }),
  tempo_parceria: z.number().min(1, "Tempo de parceria deve ser pelo menos 1 mês"),

  // SEÇÃO 2: CENÁRIO ANTES DA F5
  dor: z.array(z.string()).min(1, "Selecione pelo menos uma dor/desafio"),
  dor_outro: z.string().optional(),
  faturamento_antes: z.string().min(1, "Faturamento antes é obrigatório"),
  origem_cliente: z.enum([
    "indicacao",
    "anuncio",
    "redes_sociais", 
    "google",
    "evento",
    "outro"
  ]).refine((val) => val !== undefined, {
    message: "Origem do cliente é obrigatória"
  }),
  origem_cliente_outro: z.string().optional(),
  mkt_anterior: z.enum([
    "outra_agencia",
    "interno", 
    "primeira_vez"
  ]).refine((val) => val !== undefined, {
    message: "Experiência anterior com marketing é obrigatória"
  }),

  // SEÇÃO 3: DADOS DE PERFORMANCE
  data_inicio: z.string().min(1, "Data de início é obrigatória"),
  data_fim: z.string().min(1, "Data de fim é obrigatória"),
  meses_analisados: z.number().min(1, "Total de meses analisados é obrigatório"),
  meses: z.array(monthDataSchema).min(1, "Adicione pelo menos um mês de dados"),

  // SEÇÃO 4: ESTRATÉGIA APLICADA
  estrategia_c: z.array(z.string()).optional(),
  estrategia_c_outro: z.string().optional(),
  estrategia_h: z.array(z.string()).optional(),
  estrategia_h_outro: z.string().optional(),
  estrategia_a: z.array(z.string()).optional(),
  estrategia_a_outro: z.string().optional(),
  estrategia_v: z.array(z.string()).optional(),
  estrategia_v_outro: z.string().optional(),
  estrategia_i: z.array(z.string()).optional(),
  estrategia_i_outro: z.string().optional(),

  // SEÇÃO 5: TRANSFORMAÇÃO E RESULTADOS
  resumo_investimento: z.string().min(1, "Investimento total é obrigatório"),
  resumo_faturamento: z.string().min(1, "Faturamento total é obrigatório"),
  resumo_lucro: z.string().min(1, "Lucro líquido é obrigatório"),
  resumo_roi: z.string().min(1, "ROI médio é obrigatório"),
  evolucao_tm_de: z.string().optional(),
  evolucao_tm_para: z.string().optional(),
  evolucao_tc_de: z.string().optional(),
  evolucao_tc_para: z.string().optional(),
  evolucao_cpl_de: z.string().optional(),
  evolucao_cpl_para: z.string().optional(),
  evolucao_fat_de: z.string().optional(),
  evolucao_fat_para: z.string().optional(),
  resultado_surpreendente: z.string().optional(),
  marco_importante: z.string().optional(),

  // SEÇÃO 6: DEPOIMENTO E STORYTELLING
  depoimento_cliente: z.string().optional(),
  momento_virada: z.string().optional(),
  medo_cliente: z.string().optional(),
  superacao_medo: z.string().optional(),

  // SEÇÃO 7: CONTEXTO ADICIONAL
  contexto_mercado: z.string().optional(),
  contexto_desafio: z.string().optional(),
  tem_anexo: z.enum(["sim", "nao"]).optional(),
  publicar_nome: z.enum(["sim", "nao"]).optional(),
});

export type CaseFormData = z.infer<typeof caseFormSchema>;
