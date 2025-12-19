#!/usr/bin/env bash
set -euo pipefail

# Script to fetch a few curated images from Unsplash Source and save them into public/assets
# This uses the unsplash source endpoint which redirects to a random image for a given query.
# It does not require an API key but results are random. For production use consider the official API.

OUT_DIR="public/assets"
mkdir -p "$OUT_DIR"

echo "Downloading Unsplash images to $OUT_DIR..."

curl -L -o "$OUT_DIR/owl.jpg" "https://source.unsplash.com/1600x900/?owl"
curl -L -o "$OUT_DIR/pouf.jpg" "https://source.unsplash.com/1600x900/?pouf,ottoman"
curl -L -o "$OUT_DIR/beanie.jpg" "https://source.unsplash.com/1600x900/?beanie,hat"

echo "Done. Downloaded:"
ls -lh "$OUT_DIR" | sed -n '1,200p'

# Notes:
# - These are random images and will change over time. If you need stable images, store fixed files in the repo
#   or use the Unsplash API with proper attribution.
# - To make this executable: chmod +x scripts/fetch-unsplash-images.sh
