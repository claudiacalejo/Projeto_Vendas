import yaml
import mysql.connector

db = yaml.safe_load(open('db.yaml'))
mydb = mysql.connector.connect(
    host = db['mysql_host'],
    user = db['mysql_user'],
    password = db['mysql_password'],
    database = db['mysql_db']
)