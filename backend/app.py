import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_prompt = request.json['user_prompt']

    # Construct the full prompt for ChatGPT
    full_prompt = f"{user_prompt} Help me diagnose what the issue is and how to fix it. Ask me what to do to provide to you so it's a conversation between me and you where you tell me what to do and I grasp that information to give it to you. Tell me how to do each step one by one."

    # Send the prompt to OpenAI's GPT-4 using the chat-specific endpoint
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": full_prompt
        }]
    )

    # Extract the response and return it
    chat_response = response['choices'][0].message['content']
    return jsonify({'response': chat_response})



if __name__ == '__main__':
    app.run(debug=True)
