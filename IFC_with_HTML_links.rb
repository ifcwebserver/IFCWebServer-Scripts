use  "AC10-Institute-Var-1.ifc"
res={}
$hash.each { |k,v|
data=v.sub(k,"")
ids=data.scan(/(\#\d*)/).flatten.compact.uniq
ids.each {|id|
data.gsub!(id,"<a href=\"#" + id + "\">" + id + "</a>")
}
cls = v.scan(/\IFC[A-Z0-9]*/).join.gsub(" ","")
res[cls]=[] if res[cls]== nil
res[cls] << "<a name='" + k + "' >" + k + "</a>" + data.sub(cls,$ifcClassesNames[cls.upcase].to_s) + "</br>" 
}
res.keys.sort.each { |k|
res[k].each { |v|
puts v
}
}