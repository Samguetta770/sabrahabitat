from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from dotenv import load_dotenv
import os

load_dotenv()  # Charge les variables d'environnement depuis le fichier .env

app = Flask(__name__)
CORS(app)

# Configuration de l'API Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = {
    "type": os.getenv("TYPE"),
    "project_id": os.getenv("PROJECT_ID"),
    "private_key_id": os.getenv("PRIVATE_KEY_ID"),
    "private_key": os.getenv("PRIVATE_KEY").replace('\\n', '\n'),
    "client_email": os.getenv("CLIENT_EMAIL"),
    "client_id": os.getenv("CLIENT_ID"),
    "auth_uri": os.getenv("AUTH_URI"),
    "token_uri": os.getenv("TOKEN_URI"),
    "auth_provider_x509_cert_url": os.getenv("AUTH_PROVIDER_X509_CERT_URL"),
    "client_x509_cert_url": os.getenv("CLIENT_X509_CERT_URL")
}

creds = ServiceAccountCredentials.from_json_keyfile_dict(credentials, scope)
client = gspread.authorize(creds)

# Ouvrir la feuille Google Sheets
spreadsheet = client.open("Benif_Sabra_Habitat")
worksheet = spreadsheet.sheet1

@app.route('/api/submit', methods=['POST'])
def submit_data():
    try:
        data = request.json
        data_list = [
            data['firstName'],
            data['lastName'],
            data['email'],
            data['phone'],
            data['message'],
            ','.join(data['marketing'])  # Convertit la liste de préférences de marketing en une chaîne
        ]
        worksheet.append_row(data_list)
        return jsonify({"message": "Data successfully written to Google Sheet"})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": f"Error: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
