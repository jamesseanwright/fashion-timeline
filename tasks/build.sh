#!/bin/bash
shopt -s extglob

babel src/{!(public),**}/*.* --out-dir build
cp src/view.handlebars build