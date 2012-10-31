#doc:<div class='documentation'>This script shows how to get a formated XML list for names and globalIds of all slabs inside an IFC model</div>
read_ifc_file "2x3_simplefied.ifc"
$output_format="to_xml"
load_ifc_classes "|IFCSLAB|",false
puts "hmmm..it seems that we have " + IFCSLAB.count.to_s + " slabs"
puts "<script type='syntaxhighlighter' class='brush: xml'><![CDATA["
IFCSLAB.list "name|globalId"
puts "</ script>"