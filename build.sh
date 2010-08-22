#!/bin/bash
# Makes it ready to be uploaded

cd ./src/chrome-extension

# version number of the extension
version=`eval cat manifest.json | grep "version" | cut -d \" -f 4`

# compressing
zip -r syntaxer-chrome_$version.zip *
mv syntaxer-chrome_$version.zip ../../bin
cd ../..