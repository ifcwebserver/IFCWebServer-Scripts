#Save building and furnishing elements in seperated IFC files
use "AC10-Institute-Var-1.ifc"
IFCBUILDINGELEMENT.where("all","o").each {   |o| o.to_ifc(o,"temp/" + o.globalId.gsub("'","") + ".ifc")}
IFCFURNISHINGELEMENT.where("all","o").each { |o| o.to_ifc(o,"temp/" + o.globalId.gsub("'","") + ".ifc")}
IFCSPACE.where("all","o").each {             |o| o.to_ifc(o,"temp/" + o.globalId.gsub("'","") + ".ifc")}

#save each storey in a separeted file
IFCRELCONTAINEDINSPATIALSTRUCTURE.where("all","o").each { |o|
o.to_ifc(o,"temp/" + o.relatingStructure.to_obj.globalId.gsub("'","") + ".ifc")
}