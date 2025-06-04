#!/bin/bash

# Erstelle backups Verzeichnis, falls es nicht existiert
mkdir -p backups

# Aktuelle Version als Referenz
REFERENCE="index.html"

# Erstelle Backup mit Zeitstempel
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="backups/index_${TIMESTAMP}.html"

# Kopiere die aktuelle Version
cp "$REFERENCE" "$BACKUP_FILE"

echo "Backup erstellt: $BACKUP_FILE" 