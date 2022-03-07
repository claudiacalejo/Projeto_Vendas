from flask import jsonify
from flask_cors import cross_origin
from models.produtos import Produtos
from utils.db import db
from flask import Blueprint, request
import json

produtos = Blueprint("produtos", __name__)

#CRIAR UM PRODUTO
@produtos.route('/criar_produto', methods={'GET','POST'})
@cross_origin()
def criar_produto():
    if request.method == "POST":
        request_json = request.get_json()
        produto_novo = Produtos(
        nome_produto = request_json["nome_produto"],
        massa = request_json["massa"],
        recheio = request_json["recheio"],
        tamanho = request_json["tamanho"],
        preco_custo = request_json["preco_custo"],
        preco_venda = request_json["preco_venda"])
        db.session.add(produto_novo)
        db.session.commit()
    return "Produto inserido com sucesso"

#VER TODOS OS PRODUTOS
@produtos.route('/ver_produtos_todos',  methods=['GET'])
@cross_origin()
def ver_produtos_all():
    if request.method == "GET":
        produtos = Produtos.query.all()
        produtos_as_dict = []
        for produto in produtos:
            produtos_as_dict.append(produto.convert_to_dict())
        return json.dumps(produtos_as_dict)

#VER APENAS UM PRODUTO
@produtos.route('/ver_produto/<int:id_produtos>',  methods=['GET'])
@cross_origin()
def ver_produto(id_produtos):
    if request.method == "GET":
        produto = Produtos.query.filter(Produtos.id_produtos == id_produtos).first()
        return json.dumps(produto.convert_to_dict())


#UPDATE PRODUTO
@produtos.route('/update_produtos/<int:id_produtos>',  methods=['PUT'])
@cross_origin()
def update_produto(id_produtos):
    if request.method == "PUT":
        request_json = request.get_json()
        db.session.query(Produtos).filter(Produtos.id_produtos==id_produtos).update(
        {"nome_produto": request_json["nome_produto"],
        "massa": request_json["massa"],
        "recheio": request_json["recheio"],
        "tamanho": request_json["tamanho"],
        "preco_custo": request_json["preco_custo"],
        "preco_venda": request_json["preco_venda"]})
        db.session.commit()
        return "Updatado com sucesso"

#DELETE UM PRODUTO
@produtos.route('/delete_produto/<int:id_produtos>',  methods=['GET', 'DELETE'])
@cross_origin()
def delete_produto(id_produtos):
    if request.method == "DELETE":
        produto = Produtos.query.get(id_produtos)
        db.session.delete(produto)
        db.session.commit()
        return"Produto deletado"

