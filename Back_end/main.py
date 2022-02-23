from flask import Flask
from blueprints.clientes import clientes
from blueprints.produtos import produtos
from blueprints.encomendas import encomendas

app = Flask(__name__)
app.register_blueprint(clientes, url_prefix="/clientes")
app.register_blueprint(produtos, url_prefix="/produtos")
app.register_blueprint(encomendas, url_prefix="/encomendas")

@app.route("/")
def teste():
    return "<h1>Test<h1>"

if __name__== '__main__':
    app.run(debug=True)