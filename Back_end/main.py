from flask import Flask
from clientes import clientes
from produtos import produtos

app = Flask(__name__)
app.register_blueprint(clientes, url_prefix="/clientes")
app.register_blueprint(produtos, url_prefix="/produtos")

@app.route("/")
def teste():
    return "<h1>Test<h1>"

if __name__== '__main__':
    app.run(debug=True)