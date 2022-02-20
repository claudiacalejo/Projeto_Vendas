from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import yaml

app = Flask(__name__)


#Configure DB
db = yaml.safe_load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)

@app.route('/', methods={'GET','POST'})
@app.route('/home')
def home_page():
    if request.method == "POST":
        login_details = request.form
        username = login_details['username']
        password = login_details['password']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO `projeto_despesas`.`db_login` (`username`, `password`) VALUES(%s, %s)",(username, password))

      
        mysql.connection.commit()
        cur.close()
        return 'sucess'
    return 'lol'

if __name__== '__main__':
    app.run(debug=True)

    #teste
