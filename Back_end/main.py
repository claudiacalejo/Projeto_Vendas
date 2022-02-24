from flask import Flask
from blueprints.extras import extras
from blueprints.clientes import clientes
from blueprints.produtos import produtos
from blueprints.encomendas import encomendas
from blueprints.encomendas_extra import encomendas_extras
from blueprints.encomendas_produtos import encomendas_produtos

app = Flask(__name__)
app.register_blueprint(clientes, url_prefix="/clientes")
app.register_blueprint(produtos, url_prefix="/produtos")
app.register_blueprint(encomendas, url_prefix="/encomendas")
app.register_blueprint(extras, url_prefix="/extras")
app.register_blueprint(encomendas_extras, url_prefix="/encomendas_extras")
app.register_blueprint(encomendas_produtos, url_prefix="/encomendas_produtos")

@app.route("/")
def teste():
    return "<h1>Test<h1>"

if __name__== '__main__':
    app.run(debug=True)