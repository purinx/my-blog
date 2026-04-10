#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../../../.." && pwd)"
ARCHIVE_PATH="${REPO_ROOT}/tmp/radix-icons.zip"
CACHE_DIR="${REPO_ROOT}/tmp/radix-icons"
SOURCE_URL="${1:-https://raw.githubusercontent.com/radix-ui/icons/master/radix-icons.zip}"

mkdir -p "${CACHE_DIR}"
rm -f "${CACHE_DIR}"/*.svg

curl -L -o "${ARCHIVE_PATH}" "${SOURCE_URL}"
unzip -q -o "${ARCHIVE_PATH}" -d "${CACHE_DIR}"

ICON_COUNT="$(find "${CACHE_DIR}" -maxdepth 1 -type f -name "*.svg" | wc -l | tr -d " ")"
echo "Saved ${ICON_COUNT} SVG files to ${CACHE_DIR}"
