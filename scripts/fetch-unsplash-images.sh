#!/usr/bin/env bash
# Script to fetch placeholder images from Unsplash for local development
# NOTE: Use responsibly and follow Unsplash API guidelines. This script is optional.
set -euo pipefail
OUT_DIR="public/assets/unsplash"
mkdir -p "$OUT_DIR"

# Sample queries and filenames
declare -A IMAGES=(
  [yarn]="yarn.jpg"
  [crochet]="crochet.jpg"
  [handmade]="handmade.jpg"
)

for q in "${!IMAGES[@]}"; do
  file="$OUT_DIR/${IMAGES[$q]}"
  echo "Fetching sample image for: $q -> $file"
  # Use a simple, no-auth random photo URL from Unsplash Source (no API key)
  curl -s -L "https://source.unsplash.com/collection/895539/800x600/?$q" -o "$file" || echo "Failed to fetch $q"
done

echo "Done. Images saved to $OUT_DIR";
