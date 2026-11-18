import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'llm-endpoint-audit',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/llm-endpoint-audit.md',
  binFile: 'bin/cli.mjs',
  description: "扫描代码里所有大模型 API 端点（DeepSeek/OpenAI/Anthropic/Gemini/通义/月之暗面/智谱/MiniMax…），出供应商矩阵：调了谁、传了什么、隐私政策是否披露——个保法告知义务按服务商逐个算",
  whenToUse: "需要对「多供应商大模型端点审计」相关项目做自查时使用。",
});
