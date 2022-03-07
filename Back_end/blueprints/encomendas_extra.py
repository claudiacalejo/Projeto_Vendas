# from flask import jsonify
# from utils.db import db
# from flask import Blueprint, request

# encomendas_extras = Blueprint("encomendas_extras", __name__)

# #CRIAR UM NOVO ENCOMENDA_EXTRA
# @encomendas_extras.route('/criar_encomenda_extra', methods={'GET','POST'})
# def criar_encomenda_extra():
#     if request.method == "POST":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         mysql = "INSERT INTO encomendas_extra(id_encomenda_extra, id_extra, quantidade) VALUES (%s, %s, %s)"
#         val = (
#             request_json["id_encomenda_extra"],
#             request_json["id_extra"],
#             request_json["quantidade"]
#         )
#         mycursor.execute(mysql,val)
#         mydb.commit()
#     return "Encomenda_extra inserido com sucesso"

# #DELETE UM ENCOMENDA_EXTRA
# @encomendas_extras.route('/delete_encomenda_extra',  methods=['GET', 'DELETE'])
# def delete_encomenda_extra():
#     if request.method == "DELETE":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         mysql = "DELETE FROM encomendas_extra WHERE (id_encomenda_extra = %s) and (id_extra = %s)"
#         val = (
#             request_json["id_encomenda_extra"],
#             request_json["id_extra"]
#         )
#         mycursor.execute(mysql, val)
#         mydb.commit()
#     return "Extra apagado"

# #VER TODOS OS ENCOMENDA_EXTRA
# @encomendas_extras.route('/ver_encomendas_extras_todos',  methods=['GET'])
# def ver_encomenda_extra_all():
#     myresult = []
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         mycursor.execute("SELECT * FROM encomendas_extra")
#         myresult = mycursor.fetchall()
#         for encomenda_extra in myresult:
#             print (encomenda_extra)
#     return jsonify(myresult)

# #VER APENAS UM ENCOMENDA_EXTRA
# @encomendas_extras.route('/ver_encomenda_extras',  methods=['GET'])
# def ver_encomenda_extra():
#     encomenda_extra = ""
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         encomenda_extra = request_json["id_encomenda_extra"]
#         mycursor.execute(f"SELECT * FROM encomendas_extra WHERE id_encomenda_extra = \"{encomenda_extra}\" ")
#         encomenda_extra = mycursor.fetchone()
#     return jsonify(encomenda_extra)

# #UPDATE ENCOMENDA_EXTRA
# @encomendas_extras.route('/update_encomenda_extras',  methods=['POST'])
# def update_encomenda_extra():
#     if request.method == "POST":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         mysql = "UPDATE encomendas_extra SET quantidade = %s WHERE id_encomenda_extra = %s and id_extra = %s "

#         val = (
#             request_json["quantidade"],
#             request_json["id_encomenda_extra"],
#             request_json["id_extras"]
#         )
#         mycursor.execute(mysql,val)
#         mydb.commit()
#     return "Encomenda_Extra Updated"
