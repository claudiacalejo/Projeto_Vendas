from flask import jsonify
from models.encomenda import Encomendas
from utils.db import db
from flask_cors import cross_origin
from flask import Blueprint, request
import json

encomendas = Blueprint("encomendas", __name__)

#CRIAR UMA NOVA ENCOMENDA
@encomendas.route('/criar_encomenda', methods={'GET','POST'})
@cross_origin()
def criar_encomenda():
    if request.method == "POST":
        request_json = request.get_json()
        encomenda_nova = Encomendas(
            id_cliente = request_json["id_cliente"],
            data_encomenda = request_json["data_encomenda"],
            data_entrega = request_json["data_entrega"],
            hora_entrega = request_json["hora_entrega"],
            metodo_entrega = request_json["metodo_entrega"],
            estado = request_json["status"],
            observacoes = request_json["observacoes"]
        )
        db.session.add(encomenda_nova)
        db.session.commit()
        return "Encomenda criada"
    return "Encomenda não criada"

# #DELETE UMA ENCOMENDA
# @encomendas.route('/delete_encomenda',  methods=['GET', 'DELETE'])
# def delete_encomenda():
#     if request.method == "DELETE":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         val = request_json["id_encomendas"]
#         mysql = f"DELETE FROM encomendas WHERE id_encomendas = {val} "
#         mycursor.execute(mysql)
#         mydb.commit()
#     return "Encomenda apagada"

# #VER TODAS AS ENCOMENDAS
# @encomendas.route('/ver_encomendas_todas',  methods=['GET'])
# def ver_encomendas_all():
#     myresult=[]
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         mycursor.execute("SELECT encomendas.*, clientes.nome_cliente FROM encomendas, clientes WHERE encomendas.id_cliente = clientes.id_cliente")
#         row_headers= [x[0] for x in mycursor.description]
#         myresult = mycursor.fetchall()
#         json_data=[]
#         for result in myresult:
#             result = list(result)
#             result[2] = result[2].strftime("%d/%m/%Y")
#             result[3] = result[3].strftime("%d/%m/%Y")
#             result = tuple(result)
#             json_data.append(dict(zip(row_headers,result)))
#         return json.dumps(json_data)
#     return jsonify(myresult)

# #VER APENAS UMA ENCOMENDA
# @encomendas.route('/ver_encomenda',  methods=['GET'])
# def ver_encomenda():
#     produto = ""
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         id_encomendas = request_json["id_encomendas"]
#         mycursor.execute(f"SELECT * FROM encomendas WHERE id_encomendas=\"{id_encomendas}\" ")
#         encomenda = mycursor.fetchone()
#     return jsonify(encomenda)


# #UPDATE ENCOMENDA
# @encomendas.route('/update_encomendas/<int:id_encomendas>',  methods=['POST'])
# def update_produto(id_encomendas):
#     if request.method == "POST":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         mysql = "UPDATE encomendas SET id_cliente = %s, data_encomenda = %s, data_entrega = %s, hora_entrega = %s, metodo_entrega = %s, status = %s, observacoes =%s  WHERE id_encomendas = %s"
#         val = (
#             request_json["data_encomenda"],
#             request_json["data_entrega"],
#             request_json["hora_entrega"],
#             request_json["metodo_entrega"],
#             request_json["status"],
#             request_json["observacoes"],
#             request_json["id_cliente"]
#         )
#         mycursor.execute(mysql,val)
#         mydb.commit()
#     return "Encomenda Updated"

