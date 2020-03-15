#!/usr/bin/env bash

mkdir dist
mkdir dist/public

cp -R api/* ./dist
cp -R dashboard/dist/* ./dist/public

