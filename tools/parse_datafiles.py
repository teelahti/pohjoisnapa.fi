import glob
import datetime
import json
import os
import io
import xmltodict

def input_cleaner(value):        
    return value.replace("Ã¤", "ä").replace("Ã¥", "å").replace("Ã¶", "ö").replace("\u000d", "") \
        .replace("\u000a", "").replace("â€™", "'").replace("â€œ", "`").replace("â€\x9d", "´") \
        .replace("\\r", "").replace("\n", "").replace("â€“", "-")

def parse_json_date(value):
    stripped = value.replace("/Date(", "").replace("000+0200)/", "").replace("000+0300)/", "")
    return datetime.datetime.fromtimestamp(int(stripped))

def replace_with_proper_date(jsonContents, propertyName):
    prop = jsonContents[propertyName]
    if prop is not None:
        jsonContents[propertyName] = parse_json_date(prop).isoformat()

if not os.path.exists("output"):
    os.makedirs("output")

for targetFile in glob.glob("*.json"):
    with open(targetFile, 'r') as f:
        jsonString = input_cleaner(f.read())

    jsonContents = json.loads(jsonString)

    # Dates are in format like: /Date(1137970740000+0200)/
    # Change the format to proper json format
    entryDate = parse_json_date(jsonContents["EntryDate"])
    jsonContents["EntryDate"] = entryDate.isoformat()
    replace_with_proper_date(jsonContents, "CreatedDate")
    replace_with_proper_date(jsonContents, "LastModifiedDate")

    # Replace all attachment image dates
    for img in jsonContents["Images"]:
        if img is not None:
            img["CreatedDate"] = parse_json_date(img["CreatedDate"]).isoformat()
    

    # Create target json file name     
    jsonFile = "output/" + entryDate.strftime("%Y-%m-%d") + ".json"

    print("Converting: " + targetFile + " --> " + jsonFile)
    
    # Need to skip json.dumps encoding to get proper scandinavian characters
    with io.open(jsonFile, 'w', encoding="utf8") as f:
        json.dump(jsonContents, f, ensure_ascii=False, indent=4)
