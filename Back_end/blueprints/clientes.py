from flask import jsonify, session
from utils.db import db
from flask import Blueprint, request
from flask_cors import cross_origin
import json
from models.cliente import Clientes
from models.encomenda import Encomendas

clientes = Blueprint("clientes", __name__)

#CRIAR UM CLIENTE
@clientes.route('/criar_cliente', methods={'GET','POST'})
@cross_origin()
def criar_cliente():
    if request.method == "POST":
        request_json = request.get_json()
        cliente_novo = Clientes(
        nome_cliente = request_json["nome_cliente"],
        morada_cliente = request_json["morada_cliente"],
        codigo_postal = request_json["codigo_postal"],
        localidade = request_json["localidade"],
        telefone_cliente = request_json["telefone_cliente"],
        instagram_cliente = request_json["instagram_cliente"],
        email = request_json["email"]
        )
        db.session.add(cliente_novo)
        db.session.commit()
        return "Cliente criado"
    return "Cliente não criado"

#VER TODOS OS CLIENTES
@clientes.route('/ver_clientes_todos',  methods=['GET'])
@cross_origin()
def ver_clientes_all():
    if request.method == "GET":
        clientes = Clientes.query.all()
        clientes_as_dict = []
        for cliente in clientes:
            clientes_as_dict.append(cliente.convert_to_dict())
        return json.dumps(clientes_as_dict)


#VER APENAS UM CLIENTE
@clientes.route('/ver_cliente/<int:id_cliente>',  methods=['GET'])
@cross_origin()
def ver_cliente(id_cliente):
    if request.method == "GET":
        cliente = Clientes.query.filter(Clientes.id_cliente == id_cliente).first()
        return json.dumps(cliente.convert_to_dict())

#UPDATE CLIENTE
@clientes.route('/update_cliente/<int:id_cliente>',  methods=['PUT'])
@cross_origin()
def update_cliente(id_cliente):
    if request.method == "PUT":
        request_json = request.get_json()
        db.session.query(Clientes).filter(Clientes.id_cliente==id_cliente).update(
            {"nome_cliente": request_json["nome_cliente"],
            "morada_cliente": request_json["morada_cliente"],
            "codigo_postal": request_json["codigo_postal"],
            "localidade": request_json["localidade"],
            "telefone_cliente": request_json["telefone_cliente"],
            "instagram_cliente": request_json["instagram_cliente"],
            "email": request_json["email"]})
        db.session.commit()
        return "Updatado com sucesso"

#DELETE UM CLIENTE
@clientes.route('/delete_cliente/<int:id_cliente>',  methods=['GET', 'DELETE'])
@cross_origin()
def delete_cliente(id_cliente):
    if request.method == "DELETE":
        cliente = Clientes.query.get(id_cliente)
        db.session.delete(cliente)
        db.session.commit()
        return"cliente deletado"


