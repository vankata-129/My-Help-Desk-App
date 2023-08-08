from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    # Handle chat here
    return jsonify({"message": "OK"})

if __name__ == '__main__':
    app.run(debug=True)
    