import numpy as np
from flask import Flask, render_template, request
from flask_cors import CORS,cross_origin


import nltk
from nltk.stem import WordNetLemmatizer


lemmatizer = WordNetLemmatizer()
import pickle


app = Flask(__name__, template_folder='template')
CORS(app)

import json
import random

from keras.models import load_model

# user = 'New user'
@app.route('/home/user',methods = ['POST'])
def user_selection():
    user = request.json["user"]
    global trained_model,intents,words,classes
    if user == "Existing User":
        print("Existing user selected")
        trained_model = load_model('chatbot_model_existing.h5')
        intents = json.loads(open('ExistingUser').read())
        words = pickle.load(open('words_existing.pkl', 'rb'))
        classes = pickle.load(open('classes_existing.pkl', 'rb'))

    else:
        print("New user selected")
        trained_model = load_model('chatbot_model.h5')
        intents = json.loads(open('NewUser.json').read())
        words = pickle.load(open('words.pkl', 'rb'))
        classes = pickle.load(open('classes.pkl', 'rb'))
    return "Success"




def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence

def bow(sentence, words, show_details=True):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words - matrix of N words, vocabulary matrix
    bag = [0]*len(words)
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s:
                # assign 1 if current word is in the vocabulary position
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)
    return(np.array(bag))

def predict_class(sentence, trained_model):
    # filter out predictions below a threshold
    p = bow(sentence, words,show_details=False)
    res = trained_model.predict(np.array([p]))[0]
    print(res)
    ERROR_THRESHOLD = 0.25
    results = [[i,r] for i,r in enumerate(res) if r>ERROR_THRESHOLD]
    print(results)
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    print(return_list)
    return return_list



def getResponse(ints, intents_json):
    if ints!=[]:
        tag = ints[0]['intent']
    else:
        return "Multiple matching content. Kindly enter the 'Entire content'"
    if (float(ints[0]["probability"])*100)<75:
        tag = "No Response"
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if(i['tag']== tag):
            result = random.choice(i['responses'])
            break
    return result

def chatbot_response(msg):
    ints = predict_class(msg, trained_model)
    res = getResponse(ints, intents)
    print("*****************************", res)
    return res



@app.route('/home/chat',methods = ['POST'])
def get_bot_response():
    userText = request.json["message"]
    string = chatbot_response(userText)
    print(json.dumps({"idname": "bot", "message": string}))
    return json.dumps({"idname": "bot", "message": string})


if __name__ == "__main__":
    app.run(threaded=False)