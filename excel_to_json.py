import json
import codecs

data = json.load(codecs.open('data.json', 'r', 'utf-8-sig'))
#print(data)

ordnungsruf = {}

result = []
for item in data['ordnungsrufe']:
    result.append({
        'calledOut': {
            'name': item['calledOutName'],
            'party': item['calledOutParty']
        },
        'date': item['date'],
        'president': item['president'],
        'source': {
            'pdf': item['source'],
            'sectionFrom': '',
            'sectionTo': '',
            'linkToVideo': ''
        }
    })
print (result)
#print(ordnungsruf)
with open('ordnungsrufe_ordered.json', 'w') as json_file:
  json.dump(result, json_file, indent=2)