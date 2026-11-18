# 多供应商大模型端点审计（dsh-llm-endpoint-audit）

**什么时候用**：应用接了多家大模型 API（DeepSeek/OpenAI/Claude/Gemini/Kimi/通义/GLM/MiniMax）时，盘点「到底调了谁」并核对告知义务。个保法的告知是**按服务商逐个算**的——混用不会少告知。
用户会说：「我们代码里到底接了几家大模型」「隐私政策要披露哪些服务商」。

## 怎么用

```bash
<cli 路径> --root <项目目录>       # 检查一个项目
<cli 路径> --demo                  # 内置样本
<cli 路径> --list-rules            # 判据与出处
<cli 路径> --html report.html
```

## 它查什么（15 条）

| 规则 | 级别 |
|---|---|
| LLM-API-*：13 家端点盘点（DeepSeek/OpenAI/Anthropic/Gemini/Kimi/通义/GLM/MiniMax/豆包/文心/星火/混元/零一） | info |
| LLM-CROSSBORDER | 调用境外端点（OpenAI/Anthropic/Gemini）——数据出境场景，需标准合同/安全评估/认证路径 | high |
| LLM-PRIVACY-DISCLAIMER | 有模型调用但全项目无隐私政策/声明文档 | medium |

## 怎么读结果

- **info 盘点行不是问题**，是告知义务清单：每一家都要在隐私政策里按名称披露，并确认该家模型已上线备案
- medium 的隐私文档缺失才是要修的
- 配合 dsh-cn-genai-preflight（DeepSeek 深挖）与 dsh-secret-scan（密钥扫描）使用
