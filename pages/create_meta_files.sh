#!/bin/bash

# List of folders that need _meta.js
FOLDERS=(
  "pages/getting-started"
  "pages/core-concepts"
  "pages/evaluators"
  "pages/api-reference"
  "pages/api-reference/endpoints"
  "pages/api-reference/schemas"
  "pages/guides"
  "pages/guides/advanced"
  "pages/examples"
  "pages/contributing"
)

# Placeholder content for _meta.js
META_CONTENT="export default {
  index: { title: 'Overview' },
  // Add more navigation items here
};"

# Create _meta.js in each folder if it doesn't exist
for FOLDER in "${FOLDERS[@]}"; do
  META_FILE="$FOLDER/_meta.js"
  if [ ! -f "$META_FILE" ]; then
    echo -e "$META_CONTENT" > "$META_FILE"
    echo "Created $META_FILE"
  else
    echo "Skipped $META_FILE (already exists)"
  fi
done

echo "Meta file creation complete!"
