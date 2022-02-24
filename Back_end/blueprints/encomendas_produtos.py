from flask import jsonify
from connection_to_db import mydb
from flask import Blueprint, request

encomendas_produtos = Blueprint("encomendas_produtos", __name__)

#CRIAR UM NOVO ENCOMENDA_PRODUTO
@encomendas_produtos.route('/criar_encomenda_produto', methods={'GET','POST'})
def criar_encomendas_produtos():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "INSERT INTO encomendas_produtos(id_encomenda, id_produtos, quantidade) VALUES (%s, %s, %s)"
        val = (
            request_json["id_encomenda"],
            request_json["id_produtos"],
            request_json["quantidade"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Encomenda_Produto inserido com sucesso"

#DELETE UM ENCOMENDA_PRODUTO
@encomendas_produtos.route('/delete_encomenda_produtos',  methods=['GET', 'DELETE'])
def delete_encomendas_produtos():
    if request.method == "DELETE":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "DELETE FROM encomendas_produtos WHERE (id_encomenda = %s) and (id_produtos = %s)"
        val = (
            request_json["id_encomenda"],
            request_json["id_produtos"]
        )
        mycursor.execute(mysql, val)
        mydb.commit()
    return "Extra apagado"

#VER TODOS OS ENCOMENDA_PRODUTO
@encomendas_produtos.route('/ver_encomendas_produto_todos',  methods=['GET'])
def ver_encomendas_produtos_all():
    myresult = []
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM encomendas_produtos")
        myresult = mycursor.fetchall()
        for encomenda_produtos in myresult:
            print (encomenda_produtos)
    return jsonify(myresult)

#VER APENAS UM ENCOMENDA_PRODUTO
@encomendas_produtos.route('/ver_encomenda_produtos',  methods=['GET'])
def ver_encomenda_produtos():
    encomenda_produto = ""
    if request.method == "GET":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        encomenda_produto = request_json["id_encomenda"]
        mycursor.execute(f"SELECT * FROM encomendas_produtos WHERE id_encomenda= \"{encomenda_produto}\" ")
        encomenda_produto = mycursor.fetchone()
    return jsonify(encomenda_produto)

#UPDATE ENCOMENDA_PRODUTO
@encomendas_produtos.route('/update_encomenda_produto',  methods=['POST'])
def update_encomendas_produtos_extra():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "UPDATE encomendas_produtos SET quantidade = %s WHERE id_encomenda = %s and id_produtos = %s "

        val = (
            request_json["quantidade"],
            request_json["id_encomenda"],
            request_json["id_produtos"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Encomenda_Produto Updated"
