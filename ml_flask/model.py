import pandas as pd  #Pandas for data pre-processing
import pickle #Pickle for pickling (saving) the model 
from sklearn.feature_extraction.text import CountVectorizer #To Vectorize the textual data 
from sklearn.naive_bayes import MultinomialNB #The algorithm for prediction
from sklearn.model_selection import train_test_split #Validation split

df = pd.read_csv("./dataset/spam_data.csv", encoding="latin-1")
df.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis=1, inplace=True) #Some garbage features that need to be removed

# Text and Labels
df['label'] = df['class'].map({'ham': 0, 'spam': 1}) 
X = df['message']
y = df['label']

# Extract Feature With CountVectorizer 
cv = CountVectorizer() 
X  = cv.fit_transform(X) # Fit the Data 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

#Naive Bayes Classifier
clf = MultinomialNB() 
clf.fit(X_train,y_train) 
print(clf.score(X_test,y_test)) 

#Alternative Usage of Saved Model 
pickle.dump(clf, open('./uploaded/model_NB.pkl','wb')) 
pickle.dump(cv, open('./uploaded/cv.pkl','wb'))

