from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
import pickle
import string
import re

app = Flask(__name__)

CORS(app,resources={r"/*":{"origins":"*"}})

model = pickle.load(open('nb.pkl', 'rb'))
vectorizer = pickle.load(open('vec.pkl', 'rb'))

stopwords = set(["the", "a", "to", "from", "and", "in", "on", "at", "with", "for", "by", "of", "this", "that"])

def clean_up(task_to_be_classified) :
    # lowercase
    task_to_be_classified = str(task_to_be_classified).lower()

    # remove punctuation
    task_to_be_classified = re.sub(f'[{string.punctuation}]', '', task_to_be_classified)

    #remove digits
    task_to_be_classified = re.sub(r'\d+', '', task_to_be_classified)

    #remove stopwords
    task_to_be_classified = ' '.join([word for word in task_to_be_classified.split() if word not in stopwords])

    return task_to_be_classified


@app.route('/', methods=['GET'])
def get_data():
    data = {
        "message":"API is Running"
    }
    return jsonify(data)

@app.route('/classify', methods=['POST'])
def classify_task():
    task = request.json.get('task-input')
    # Clean and vectorize the task
    cleaned_text = clean_up(task)
    vec_text = vectorizer.transform([cleaned_text])
    prediction = model.predict(vec_text)
    return jsonify({'category': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)