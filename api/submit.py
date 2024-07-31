from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from google.oauth2.service_account import Credentials
import os

app = Flask(__name__)
CORS(app)

# Identifiants du compte de service Google à partir des variables d'environnement
service_account_info = {
    "type": "service_account",
    "project_id": os.environ.get("GPROJECT_ID"),
    "private_key_id": os.environ.get("PRIVATE_KEY_ID"),
    "private_key": os.environ.get("PRIVATE_KEY").replace("\\n", "\n"),  # Remplacer les \\n par \n
    "client_email": os.environ.get("CLIENT_EMAIL"),
    "client_id": os.environ.get("CLIENT_ID"),
    "auth_uri": os.environ.get("AUTH_URI"),
    "token_uri": os.environ.get("TOKEN_URI"),
    "auth_provider_x509_cert_url": os.environ.get("AUTH_PROVIDER_X509_CERT_URL"),
    "client_x509_cert_url": os.environ.get("CLIENT_X509_CERT_URL"),
    "universe_domain": "googleapis.com"
}

# Configuration de l'API Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = Credentials.from_service_account_info(service_account_info, scopes=scope)
client = gspread.authorize(credentials)

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
