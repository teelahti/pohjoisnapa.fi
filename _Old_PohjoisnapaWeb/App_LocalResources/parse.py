import glob
import json
import os
import io
import xmltodict

if not os.path.exists("fi"):
    os.makedirs("fi")

if not os.path.exists("en"):
    os.makedirs("en")

for targetFile in glob.glob("*.resx"):
    with open(targetFile, 'r') as f:
        xmlString = f.read()
    
    # Find target json file name 
    # remove .resx
    cleanedFile = targetFile[:-5]
    if cleanedFile.endswith(".en"):
        jsonFile = "en/" + cleanedFile[:-3] + ".json"
    else:
        jsonFile = "fi/" + cleanedFile + ".json"

    print("Converting: " + targetFile + " --> " + jsonFile)

    jsonContents = xmltodict.parse(xmlString)

    formatted = {}
    for dval in jsonContents["root"]["data"]:
        formatted[dval["@name"]] = dval["value"]
    
    # Need to skip json.dumps encoding to get proper scandinavian characters
    with io.open(jsonFile, 'w', encoding="utf8") as f:
        json.dump(formatted, f, ensure_ascii=False, indent=4)