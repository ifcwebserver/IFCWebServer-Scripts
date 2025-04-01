#script ID: Meta_64213212332156859
$default_schema="IFC2X3_TC1"
load_schema_and_extensions
use "Duplex_A_20110907_optimized.ifc"
load_ifc_classes "|IFCRELAGGREGATES|IFCRELCONTAINEDINSPATIALSTRUCTURE|IFCRELDECOMPOSES|"

module LOD_VA_to_IFC
  #Mapping the LOD attributes in the VA Object/Element Matrix to IFC schema
  def faciltyID;  evaluate self.containedInStructure['line_id'].to_obj.isDecomposedBy['line_id'].to_obj.name  end
  def facilityName; evaluate self.containedInStructure['line_id'].to_obj.isDecomposedBy['line_id'].to_obj.longName  end
  def facilityDescription;  evaluate self.containedInStructure['line_id'].to_obj.isDecomposedBy['line_id'].to_obj.description end
  def storyNumber; evaluate self.containedInStructure['line_id'].to_obj.name end  
  def floorID; evaluate self.containedInStructure['line_id'].to_obj.name end
  def floorName;  evaluate self.containedInStructure['line_id'].to_obj.longName end
  def floorDescription;  evaluate self.containedInStructure['line_id'].to_obj.description end
  def floorElevation; evaluate self.containedInStructure['line_id'].to_obj.elevation end
  def componentID;  evaluate self.tag end
  def componentName;  evaluate self.name end
  def componentDescription;   evaluate self.description end 
  def evaluate(value)    
    if value == nil or value.to_s == "$" or  value.to_s == ""  or  value.to_s == "''"      
      "<font color='red'>X</font>"
    else        
      return value 
   end
  end
end

class IFCELEMENT
 include LOD_VA_to_IFC
end

#Check the LOD of doors
HTML.h2 "LOD 100 - Conceptual"
IFCDOOR.list "globalId|faciltyID|facilityName|facilityDescription|overallWidth|overallHeight|OverallArea:area|PositionType:objectPlacement.to_obj.class"
HTML.h2 "LOD 200-Approximate Geometry"
IFCDOOR.list "globalId|storyNumber|floorID|floorName|floorDescription|floorElevation|Type:objectType"
HTML.h2 "LOD 300-Precise Geometry"
IFCDOOR.list "globalId|Type:objectType|componentID|componentName|componentDescription"