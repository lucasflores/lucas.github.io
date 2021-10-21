import os
import re
import string

f = open("./thesis.html", "r")
contents = f.readlines()
f.close()

scriptstuff =[]
scriptstuff.append("<script>\n")

scriptstuff.append('<!-- Sidebar  -->\n')
scriptstuff.append('<nav id="sidebar" class="sidebar-font">\n')
scriptstuff.append('    <div class="sidebar-header">\n')
scriptstuff.append('        <h3>Lucas Flores\'s Doctoral  Thesis</h3>\n')
scriptstuff.append('    </div>\n')
scriptstuff.append('    <ul class="list-unstyled components">\n')

isChapter1 = True
isChapter2 = True
i=0
content_size = len(contents)
while i < content_size :
  if ('chapterToc' in contents[i] or 'sectionToc' in contents[i] or 'subsectionToc' in contents[i] or 'subsubsectionToc' in contents[i]) and 'id' in contents[i]: 
    print(contents[i])
    if i < content_size-1 : 
      if "'" in contents[i] : 
        ref = contents[i].split("'")[5] 
        #print(ref)
        #print(contents[i])
        #ref = contents[i].split("'")[1] 
        ref = ref.replace('#','')
        print(ref)
        name = contents[i].split('>')[3].split('<')[0]
        print(name)
    if 'chapterToc' in contents[i] and 'sectionToc' not in contents[i+1]:
      scriptstuff.append('        <li>\n')
      scriptstuff.append('            <a href="#%s">%s</a>\n'%(ref,name))
      scriptstuff.append('        </li>\n')
    elif 'chapterToc' in contents[i] and 'sectionToc' in contents[i+1] :
      if 'sectionToc' in contents[i-1] or 'subsectionToc' in contents[i-1] or 'subsubsectionToc' in contents[i-1] : 
        scriptstuff.append('            </ul>\n')
      scriptstuff.append('        <li>\n')
      scriptstuff.append('            <a href="#%s" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">%s</a>\n'%(ref+str(i), name ))
      scriptstuff.append('            <ul class="collapse list-unstyled" id="%s">\n'%(ref+str(i)))
    if 'sectionToc' in contents[i] and 'subsectionToc' not in contents[i]: 
        scriptstuff.append('                <li>\n')
        scriptstuff.append('                    <a href="#%s">%s</a>\n'%(ref, name))
        scriptstuff.append('                </li>\n')
  i=i+1

scriptstuff.append('            </ul>\n')
scriptstuff.append('    </ul>\n')
scriptstuff.append('    <ul class="list-unstyled CTAs">\n')
scriptstuff.append('        <li>\n')
scriptstuff.append('            <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" class="download">Download Paper</a>\n')
scriptstuff.append('        </li>\n')
scriptstuff.append('        <li>\n')
scriptstuff.append('            <a href="https://www.hepdata.net/record/90608" class="download">HEPData Space</a>\n')
scriptstuff.append('        </li>\n')
scriptstuff.append('    </ul>\n')
scriptstuff.append('</nav>\n')

#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#">Introduction</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#TitlePagesSubMenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Theoretical Framework</a>\n')
#scriptstuff.append('            <ul class="collapse list-unstyled" id="TitlePagesSubMenu1">\n')
#scriptstuff.append('                <li>\n')
#scriptstuff.append('                    <a href="#x1-50002">Introduction</a>\n')
#scriptstuff.append('                </li>\n')
#scriptstuff.append('                <li>\n')
#scriptstuff.append('                    <a href="#x1-60002.1">Quantum Field Theory</a>\n')
#scriptstuff.append('                </li>\n')
#scriptstuff.append('            </ul>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#x1-160003">LHC and The ATLAS Detector</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#x1-360004">Electron ID at ATLAS</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#">An Exercise in Three Lepton Resonances</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="#">Conclusion</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('    </ul>\n')
#scriptstuff.append('    <ul class="list-unstyled CTAs">\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" class="download">Download Paper</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('        <li>\n')
#scriptstuff.append('            <a href="https://www.hepdata.net/record/90608" class="download">HEPData Space</a>\n')
#scriptstuff.append('        </li>\n')
#scriptstuff.append('    </ul>\n')
#scriptstuff.append('</nav>\n')
                                                                                 
f = open("./sidbar.html", "w")
contents = "".join(scriptstuff)
f.write(contents)
f.close()
