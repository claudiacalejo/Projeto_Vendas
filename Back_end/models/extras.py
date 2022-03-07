from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import  relationship
from utils.db import db

class Extras (db.Model):
    __tablename__ = 'extras'

    id_extras = db.Column(db.Integer, primary_key=True)
    nome_extras = db.Column(db.String(45))
    preco_extras = db.Column(db.String(45))

    def __init__(self, nome_extras, preco_extras):
        self.nome_extras = nome_extras
        self.preco_extras = preco_extras

    def convert_to_dict(self):
        return {
            "id_extras": self.id_extras,
            "nome_extras": self.nome_extras,
            "preco_extras":  self.preco_extras
        }
    
    # def convert_to_dict_without_encomendas(self):
    #     return {
    #         "id_cliente": self.id_cliente,
    #         "nome_cliente": self.nome_cliente,
    #         "morada_cliente":  self.morada_cliente,
    #         "codigo_postal": self.codigo_postal,
    #         "localidade": self.localidade,
    #         "telefone_cliente": self.telefone_cliente,
    #         "instagram_cliente": self.instagram_cliente,
    #         "email": self.email
    #     }
