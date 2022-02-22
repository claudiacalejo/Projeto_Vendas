from flask import jsonify
from connection_to_db import mydb
from flask import Blueprint, request

produtos = Blueprint("produtos", __name__)

#CRIAR UM NOVO PRODUTO
@produtos.route('/criar_produto', methods={'GET','POST'})
def criar_encomenda():
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

# #DELETE UMA ENCOMENDA
# @clientes.route('/delete_cliente',  methods=['GET', 'DELETE'])
# def delete_cliente():
#     if request.method == "DELETE":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         val = request_json["id_cliente"]
#         mysql = f"DELETE FROM clientes WHERE id_cliente = {val} "
#         mycursor.execute(mysql)
#         mydb.commit()
#     return "apagado"

# #VER TODOS OS CLIENTES
# @clientes.route('/ver_clientes_todos',  methods=['GET'])
# def ver_clientes_all():
#     myresult=[]
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         mycursor.execute("SELECT * FROM clientes")
#         myresult = mycursor.fetchall()
#         for cliente in myresult:
#             print (cliente)
#     return jsonify(myresult)

# #VER APENAS UM CLIENTE
# @clientes.route('/ver_cliente',  methods=['GET'])
# def ver_cliente():
#     client = ""
#     if request.method == "GET":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         id_cliente = request_json["id_cliente"]
#         mycursor.execute(f"SELECT * FROM clientes WHERE id_cliente=\"{id_cliente}\" ")
#         client = mycursor.fetchone()
#     return jsonify(client)


# #UPDATE CLIENTE
# @clientes.route('/update_cliente',  methods=['POST'])
# def update_cliente():
#     if request.method == "POST":
#         mycursor = mydb.cursor()
#         request_json = request.get_json()
#         id_cliente = request_json["id_cliente"]
#         mysql = f"UPDATE clientes SET nome_cliente = %s ,morada_cliente  = %s, codigo_postal = %s, localidade = %s, telefone_cliente = %s, instagram_cliente = %s, email = %s WHERE id_cliente = {id_cliente}"
#         val = (
#             request_json["nome_cliente"],
#             request_json["morada_cliente"],
#             request_json["codigo_postal"],
#             request_json["localidade"],
#             request_json["telefone_cliente"],
#             request_json["instragram_cliente"],
#             request_json["email"],
#         )
#         mycursor.execute(mysql,val)
#         mydb.commit()
#     return "bye"
