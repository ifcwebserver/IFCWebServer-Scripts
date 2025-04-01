use "AC10-Institute-Var-1.ifc"
$space_globalid="3UEb2iq7D2tOgbX6Mufs$X"

puts "<table><tr><th>Picture</th><th>Data</th><th>ConnectionGeometry</th></tr>"
IFCRELSPACEBOUNDARY.where("o.relatingSpace.to_obj.globalId.include?('#$space_globalid')","o").each { |o|
puts "<tr>"
puts "<td><a href='../sgl/index.php?url=../temp/dae/" + o.globalId.gsub("'","") + "'>" 
puts HTML.img('../temp/png/' + o.globalId + '.png',250) + "</a></td>"
puts "<td><b>GUID:</b>" + o.globalId + "<br>"
puts "<b>RelatingSpace:</b>" + o.relatingSpace.to_obj.name + '(' + o.relatingSpace.to_obj.globalId + ")<br>"
relatedBuildingElement = o.relatedBuildingElement.to_obj
if relatedBuildingElement
	puts "<b>RelatedBuildingElement:</b>" + relatedBuildingElement.name + '(' + relatedBuildingElement.globalId + ")<br>"
end
puts "<b>PhysicalOrVirtualBoundary:</b>"  + o.physicalOrVirtualBoundary + "<br>"
puts "<b>InternalOrExternalBoundary:</b>" + o.internalOrExternalBoundary + "</td>"
puts "<td align='center'>"
puts "</td></tr>"
}
puts "</table>"
=begin
if o.connectionGeometry.to_obj
	puts o.connectionGeometry.to_obj.class.to_s + "<br>"
	if o.connectionGeometry.to_obj.class.to_s == "IFCCONNECTIONSURFACEGEOMETRY"
	        if   o.connectionGeometry.to_obj.surfaceOnRelatingElement.to_obj.class.to_s == "IFCCURVEBOUNDEDPLANE"
				puts  o.connectionGeometry.to_obj.surfaceOnRelatingElement.to_obj.outerBoundary.to_obj.class.to_s + "<br>"
				if  o.connectionGeometry.to_obj.surfaceOnRelatingElement.to_obj.outerBoundary.to_obj.class.to_s == "IFCCOMPOSITECURVE"
				o.connectionGeometry.to_obj.surfaceOnRelatingElement.to_obj.outerBoundary.to_obj.segments.toIfcObject.each { |k,v|
				#puts "<br>Area:" + v.parentCurve.to_obj.area.to_s + "<br>" if  v.parentCurve.to_obj.respond_to?('area') 
				puts v.parentCurve.to_obj.svg(50) if v.parentCurve.to_obj.respond_to?('svg')						
				}
				end
				#puts o.connectionGeometry.to_obj.surfaceOnRelatingElement.to_obj.innerBoundaries.to_obj.svg 		
			end
	end
end
*/
=end