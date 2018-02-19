import glob
import json
import os

# Needs python-slugify
from slugify import slugify

for targetFile in glob.glob("../src/data/*.json"):
    with open(targetFile, 'r+') as f:
        jsonString = f.read()
        f.seek(0)

        jsonContents = json.loads(jsonString)

        entryDate = jsonContents["EntryDate"]
        subject_fi = jsonContents["Subject_fi"]

        slug_date = entryDate[:10]
        slug_subject = slugify(subject_fi)
        slug = slug_date + "-" + slug_subject

        print("Writing slug for " + targetFile + " --> " + slug)
        
        jsonContents["Slug"] = slug

        # Id not needed anymore
        del jsonContents["Id"]

        json.dump(jsonContents, f, indent=4)
        f.truncate()