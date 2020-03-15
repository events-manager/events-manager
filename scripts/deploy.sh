#!/usr/bin/env bash

mkdir dist
mkdir dist/public

mv api/built-lambda ./dist
mv dashboard/dist/* ./dist/public

