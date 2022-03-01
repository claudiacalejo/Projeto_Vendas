from flask import jsonify
from flask_cors import CORS
from connection_to_db import mydb
from flask import Blueprint, request

extras = Blueprint("extras", __name__)


#CRIAR UM NOVO EXTRA
@extras.route('/criar_extra', methods={'GET','POST'})
def criar_extra():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "INSERT INTO extras(nome_extras, preco_extras) VALUES (%s, %s)"
        val = (
            request_json["nome_extras"],
            request_json["preco_extras"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Extra inserido com sucesso"

#DELETE UM EXTRA
@extras.route('/delete_extras',  methods=['GET', 'DELETE'])
def delete_extras():
    if request.method == "DELETE":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        val = request_json["id_extras"]
        mysql = f"DELETE FROM extras WHERE id_extras = {val} "
        mycursor.execute(mysql)
        mydb.commit()
    return "Extra apagado"

#VER TODOS OS EXTRAS
@extras.route('/ver_extras_todos',  methods=['GET'])
def ver_extras_all():
    myresult=[]
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM extras")
        myresult = mycursor.fetchall()
        for extra in myresult:
            print (extra)
    return jsonify(myresult)

#VER APENAS UM EXTRA
@extras.route('/ver_extras',  methods=['GET'])
def ver_extras():
    extra = ""
    if request.method == "GET":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        id_extras = request_json["id_extras"]
        mycursor.execute(f"SELECT * FROM extras WHERE id_extras = \"{id_extras}\" ")
        extra = mycursor.fetchone()
    return jsonify(extra)

#UPDATE EXTRA
@extras.route('/update_extras',  methods=['POST'])
def update_extras():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        id_extras = request_json["id_extras"]
        mysql = f"UPDATE extras SET nome_extras = %s, preco_extras = %s WHERE id_extras = {id_extras}"
        val = (
            request_json["nome_extras"],
            request_json["preco_extras"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Extra Updated"
