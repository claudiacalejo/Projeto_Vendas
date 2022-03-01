from flask import jsonify
from flask_cors import CORS
from connection_to_db import mydb
from flask import Blueprint, request
import json

produtos = Blueprint("produtos", __name__)

CORS(produtos)

#CRIAR UM NOVO PRODUTO
@produtos.route('/criar_produto', methods={'GET','POST'})
def criar_produto():
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "INSERT INTO produtos(nome_produto, massa, recheio, tamanho, preco_custo, preco_venda) VALUES (%s, %s, %s, %s, %s, %s)"
        val = (
            request_json["nome_produto"],
            request_json["massa"],
            request_json["recheio"],
            request_json["tamanho"],
            request_json["preco_custo"],
            request_json["preco_venda"]
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Produto inserido com sucesso"

#DELETE UM PRODUTO
@produtos.route('/delete_produto',  methods=['GET', 'DELETE'])
def delete_produto():
    if request.method == "DELETE":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        val = request_json["id_produtos"]
        mysql = f"DELETE FROM produtos WHERE id_produtos = {val} "
        mycursor.execute(mysql)
        mydb.commit()
    return "apagado"

#VER TODOS OS PRODUTOS
@produtos.route('/ver_produtos_todos',  methods=['GET'])
def ver_produtos_all():
    myresult=[]
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM produtos")
        row_headers= [x[0] for x in mycursor.description]
        myresult = mycursor.fetchall()
        json_data=[]
        for result in myresult:
            json_data.append(dict(zip(row_headers,result)))
        return json.dumps(json_data)
    return jsonify(myresult)

#VER APENAS UM PRODUTO
@produtos.route('/ver_produto/<int:id_produtos>',  methods=['GET'])
def ver_produto(id_produtos):
    if request.method == "GET":
        mycursor = mydb.cursor()
        mycursor.execute(f"SELECT * FROM produtos WHERE id_produtos=\"{id_produtos}\" ")
        produto = mycursor.fetchone()
    return jsonify(produto)


#UPDATE PRODUTO
@produtos.route('/update_produtos/<int:id_produtos>',  methods=['POST'])
def update_produto(id_produtos):
    if request.method == "POST":
        mycursor = mydb.cursor()
        request_json = request.get_json()
        mysql = "UPDATE produtos SET nome_produto = %s, massa = %s, recheio = %s, tamanho = %s, preco_custo = %s, preco_venda = %s WHERE id_produtos = %s"
        val = (
            request_json["nome_produto"],
            request_json["massa"],
            request_json["recheio"],
            request_json["tamanho"],
            request_json["preco_custo"],
            request_json["preco_venda"],
            request_json["id_produtos"],
        )
        mycursor.execute(mysql,val)
        mydb.commit()
    return "Produto Updated"
