# Indoor Outdoor Image Classifier

## Environment requirement :
- node js
- node express
## Task steps <a href="static\model\classifier2.ipynb">notebook</a> :
### 1- Collecting data :

the Dataset used is <a href="https://figshare.com/articles/dataset/Indoor-Outdoor_dataset/4595323">Indoor-outdoor dataset figshare</a>.<br>

### 2- Data Preprocessing
    |___ Data Normalization
    |___ Resizing images
    |___ Splitting data ( train / validate)
    |___ Data Augmentation

### 3- Traning Sequential Model with tf.keras 

### 4- Validation and Save the model

### 5- Convert from SavedModel to tensorflowjs 

### 6- Deploy the model using Heroku and node js <a href="https://in-outdoor-classifier2.herokuapp.com/"> Live test</a><br><br>

## To run local :
### 1- clone the repo:
    
    git clone https://github.com/abdelmageed95/Tensorflow.js-model-in-browser.git

### 2-Run the server file:
    node server.js
### 3- Open the URL in your browser
    localhost:5000
