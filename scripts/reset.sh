#!/usr/bin/env bash

echo "Resetting Root folder"
rm -rf ./node_modules ./dist ./package-lock.json ./lsp

echo "Resetting Dashboard"
rm -rf ./dashboard/node_modules ./dashboard/dist ./dashboard/package-lock.json

echo "Resetting API"
rm -rf ./api/node_modules ./api/built-lambda ./api/package-lock.json

