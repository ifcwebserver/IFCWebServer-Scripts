use '2x3_simplefied.ifc';
HTML.h1 "<font color=blue>change the name of all windows : new name = 'Window:' + old Name</font>"
HTML.h2 "Windows data before editing"
IFCWINDOW.list
IFCWINDOW.where("all","o").each { |o| o.name = "'Window:" + o.name.sub("'","")}
HTML.h2 "Windows data after editing"
IFCWINDOW.list
HTML.h3 "Print the windows data in IFC format to check if the modifications have been saved"
puts IFCWINDOW.where("all","o.to_PSF21")