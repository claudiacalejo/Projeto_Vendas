from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import yaml
import mysql.connector

app = Flask(__name__)
app.debug = True

#Configure DB
db = yaml.safe_load(open('db.yaml'))
mydb = mysql.connector.connect(
    host = db['mysql_host'],
    user = db['mysql_user'],
    password = db['mysql_password'],
    database = db['mysql_db']
)

mysql = MySQL(app)

#CRIAR UM CLIENTE
@app.route('/criar_cliente', methods={'GET','POST'})
def criar_cliente():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "INSERT INTO clientes (nome_cliente, morada_cliente, codigo_postal, localidade, telefone_cliente, instagram_cliente, email) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (
            request_json["nome_cliente"],
            request_json["morada_cliente"],
            request_json["codigo_postal"],
            request_json["localidade"],
            request_json["telefone_cliente"],
            request_json["instragram_cliente"],
            request_json["email"],
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "hello"


#DELETE UM CLIENTE
@app.route('/delete_cliente',  methods=['GET', 'DELETE'])
def delete_cliente():
    if request.method == "DELETE":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        val = request_json["id_cliente"]
        mysql = f"DELETE FROM clientes WHERE id_cliente = {val} "
        mycursor.execute(mysql)
        mydb.commit()
    return "apagado"


#VER TODOS OS CLIENTES
@app.route('/ver_clientes_todos',  methods=['GET'])
def ver_clientes_all():
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM clientes")
        myresult = mycursor.fetchall()
        for cliente in myresult:
            print (cliente)
    return "ola"


    


if __name__== '__main__':
    app.run(debug=True)