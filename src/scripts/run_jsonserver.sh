CLIENT_DIRECTORY="$(dirname "$SCRIPT_DIRECTORY")"
LOCAL_IP=$(ipconfig getifaddr en0)
json-server --host "$LOCAL_IP" -w -p 4000 "$CLIENT_DIRECTORY/src/data/projects.json" && echo "Starting JSON Server..."