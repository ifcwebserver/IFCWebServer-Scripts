#####################################################################################################
## This script shows how to validate some requirements of BIM modles according to the              ##
## Norwegian Agency of Public Construction and Property BIM manual: http://www.statsbygg.no/bim    ##
#####################################################################################################
bim_model ="Blueberry090812.Ifc"

use bim_model

load_classes '|IFCPROJECT|IFCSITE|IFCBUILDINGSTOREY|IFCSPACE|'

HTML.h3 "Ref#11"
puts "One and only project object shall be present for each project"
if  IFCPROJECT.count != 1 then
	puts "<font color=red>not passed</font>"
else
	puts "<font color=blue>passed</font>"
end

HTML.h3 "Ref#12"
if  IFCSITE.count == 1 then
   puts "only one site object shall be present for each project....<font color=blue>passed</font>"
else
   puts "only one site object shall be present for each project....<font color=red>not passed</font>"
end

if IFCSITE.where("all","o.landTitleNumber").join == "$" then
	puts "<br><font color='red'>The site name shall contain the official ID of the Cadastral number</font>"
end

HTML.h3 "Ref#14"
HTML.h4 "The storey names shall be an integer numbers starting from 1 at the lowest floor level and incrementing by one for each floor level"
arr = IFCBUILDINGSTOREY.where("all","[o.elevation,o.name]")
i = 1
arr.sort.each {|f| 
	puts "Floor" + i.to_s + ": current name:<b>" + f[1].to_s  + "</b> has to be changed to :<b>" + i.to_s + "</b><br>" if f[2].to_s != i.to_s
	i+= 1 
}