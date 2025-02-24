CLIENT_DIRECTORY="$(dirname "$SCRIPT_DIRECTORY")"
json-server -w -p 4000 "$CLIENT_DIRECTORY/src/data/projects.json" && echo "Starting JSON Server..."