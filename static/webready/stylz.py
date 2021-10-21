import os
import re
import string

f = open("./thesis.html", "r")
contents = f.readlines()
f.close()

f1 = open("./hoverglossary.txt", "r")
glossary = f1.readlines()
f1.close()

scriptstuff =[]
scriptstuff.append("<script>\n")
scriptstuff.append("function myFunction(id) {\n")
scriptstuff.append("  var body = document.body,\n")
scriptstuff.append("      html = document.documentElement;\n")
scriptstuff.append("  var height = Math.max( body.scrollHeight, body.offsetHeight,\n")
scriptstuff.append("                       html.clientHeight, html.scrollHeight, html.offsetHeight );\n")
scriptstuff.append("  var elmntInterest = document.getElementById(id);\n")
scriptstuff.append("  var shift = document.body.getBoundingClientRect();\n")
scriptstuff.append("  var elemRect = elmntInterest.getBoundingClientRect();\n")
scriptstuff.append("  var elemRect_shift = elemRect.top - shift.top;\n")
scriptstuff.append('  return parseInt(100*(elemRect_shift)/(height))+"%";\n')
scriptstuff.append("}\n")
i=0
glossaryhold = list(glossary)
content_size = len(contents)
while i < content_size :
  #refresh glossary for each chapter
  #if "#glo" in contents[i] :
  #  oldvalue = contents[i].split('>')[1].split('<')[0]
  #  newvalue  = '<span class="hovercard">'+ contents[i].split('>')[1].split('<')[0].split('(')[0] + '</span>'
  #  contents[i] = contents[i].replace(oldvalue, newvalue)
  #  print(contents[i])
  if "@@" in contents[i] : 
    contents[i] = contents[i].replace('@@','')
  if "\\relax" in contents[i] : 
    contents[i] = contents[i].replace('\\relax','')
  #if 'Doctor&#x00A0' in contents[i] : # need to get rid of the unbreakable line characters so webpage can be resposively resized correctly
  # contents[i] = contents[i].replace('&#x00A0;', ' ')



  if "<span class='underline'>" in contents[i]:
    contents[i] = contents[i].replace("<span class='underline'>", "<br/><span class='underline'> ")  
  if "<span class='cmr-12'>" in contents[i] :
    contents[i] = contents[i].replace("<span class='cmr-12'>", "<br/><span class='cmr-12'> ")
  if "<span class='cmcsc-10x-x-207'>" in contents[i] :
    contents[i] = contents[i].replace("<span class='cmcsc-10x-x-207'>", "<br/><span class='cmcsc-10x-x-207'> ")
    contents.insert(i,"<br/><hr width='100%'>\n")
    i=i+1
    content_size=content_size+1
  #if '___________' in contents[i]:
  #  contents[i] = re.sub("_", "", contents[i])
  #if 'likechapterHead' in contents[i] or 'chapterHead' in contents[i] or 'appendixHead' in contents[i]:
  #  contents.insert(i,"<br/><hr width='100%'>\n")
  #  i=i+1
  #  content_size=content_size+1

  if 'width' in contents[i]  and 'height' in contents[i]:
    contents[i] = re.sub("width='([0-9]+)'","width='85%'",contents[i])
    contents[i] = re.sub("height='([0-9]+)'","max-height='50px'",contents[i])
  #if 'List of Tables</span>' in contents[i] :
  #  contents[i] = 'class="cmbx-12x-x-172">List of Tables</span>'
  #  contents[i-2] = ''
  #if 'List of Figures</span>' in contents[i] :
  #  contents[i] = 'class="cmbx-12x-x-172">List of Figures</span>'
  #  contents[i-2] = ''
  if 'chapterHead' in contents[i] or 'appendixHead' in contents[i] : 
    glossaryhold = list(glossary)     
  if i>375 and 'sectionHead' not in contents[i-1] and 'chapterHead' not in contents[i-1] and '</a>' not in contents[i] and 'href' not in contents[i]:
    itemhold = 'coolioandtheganginitializerstring'
    for j,item in enumerate(glossaryhold) : 
      item = item.replace('\n', '') #strip newline from text file entry
      #if "{disambig}" in item : 
      #  item = item.split("{disambig}")[1]
      if re.search(r'\b' + item.lower()+ "" + r'\b', contents[i].lower()) and itemhold not in item:
        contents[i]  = contents[i].replace(item, '<a href="#glo:cern"><span class="hovercard">'+ item + '</span></a>')
        glossaryhold[j] = 'wordfound-removingfromlist'
        itemhold = item # attend to case where e.g. 'electron' gets highlighted in 'eletrons'
  doPercentThing=False
  if doPercentThing and ('chapterToc' in contents[i] or 'sectionToc' in contents[i] or 'subsectionToc' in contents[i] or 'subsubsectionToc' in contents[i] or 'appendixToc' in contents[i]) : 
    refhold = ""
    if "'" in contents[i+1] : 
      ref = contents[i+1].split("href")[1].split("'")[1] 
      ref = ref.replace('#','')
      print(ref)
      newline = "document.getElementById('%s').innerHTML = myFunction('%s');\n"%(refhold+str(i), ref)
      contents.insert(i,"<span><a id='%s'></a></span></div>\n"%(refhold+str(i)) + "<div id='HASH'>\n")
      scriptstuff.append(newline)
      i=i+1
      content_size=content_size+1
      refhold = ref
  if '</body>' in contents[i] :
    for s in scriptstuff :
      contents.insert(i,s)
      i=i+1
      content_size=content_size+1
    print('jawn?')
    contents.insert(i,'<script src="hovercard/docs/index.js"></script>\n')
    contents.insert(i,'<script src="hovercard/docs/demo.js"></script>\n')
    contents.insert(i,"</script>\n")
    i=i+3
    content_size=content_size+3
  i=i+1
                                                                                 
f = open("./thesis_stylez.html", "w")
contents = "".join(contents)
f.write(contents)
f.close()
