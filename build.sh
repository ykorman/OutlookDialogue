#!/bin/bash

TEST_URL="https://localhost:4443"
PROD_URL=${URL}

sed -e "s|${TEST_URL}|${PROD_URL}|" manifest.xml > manifest_prod.xml
