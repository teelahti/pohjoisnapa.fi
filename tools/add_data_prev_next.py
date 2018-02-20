import glob
import json
import os

slugs = []

def prev_slug(forslug):
    for i, s in enumerate(slugs):
        if s == forslug:
            if i > 0:
                return slugs[i-1]
            else:
                return None

def next_slug(forslug):
    for i, s in enumerate(slugs):
        if s == forslug:
            if i < (len(slugs) - 1):
                return slugs[i+1]
            else:
                return None

print("Reading list of slugs")
for targetFile in glob.glob("../src/data/*.json"):
    with open(targetFile, 'r') as f:
        jsonString = f.read()
        
    jsonContents = json.loads(jsonString)
    slugs.append(jsonContents["Slug"])

slugs.sort()

print("Opening each file and adding prev/next slug")
for targetFile in sorted(glob.glob("../src/data/*.json")):
    with open(targetFile, 'r+') as f:
        jsonString = f.read()
        f.seek(0)

        jsonContents = json.loads(jsonString)
        
        slug = jsonContents["Slug"]
        prev = prev_slug(slug)
        nxt = next_slug(slug)
        
        print(prev, slug, nxt)

        jsonContents["Previous"] = prev
        jsonContents["Next"] = nxt

        json.dump(jsonContents, f, indent=4)
        f.truncate()
