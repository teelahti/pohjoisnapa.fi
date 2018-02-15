import glob
import json
import os
import io
import xmltodict

def remove_suffix(path):
    return os.path.splitext(path)[0]

def xml_cleaner(path, key, value):
    try:
        value = value.strip()
        if not value:
            return None
        
        value = value.replace("\n", " ").replace("\t", "")
    except:
        pass
    return key, value


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
        jsonFile = "en/" + remove_suffix(cleanedFile[:-3]) + ".json"
    else:
        jsonFile = "fi/" + remove_suffix(cleanedFile) + ".json"

    print("Converting: " + targetFile + " --> " + jsonFile)

    jsonContents = xmltodict.parse(xmlString, postprocessor=xml_cleaner)

    formatted = {}
    for dval in jsonContents["root"]["data"]:
        formatted[dval["@name"]] = dval["value"]
    
    # Need to skip json.dumps encoding to get proper scandinavian characters
    with io.open(jsonFile, 'w', encoding="utf8") as f:
        json.dump(formatted, f, ensure_ascii=False, indent=4)
