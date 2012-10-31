#######################################################################################################
##   generate a table of all single value properties and their defined values inside the BIM model   ##
#######################################################################################################
bim_model= "ADT-FZK-Haus-2005-2006.ifc"

use bim_model


property_names=[];
property_values={}

IFCPROPERTYSINGLEVALUE.where("all","o").each { |o|
	proName = o.name.gsub("'","")
	property_names << proName  if not property_names.include?(proName)
	property_values[proName] = [] if property_values[proName] == nil
	property_values[proName] << o.fix_it(o.nominalValue) if not property_values[proName].include?(o.fix_it(o.nominalValue))
}

puts "This BIM model has " + property_names.size.to_s + " different single value properties<hr><table>"

property_names.each { |p|
	puts "<tr><td>" + p + "</td><td>"
	HTML.select_box(p,property_values[p],"...",false,"")
	puts "</td></tr>"
}
puts "</table>"
#######################################
## API methods used in this script:  ##
#######################################
## use 
## IFCxxxxx.where
## fix_it
## HTML.select_box
## 