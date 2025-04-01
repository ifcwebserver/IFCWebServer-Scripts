use "AC10-Institute-Var-1.ifc"
puts "<table><tr><td valign='top'>" 
IFCRELCONTAINEDINSPATIALSTRUCTURE.
	where("all",
	"puts '<h2>' + o.relatingStructure.to_obj.as_link + '</h2>';o.relatedElements.toIfcObject.each{|k,v|  puts '|---' + v.as_link + '<br>'}")
puts "</td><td valign='top'>"
IFCRELAGGREGATES.
	where("all",
	"puts '<h2>' + o.relatingObject.to_obj.as_link + '</h2>';o.relatedObjects.toIfcObject.each{|k,v|  puts '|---' + v.as_link + '<br>'}")
puts "</td></tr></table>"