#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../../../.." && pwd)"
CACHE_DIR="${REPO_ROOT}/tmp/radix-icons"
PUBLIC_DIR="${REPO_ROOT}/public/icons"

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $(basename "$0") <icon-name> [dest-name]" >&2
  echo "Example: $(basename "$0") plus" >&2
  echo "Example: $(basename "$0") plus add" >&2
  exit 1
fi

ICON_NAME="$1"
DEST_NAME="${2:-$ICON_NAME}"
SOURCE_PATH="${CACHE_DIR}/${ICON_NAME}.svg"
DEST_PATH="${PUBLIC_DIR}/${DEST_NAME}.svg"

if [[ ! -f "${SOURCE_PATH}" ]]; then
  echo "Icon not found: ${SOURCE_PATH}" >&2
  echo "Run fetch-radix-icons.sh first." >&2
  exit 1
fi

mkdir -p "${PUBLIC_DIR}"
cp "${SOURCE_PATH}" "${DEST_PATH}"
echo "Published ${SOURCE_PATH} -> ${DEST_PATH}"
