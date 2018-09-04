#Find duplicated single properties and property sets

use "AC90R1-niedriha-V2-2x3.ifc"

singleValues={}
IFCPROPERTYSINGLEVALUE.where("o","o").each { |o|
singleValues[o.name + "||" + o.nominalValue.to_s + "(" + o.unit.to_s + ")"] = [] if singleValues[o.name + "||" + o.nominalValue.to_s + "(" + o.unit.to_s + ")"] == nil
singleValues[o.name + "||" + o.nominalValue.to_s + "(" + o.unit.to_s + ")"] << o.line_id}

pSet={}
IFCPROPERTYSET.where("o","o").each { |o|
pSet[o.property_details] = [] if pSet[o.property_details] == nil
pSet[o.property_details] << o.globalId}

HTML.h1 "Result:"
HTML.tableHeader "PropertySingleValue count","Uniq PropertySingleValue","Save ratio %"
HTML.arr_to_row [IFCPROPERTYSINGLEVALUE.count,singleValues.size,100 - 100*(singleValues.size.to_f/IFCPROPERTYSINGLEVALUE.count.to_f)]
puts "</table></br>"
HTML.tableHeader "PropertySet count","Uniq PropertySet","Save ration %"
HTML.arr_to_row [IFCPROPERTYSET.count,pSet.size,100 - 100*(pSet.size.to_f/IFCPROPERTYSET.count.to_f)]
puts "</table><hr>"

HTML.h2 "Uniq PropertySingleValue"
HTML.tableHeader "PropertyName","Value(unit)","duplicated instances"
singleValues.each { |k,v|
HTML.arr_to_row k.split("||") + [v.size-1]}
puts "</table>"

HTML.h2 "Uniq IfcPropertySet"
HTML.tableHeader "PropertySet","duplicated instances"
pSet.each { |k,v|
HTML.arr_to_row [k] + [v.size-1]}
puts "</table></br>"

uniqCartesianPoint=IFCCARTESIANPOINT.where("o","o.coordinates").uniq.size
HTML.tableHeader "CartesianPoint count","Uniq CartesianPoint","Save ration %"
HTML.arr_to_row [IFCCARTESIANPOINT.count,uniqCartesianPoint,100 - 100*(uniqCartesianPoint.to_f/IFCCARTESIANPOINT.count.to_f)]
puts "</table><hr>"