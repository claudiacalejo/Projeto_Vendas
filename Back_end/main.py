from flask import Flask
from clientes import clientes
import yaml
import mysql.connector

app = Flask(__name__)
app.register_blueprint(clientes, url_prefix="/clientes")

#Configure DB
db = yaml.safe_load(open('db.yaml'))
mydb = mysql.connector.connect(
    host = db['mysql_host'],
    user = db['mysql_user'],
    password = db['mysql_password'],
    database = db['mysql_db']
)
@app.route("/")
def teste():
    return "<h1>Test<h1>"

if __name__== '__main__':
    app.run(debug=True)