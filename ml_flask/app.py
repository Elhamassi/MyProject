from flask import Flask, render_template, request
import pickle #Pickle for pickling (saving) the model 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home(): 
    return 'Not Found'

@app.route('/api',methods=['POST'])
def predict_fun():
    NB_spam_model = open('./uploaded/model_NB.pkl','rb') 
    clf = pickle.load(NB_spam_model)
	
    cv_model = open('./uploaded/cv.pkl', 'rb')
    cv = pickle.load(cv_model)	
	
    if request.method == 'POST':
        data = request.get_json(force=True)
        vect    = cv.transform([data['message']]).toarray()
        my_prediction = clf.predict(vect) 

    return "my_prediction: "+str(my_prediction[0])

#Calling the main function and running the flask app 
if __name__ == '__main__':
    app.run(debug=True)