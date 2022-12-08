from flask import Flask, render_template, request 
from mysql.connector import  pooling
from base64 import b64encode
from datetime import datetime

import plotly
import plotly.express as px
import pandas as pd
import json

pool= pooling.MySQLConnectionPool(pool_name = "mypool",pool_reset_session=True,
                              pool_size = 30, host='localhost',port='3306',
                              database='flaskdb',user='root', password='6569')

app = Flask( __name__ , static_folder='',template_folder='') 

@app.route("/") 
def information():
    return render_template("first.html")

@app.route("/index") 
def mainbackground():
    return render_template("index.html")

@app.route("/charts") 
def charts():
    return render_template("charts.html")

@app.route("/tables") 
def tables():
    return render_template("tables.html")

@app.route("/TensorFlow") 
def TensorFlow():
    return render_template("TensorFlow.html")

@app.route("/TensorFlow_keras") 
def TensorFlow_keras():
    return render_template("TensorFlow_keras.html")

@app.route("/Pytorch_low") 
def Pytorch_low():
    return render_template("Pytorch_low.html")

@app.route("/Pytorch_high") 
def Pytorch_high():
    return render_template("Pytorch_high.html")

@app.route("/fetal_health") 
def fetal_health():
    con = pool.get_connection()
    c = con.cursor()
    c.execute('select * from student' )
    result = c.fetchall()
    con.close()
    return render_template("fetal_health.html", data=result)

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port=4000, debug = True) 