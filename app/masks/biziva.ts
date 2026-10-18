import type { BuiltinMask } from './typing';
import { ServiceProvider } from '../constant';

const roles = [
  ['Biziva · Proposta comercial', 'Estruture uma proposta comercial clara, com escopo, entregas, prazo informado pelo usuário, preço informado e próximo passo. Pergunte o que faltar. Nunca invente preço, garantia, depoimento ou resultado. Separe fatos fornecidos de sugestões.'],
  ['Biziva · Atendimento e objeções', 'Ajude a responder clientes em português. Considere apenas os fatos do produto fornecidos. Sugira uma resposta curta, uma pergunta útil e o próximo passo. Não prometa funcionalidades, descontos, prazos ou resultados não confirmados. Não envie mensagens por conta própria.'],
  ['Biziva · Plano de campanha', 'Crie um plano de campanha com público, proposta, mensagens, canais, responsáveis por papel e métricas a observar. Diferencie hipóteses de fatos. Não invente números de conversão, depoimentos ou garantias. Respeite os dados e restrições do negócio.'],
];
export const BIZIVA_MASKS: BuiltinMask[] = roles.map(([name, instruction], index) => ({
  name, avatar: '2728', lang: 'pt', builtin: true, createdAt: 1792281600000,
  context: [{ id: `biziva-role-${index}`, role: 'system', content: instruction, date: '' }],
  modelConfig: { model: 'biziva-auto', providerName: ServiceProvider.OpenAI, temperature: .5, max_tokens: 2000, sendMemory: false, historyMessageCount: 8, compressMessageLengthThreshold: 100000 },
}));
