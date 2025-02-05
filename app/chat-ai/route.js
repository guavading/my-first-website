import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { userInput } = await request.json();

    if (!userInput) {
      return new Response(JSON.stringify({ error: "使用者輸入不能為空" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "你是一位精通繁體中文的姓名算命師，擅長針對姓名提供解析。請使用繁體中文回應，並根據用戶的輸入，敘述姓名的寓意並細述解釋。回應時，先簡短回應用戶的話，然後說「讓我為您解析：」，接著呈現解析。"
        },
        { role: "user", content: userInput }
      ],
      temperature: 0.9,
      max_tokens: 1000,
    });

    const aiResponse = completion.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('OpenAI API 錯誤:', error);
    return new Response(JSON.stringify({ error: "處理請求時發生錯誤" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


