#!/bin/bash
shopt -s extglob

babel src --out-dir build
echo "Browserifying..."
mv build/public/main.js build/public/__main.js
browserify build/public/__main.js > build/public/main.js
rm build/public/__main.js
echo "Copying view template..."
cp src/view.handlebars build