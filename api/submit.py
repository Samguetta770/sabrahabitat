from flask import Flask, request, jsonify
from flask_cors import CORS
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)
CORS(app)

# Chemin vers le fichier JSON des informations d'identification du service
CREDENTIALS_FILE = {
  "type": "service_account",
  "project_id": "sabrahabitat",
  "private_key_id": "729ddff4e256c6be897da7c25e5e35dcc78cf03f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOZS2AlXnbnzND\nOnHfxhMrzXoZ0tilzCdsHQaYrJDr8N/474lOOodz5sFvEcviaE0PRD1ut5Wui5Ns\nCUnHSNCb7yda6IWmLpKreeQ1y1i0x4UZ7RMcpFLrTWYoe7bMNOxqtQXBN+9t00kU\n1w7cNpah54JbGS+l2fkbPe+PYFyePRmtuad1l5XqG+6wVXT0NGOiBZ1dy5qgpuC/\nJsFO2/4/jQPJTYe59TdlE7m8ST1/uY0QvNRXBwYKlkSo2wx0e28d9Ve281Mb52gl\n6JpzK5oGWBgIg9IBG7UC1q5yfbYxhzy5lZOZMrm/fDM/ugXR2NCcZ89GTMhFvvsP\neg3FyK+VAgMBAAECggEAC3g1MZHDW9WCHLdU8SLfFsdOv0y/RvTfn12Offa3F6Id\nJaEvDJ458d5+PzLjmswu73yzfBBiiJ7VKZMX88A25BCKjs/YOroD9gxJPaywQPjU\njPGOeV9NDzH6pBEkTg+HPtMaRbrP2NH3etZrFoF5IaJoWsEibY1V+4Psy2jbck1i\ng51fZoYOxtkDjy5Uz4LHnKprD8DvE0SkjHY7iI7SI4xtqg790MDs+lx01tCMPRpM\ntIU/mdayMaogoI3VoxHUOyvCXOanXzCW0PlN9QJbeBeE67/8sjPQKBPePuTdsOx9\n0FdJgYuk3Jd26FqVWEjS5afMzi4r9tu4iXveE9HAgQKBgQDDR3mIxqRrST9+9ifb\nuSRF7Vyebx73QjKyTDmi/iplg+Yy38/5pbI6NWxkltJK9wc/dY/K3xZkQdSxlDCG\ndMBjIGGDUronlVs0g9hCvcDSNkbZ4R/3EcvdoBHbCGMUqWZXKttzNU8JPGsUGig5\nN+D69WCunEtqrJX/OJjhJ0hDwQKBgQC6rA6nVS/FerJ30Qp/Cu095KtWO29bLGuK\nvS795eOqtPrv/YL11OP5l3YqIC8hhuZ6Pzj2BH9/kbr9PrB6p9eYnIvf7wqDG6pT\nQdfAa2wAhdApP0+YQqi9lVk5BjKfw4bWymmAgijXMSJMFjJmGKeS3fKVYsIlBtkb\nybvcsHxQ1QKBgBywN26coDMSw71HNHvXKzkKsfyknov8sa33/M+xP1FCm2MF9mva\np+BdUNtGPQa+W9Y60zEerQ91jGW6O5bFOC5X53t/f9Go44lHhVHoxpcbWjVQGX4W\nozif93+SL9wtNte/eBXo0v+sXJ7LaPVe/DJiMh304C9/w1mHWw5Y0wkBAoGBAKDt\nB0z2QVKrbgOg8L2I+/EpmxOh9WPSLXvTkBlOADEACHywPiATwd0/15yFVlw+4Z5t\ntntQcWHWji8XxihXXaOxAVyxxIw2Y2WXE5pMgTUKJuQIMmP+w118zQg98ZKNi0bM\nBJvGmdK6Buk1EYm2o3AXarOiCeDFwJEWHqAofWNpAoGAPYdgyceoJz4+GWkgfS7U\nHIgfJNLWwgzmIndmatiNnrxELWp0Q95YlDkxbOH5TD6LCE5N0xGQM+juNv09vG+U\nokGmAJCyOcwRaMgfnH05YWe/Ecmr/RBD7cfOO9vCvHlsTquZLkk0ITncMkiCG194\nR41I4gJ3LIRwrkY0dAoBCFc=\n-----END PRIVATE KEY-----\n",
  "client_email": "benifform@sabrahabitat.iam.gserviceaccount.com",
  "client_id": "117350810326682024917",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/benifform%40sabrahabitat.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


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
