import glob
import datetime
import json
import os
import io

def remove_suffix(path):
    return os.path.splitext(path)[0]

outputFile = "combined.json"

if os.path.isfile(outputFile):
    os.remove(outputFile)

all = json.loads("{}")

for targetFile in sorted(glob.glob("*.json")):
    with open(targetFile, 'r') as f:
        jsonString = f.read()

    jsonContents = json.loads(jsonString)
    ns = remove_suffix(targetFile)

    print("Converting " + ns)
    all[ns] = jsonContents


# Need to skip json.dumps encoding to get proper scandinavian characters
with io.open(outputFile, 'w', encoding="utf8") as f:
   json.dump(all, f, ensure_ascii=False, indent=4)
