from flask import Flask, jsonify
from flask_cors import CORS
import json
import requests

app = Flask(__name__)
CORS(app)

@app.get('/get_meme')
def get_reversed_string():
    url = "https://meme-api.com/gimme"
    res = json.loads(requests.request("GET", url).text)
    image = res["preview"][1]
    source = res["postLink"]

    return jsonify({"image": image, "source": source})
