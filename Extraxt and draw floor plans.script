# This script extratcs the 2D plan of each floor and draw it as SVG graphic
# rooms get at moment random colors and the name of room shows as a tooltip 
# It works only when the space footprint is modelled as polyline or prametric profile

# Author: Ali Ismail
# Date: 01.02.2014
use "A-PorterRoad.ifc"
IFCRELAGGREGATES.where("o.relatingObject.to_obj.class == IFCBUILDINGSTOREY","o").each { |relation|
  building_storey=relation.relatingObject.to_obj
  HTML.h2 building_storey.name.gsub("'","")
  space_svg = []
  xx=[]
  yy=[]
  relation.relatedObjects.toIfcObject.each { |k,space|
    next if space.class != IFCSPACE
    space.representation.to_obj.representations.toIfcObject.values.each { |space_geometry|
      space_geometry.items.toIfcObject.values.each { |item|
        $svg_style =" style='stroke:black;stroke-width:25;fill:" + HTML.random_color + ";opacity:0.75' "
        x=space.objectPlacement.to_obj.x
        y=space.objectPlacement.to_obj.y
        xx << x
        yy << y
        t = "transform='translate(" + x.to_s + "," + y.to_s + ") '"
        space_svg << item.svg(0.05,t).sub("</g>","<title>" + space.longName.gsub("'","") + "</title></g>")}
    }
  }
  puts "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='" + xx.min.to_s + " " + yy.min.to_s  + " " +  (xx.max-xx.min).to_s + " " + (yy.max-yy.min).to_s + "'>"
  puts space_svg.join
  puts "</svg>"
}