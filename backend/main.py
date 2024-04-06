from flask import Flask
from flask_restx import Api, Resource
import json

app = Flask(__name__)
api = Api(app, version='1.0', title='Sample API', description='A sample API with Swagger UI')

# @api.route('/hello')
# class HelloWorld(Resource):
#     def get(self):
#         """
#         Returns a hello world message.
#         """
#         return {'message': 'Hello, World!'}

@api.route('/getkwin')
# @app.route('/getkwinbydevice')
class DummyKwInByUtilities(Resource):
    def get(self):
        """
        Returns a hello world message.
        """
        f = open('Utilitiess.json')
        
        # returns JSON object as 
        # a dictionary
        data = json.load(f)
        return data
@api.route('/getkwinbydays')
# @app.route('/getkwinbydevice')
class DummyKwInByDays(Resource):
    def get(self):
        """
        Returns a hello world message.
        """
        # Opening JSON file
        f = open('kwByday.json')
        
        # returns JSON object as 
        # a dictionary
        data = json.load(f)
        return data

if __name__ == '__main__':
    app.run(debug=True)