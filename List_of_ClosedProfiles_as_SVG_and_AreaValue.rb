use "TrainingStructure_param.ifc" 
IFCARBITRARYCLOSEDPROFILEDEF.where("all","[o.to_svg,o.area,o.profileName]").each { |o| 
puts "<hr><object data='svg/user1/" + o[0] + "' type=\"image/svg+xml\"></object>"
puts "Profile Name:" + o[2]
puts "Area=" + o[1].to_s + "m<sup>2</sup>"
#TODO: deal with the case when (X,Y) coordinates have minus values : <g transform=(DX DY)> bla bla blo  </g>
}
