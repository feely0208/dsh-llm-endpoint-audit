# @deepwhale-cn/dsh-llm-endpoint-audit

多供应商大模型端点审计：扫描代码里所有大模型 API 端点（DeepSeek/OpenAI/Anthropic/Gemini/Kimi/通义/GLM/MiniMax），出供应商盘点矩阵，并检查隐私政策文档是否存在。（深鲸守护系列 · 基于 dsh-guard-core）

```bash
npx @deepwhale-cn/dsh-llm-endpoint-audit --root <项目目录>   # 或 --demo / --list-rules / --html
```

规则 15 条：**13 家大模型端点盘点**（DeepSeek/OpenAI/Anthropic/Gemini/Kimi/通义/GLM/MiniMax/豆包/文心/星火/混元/零一）+ 境外端点数据出境风险（high，个保法 38 条/出境评估办法）+ 隐私文档缺失（medium）。个保法告知按服务商逐个算——混用不少告知，境外端点尤其要盯。

## 安装（DSH）

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-llm-endpoint-audit
```

也可以 `npm i @deepwhale-cn/dsh-llm-endpoint-audit`，或从本仓库直接 `dsh plugin install ./`。
