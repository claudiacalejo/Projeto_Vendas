from http.client import PRECONDITION_FAILED
from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey, Date, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import  relationship
from utils.db import db

encomendas_extras = db.Table("encomendas_extras",
    db.Column("id_encomenda_extra", db.Integer, primary_key=True, ForeignKey=True("encomendas.id_encomendas")),
    db.Column("id_extra", db.Integer, ForeignKey = True("extras.id_extras")),
    db.Column("quantidade", db.String(45)),
    db.Column("preco", db.String(60)),
    db.Column("observacoes", db.String(60)))

class Encomendas (db.Model):
    __tablename__ = 'encomendas'

    id_encomendas = db.Column(db.Integer, primary_key=True)
    id_cliente = db.Column(db.Integer, db.ForeignKey('clientes.id_cliente'))
    data_encomenda = db.Column(db.Date)
    data_entrega = db.Column(db.Date)
    hora_entrega = db.Column(db.String(45))
    metodo_entrega = db.Column(db.String(15))
    estado = db.Column(db.String(45))
    observacoes = db.Column(db.String(400))
    cliente = db.relationship("Clientes", uselist = False, back_populates="encomendas")
    extras = db.relationshup("Extras", secondary=encomendas_extras, backref=db.backref('extras'), )

    def __init__(self, id_cliente, data_encomenda, data_entrega, hora_entrega, metodo_entrega, estado, observacoes):
        self.id_cliente = id_cliente
        self.data_encomenda = data_encomenda
        self.data_entrega = data_entrega
        self.hora_entrega = hora_entrega
        self.metodo_entrega = metodo_entrega
        self.estado = estado
        self.observacoes = observacoes

    def convert_to_dict(self):
        return{
            "id_encomendas": self.id_encomendas,
            "id_cliente" : self.id_cliente,
            "data_encomenda": self.data_encomenda.strftime("%d/%m/%Y"),
            "data_entrega":  self.data_entrega.strftime("%d/%m/%Y"),
            "hora_entrega": self.hora_entrega,
            "metodo_entrega": self.metodo_entrega,
            "estado": self.estado,
            "observacoes": self.observacoes,
            "cliente": self.cliente.convert_to_dict_without_encomendas()
        }

    def convert_to_dict_without_cliente(self):
        return{
            "id_encomendas": self.id_encomendas,
            "id_cliente" : self.id_cliente,
            "data_encomenda": self.data_encomenda.strftime("%d/%m/%Y"),
            "data_entrega":  self.data_entrega.strftime("%d/%m/%Y"),
            "hora_entrega": self.hora_entrega,
            "metodo_entrega": self.metodo_entrega,
            "estado": self.estado,
            "observacoes": self.observacoes
        }

