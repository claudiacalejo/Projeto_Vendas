from flask import jsonify
from flask_cors import CORS
from utils.db import db
from flask import Blueprint, request
import json
from models.extras import Extras
from flask_cors import cross_origin
from models.encomenda import Encomendas

extras = Blueprint("extras", __name__)

#CRIAR UM NOVO EXTRA
@extras.route('/criar_extra', methods={'GET','POST'})
@cross_origin()
def criar_extra():
    if request.method == "POST":
        request_json = request.get_json()
        extra_novo = Extras(
        nome_extras = request_json["nome_extras"],
        preco_extras = request_json["preco_extras"])        
        db.session.add(extra_novo)
        db.session.commit()
        return "Extra criado"
    return "Extra não criado"


#VER TODOS OS EXTRAS
@extras.route('/ver_extras_todos',  methods=['GET'])
@cross_origin()
def ver_extras_all():
    if request.method == "GET":
        extras = Extras.query.all()
        extras_as_dict = []
        for extra in extras:
            extras_as_dict.append(extra.convert_to_dict())
        return json.dumps(extras_as_dict)

#VER APENAS UM EXTRA
@extras.route('/ver_extras/<int:id_extras>',  methods=['GET'])
@cross_origin()
def ver_extras(id_extras):
    if request.method == "GET":
        extra = Extras.query.filter(Extras.id_extras == id_extras).first()
        return json.dumps(extra.convert_to_dict())

#UPDATE EXTRA
@extras.route('/update_extras/<int:id_extras>',  methods=['PUT'])
@cross_origin()
def update_extras(id_extras):
    if request.method == "PUT":
        request_json = request.get_json()
        db.session.query(Extras).filter(Extras.id_extras==id_extras).update(
            {"nome_extras" : request_json["nome_extras"],
            "preco_extras" : request_json["preco_extras"]})
        db.session.commit()
        return "Updatado com sucesso"

#DELETE UM EXTRA
@extras.route('/delete_extras/<int:id_extras>',  methods=['GET', 'DELETE'])
@cross_origin()
def delete_extras(id_extras):
    if request.method == "DELETE":
        extra = Extras.query.get(id_extras)
        db.session.delete(extra)
        db.session.commit()
        return"cliente deletado"
