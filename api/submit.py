from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)
CORS(app)

# Chemin vers le fichier JSON des informations d'identification du service
CREDENTIALS_FILE = 'client_secret_456449214810-q4ieccrpdu574sesej8tarq5ssebgv7q.apps.googleusercontent.com.json'

# Configuration de l'API Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name(CREDENTIALS_FILE, scope)
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
