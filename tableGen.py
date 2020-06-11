import glob

langs = ['Python', 'JavaScript', 'Lua', 'C', 'C++', 'PostgreSQL']
latest_i = len(langs) - 1

table = 'URI  | Python | JavaScript | Lua | C |  C++ | PostgreSQL \n'
table += ':--- | :---: | :---: | :---: | :---: | :---: | :---: \n'
for id in range(2999):
    line = '{} | '.format(id)
    for i, lang in enumerate(langs):
        if glob.glob('{}/{}.*'.format(lang, id)):
            line = '{}:heavy_check_mark:'.format(line)
        
        if i < latest_i:
            line = '{} | '.format(line)
    
    if len(line) > 32:
        table += '{}\n'.format(line)

readme = open('README.md', 'r').read()
sep = '<!--TABLE-->'
readmeSplit = readme.split(sep, 1)

newReadme = readmeSplit[0]
newReadme += sep + '\n'
newReadme += table

f = open("README.md", "w")
f.write(newReadme)
f.close()