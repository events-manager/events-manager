#!/usr/bin/env bash

mkdir dist
mkdir dist/public

mv api/* ./dist
mv -R dashboard/dist/* ./dist/public

