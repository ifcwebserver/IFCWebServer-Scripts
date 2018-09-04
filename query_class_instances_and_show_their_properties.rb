#Query the instances of certain class and show their properties
#script parameters: 
#   $bim: the name of the BIM model file 
#   $cls: the class name of the element which we are intersted in
puts $jquery
$bim = "TestModel.ifc"
$cls=IFCELEMENT
use $bim
res={}
IFCRELDEFINESBYPROPERTIES.where("o.relatedObjects.to_obj.is_a?(#$cls)","[o.relatedObjects.to_obj,o.relatingPropertyDefinition.to_obj]").each { |arr|
res[arr[0].class.to_s + ":" +arr[0].globalId] =[] if res[arr[0].class.to_s + ":" + arr[0].globalId] ==nil
res[arr[0].class.to_s + ":" +arr[0].globalId] << arr[1]
}
i=0
res.each { |k,v|
i +=1
HTML.h5  k.gsub("'","")
puts "<a href='sgl/?url=../temp/#$username/#$bim/dae/" + k.gsub("'","") + "'>
<img src='temp/#$username/#$bim/png/" + k.gsub("'","") + ".png' /></a>"
puts "<div style='width:50%' id='psets" + i.to_s + "'>"
v.each { |pset| 
 HTML.h3 pset.name.gsub("'","")
 puts "<div >" + pset.property_details + "</div>"}
puts "</div></br></br><hr>"
puts "<script>$(function() {$( '#psets" + i.to_s + "' ).accordion();});</ script>"
}