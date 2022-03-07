from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import  relationship
from utils.db import db

class Produtos (db.Model):
    __tablename__ = 'produtos'

    id_produtos = db.Column(db.Integer, primary_key=True)
    nome_produto = db.Column(db.String(45))
    massa = db.Column(db.String(45))
    recheio = db.Column(db.String(45))
    tamanho = db.Column(db.String(45))
    preco_custo = db.Column(db.String(45))
    preco_venda = db.Column(db.String(45))

    def __init__(self, nome_produto, massa, recheio, tamanho, preco_custo, preco_venda):
        self.nome_produto = nome_produto
        self.massa = massa
        self.recheio = recheio
        self.tamanho = tamanho
        self.preco_custo = preco_custo
        self.preco_venda = preco_venda

    def convert_to_dict(self):
        return{
            "id_produtos": self.id_produtos,
            "nome_produto" : self.nome_produto,
            "massa": self.massa,
            "recheio":  self.recheio,
            "tamanho": self.tamanho,
            "preco_custo": self.preco_custo,
            "preco_venda": self.preco_venda,
        }

    # def convert_to_dict_without_cliente(self):
    #     return{
    #         "id_encomendas": self.id_encomendas,
    #         "id_cliente" : self.id_cliente,
    #         "data_encomenda": self.data_encomenda.strftime("%d/%m/%Y"),
    #         "data_entrega":  self.data_entrega.strftime("%d/%m/%Y"),
    #         "hora_entrega": self.hora_entrega,
    #         "metodo_entrega": self.metodo_entrega,
    #         "estado": self.estado,
    #         "observacoes": self.observacoes
    #     }
