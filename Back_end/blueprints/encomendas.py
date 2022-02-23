from flask import jsonify
from connection_to_db import mydb
from flask import Blueprint, request

encomendas = Blueprint("encomendas", __name__)

#CRIAR UMA NOVA ENCOMENDA
@encomendas.route('/criar_encomenda', methods={'GET','POST'})
def criar_encomenda():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "INSERT INTO encomendas(id_cliente, data_encomenda, data_entrega, hora_entrega, metodo_entrega, status, observacoes) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        val = (
            request_json["id_cliente"],
            request_json["data_encomenda"],
            request_json["data_entrega"],
            request_json["hora_entrega"],
            request_json["metodo_entrega"],
            request_json["status"],
            request_json["observacoes"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Encomenda criada com sucesso"

#DELETE UMA ENCOMENDA
@encomendas.route('/delete_encomenda',  methods=['GET', 'DELETE'])
def delete_encomenda():
    if request.method == "DELETE":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        val = request_json["id_encomendas"]
        mysql = f"DELETE FROM encomendas WHERE id_encomendas = {val} "
        mycursor.execute(mysql)
        mydb.commit()
    return "Encomenda apagada"

#VER TODAS AS ENCOMENDAS
@encomendas.route('/ver_encomendas_todas',  methods=['GET'])
def ver_encomendas_all():
    myresult=[]
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM encomendas")
        myresult = mycursor.fetchall()
        for encomenda in myresult:
            print (encomenda)
    return jsonify(myresult)

#VER APENAS UMA ENCOMENDA
@encomendas.route('/ver_encomenda',  methods=['GET'])
def ver_encomenda():
    produto = ""
    if request.method == "GET":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        id_encomendas = request_json["id_encomendas"]
        mycursor.execute(f"SELECT * FROM encomendas WHERE id_encomendas=\"{id_encomendas}\" ")
        encomenda = mycursor.fetchone()
    return jsonify(encomenda)


#UPDATE ENCOMENDA
@encomendas.route('/update_encomendas',  methods=['POST'])
def update_produto():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        id_encomendas = request_json["id_encomendas"]
        mysql = f"UPDATE encomendas SET id_cliente = %s, data_encomenda = %s, data_entrega = %s, hora_entrega = %s, metodo_entrega = %s, status = %s, observacoes =%s  WHERE id_encomendas = {id_encomendas}"
        val = (
            request_json["id_cliente"],
            request_json["data_encomenda"],
            request_json["data_entrega"],
            request_json["hora_entrega"],
            request_json["metodo_entrega"],
            request_json["status"],
            request_json["observacoes"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Encomenda Updated"
