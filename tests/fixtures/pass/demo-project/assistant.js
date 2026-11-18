// 合规示范：只用境内已备案大模型端点
const ds = await fetch('https://api.deepseek.com/chat/completions', { method: 'POST', headers: { Authorization: 'Bearer ' + process.env.DEEPSEEK_API_KEY }, body: JSON.stringify({ model: 'deepseek-flash', messages, safety_check: { level: 'high' } }) });
const qw = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', { method: 'POST', headers: { Authorization: 'Bearer ' + process.env.DASHSCOPE_API_KEY }, body: JSON.stringify({ model: 'qwen-plus', messages }) });
const zp = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', { method: 'POST', headers: { Authorization: 'Bearer ' + process.env.ZHIPU_API_KEY }, body: JSON.stringify({ model: 'glm-4', messages }) });
