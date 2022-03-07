from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import  relationship
from utils.db import db

class Clientes (db.Model):
    __tablename__ = 'clientes'

    id_cliente = db.Column(db.Integer, primary_key=True)
    nome_cliente = db.Column(db.String(45))
    morada_cliente = db.Column(db.String(50))
    codigo_postal = db.Column(db.String(45))
    localidade = db.Column(db.String(45))
    telefone_cliente = db.Column(db.String(15))
    instagram_cliente = db.Column(db.String(30))
    email = db.Column(db.String(45))
    encomendas = db.relationship("Encomendas", back_populates="cliente" )

    def __init__(self, nome_cliente, morada_cliente, codigo_postal, localidade, telefone_cliente, instagram_cliente, email):
        self.nome_cliente = nome_cliente
        self.morada_cliente = morada_cliente
        self.codigo_postal = codigo_postal
        self.localidade = localidade
        self.telefone_cliente = telefone_cliente
        self.instagram_cliente = instagram_cliente
        self.email = email

    def convert_to_dict(self):
        return {
            "id_cliente": self.id_cliente,
            "nome_cliente": self.nome_cliente,
            "morada_cliente":  self.morada_cliente,
            "codigo_postal": self.codigo_postal,
            "localidade": self.localidade,
            "telefone_cliente": self.telefone_cliente,
            "instagram_cliente": self.instagram_cliente,
            "email": self.email,
            "encomendas": [encomenda.convert_to_dict_without_cliente() for encomenda in self.encomendas]
        }
    
    def convert_to_dict_without_encomendas(self):
        return {
            "id_cliente": self.id_cliente,
            "nome_cliente": self.nome_cliente,
            "morada_cliente":  self.morada_cliente,
            "codigo_postal": self.codigo_postal,
            "localidade": self.localidade,
            "telefone_cliente": self.telefone_cliente,
            "instagram_cliente": self.instagram_cliente,
            "email": self.email
        }
