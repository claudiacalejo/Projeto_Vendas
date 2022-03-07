from flask import Blueprint, Flask
from flask_cors import CORS
from blueprints.clientes import clientes
from blueprints.extras import extras
from blueprints.produtos import produtos
from blueprints.encomendas import encomendas
# from blueprints.encomendas_extra import encomendas_extras
# from blueprints.encomendas_produtos import encomendas_produtos
from flask_sqlalchemy import SQLAlchemy
from config import DATABASE_CONNECTION_URI

app = Flask(__name__)

app.secret_key = 'mysecret'
print(DATABASE_CONNECTION_URI)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_CONNECTION_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# no cache
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

SQLAlchemy(app)

app.register_blueprint(produtos, url_prefix="/produtos")
app.register_blueprint(encomendas, url_prefix="/encomendas")
app.register_blueprint(extras, url_prefix="/extras")
# app.register_blueprint(encomendas_extras, url_prefix="/encomendas_extras")
# app.register_blueprint(encomendas_produtos, url_prefix="/encomendas_produtos")
app.register_blueprint(clientes, url_prefix="/clientes")

@app.route("/")
def teste():
    return "<h1>Test<h1>"

