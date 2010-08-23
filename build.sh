#!/bin/bash
# Makes it ready to be uploaded
# this script should be refactored since it's hard to scale

echo "Build script for Syntaxer"
echo "-------------------------"

# temporary folder
cd bin
mkdir build_tmp
cd ..

# source
cd src/chrome-extension

# version number of the extension
version=`eval cat manifest.json | grep "version" | cut -d \" -f 4`

# copy the files
cp -R * ../../bin/build_tmp/
cd ../../


cd tools
java -jar closure-compiler.jar --js=../bin/build_tmp/beautify.js --js_output_file=../bin/build_tmp/beautify.min.js
java -jar closure-compiler.jar --js=../bin/build_tmp/syntaxer-chrome.js --js_output_file=../bin/build_tmp/syntaxer-chrome.min.js
java -jar closure-compiler.jar --js=../bin/build_tmp/prettify/prettify.js --js_output_file=../bin/build_tmp/prettify/prettify.min.js
java -jar closure-compiler.jar --js=../bin/build_tmp/prettify/lang/lang-css.js --js_output_file=../bin/build_tmp/prettify/lang/lang-css.min.js
rm ../bin/build_tmp/beautify.js
mv ../bin/build_tmp/beautify.min.js ../bin/build_tmp/beautify.js
rm ../bin/build_tmp/syntaxer-chrome.js
mv ../bin/build_tmp/syntaxer-chrome.min.js ../bin/build_tmp/syntaxer-chrome.js
rm ../bin/build_tmp/prettify/prettify.js
mv ../bin/build_tmp/prettify/prettify.min.js ../bin/build_tmp/prettify/prettify.js
rm ../bin/build_tmp/prettify/lang/lang-css.js
mv ../bin/build_tmp/prettify/lang/lang-css.min.js ../bin/build_tmp/prettify/lang/lang-css.js
cd ..




# compressing
cd bin/build_tmp
zip -r syntaxer-chrome_$version.zip *
mv syntaxer-chrome_$version.zip ../
cd ..
rm -rf build_tmp
cd ..