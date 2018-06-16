import os
from flask import Flask, render_template, request, redirect, jsonify
import requests

app = Flask(__name__)


@app.route('/')	
def main():
	return render_template('index.html')

@app.route('/locate/<ip>')	
def lookup(ip):
	data=requests.get('http://ip-api.com/json/'+ip).json()
	return data

@app.route('/mine')	
def mine():
	data=requests.get('http://ip-api.com/json/'+request.remote_addr).json()
	return data

if __name__ == '__main__':
	app.jinja_env.auto_reload = True
	app.config['TEMPLATES_AUTO_RELOAD'] = True
	# app.run(debug=True, port=4000)
	app.run(debug=True)
	