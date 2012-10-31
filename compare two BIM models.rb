use "AC10-Institute-Var-1.ifc"
bim1_walls=IFCWALLSTANDARDCASE.where("all","[o.globalId,o.name]") 
bim1_zones=IFCZONE.where("all","[o.globalId,o.name]") 
use "AC11-Institute-Var-2-IFC.ifc"
bim2_walls=IFCWALLSTANDARDCASE.where("all","[o.globalId,o.name]")
bim2_zones=IFCZONE.where("all","[o.globalId,o.name]") 
puts "<img src='cache/user1/AC10-Institute-Var-1.ifc.png' width='180' height='135'>"
puts "<img src='cache/user1/AC11-Institute-Var-2-IFC.ifc.png' width='180' height='135'>"
HTML.h2 "Walls difference"
HTML.tableHeader "ID","Wall GUID","Wall name"
((bim2_walls - bim1_walls) + (bim1_walls - bim2_walls)).each_with_index { |w,i|
HTML.arr_to_row [i+1] + w }
puts "</table>"
HTML.h2 "Zones difference"
HTML.tableHeader "ID","Zone GUID","Zone name"
((bim2_zones - bim1_zones) + (bim1_zones - bim2_zones)).each_with_index { |w,i|
HTML.arr_to_row [i+1] + w }
puts "</table>"