# Mapping the concepts related to the class IfcTask in IFC4 specifications  into "Job" table in COBie V2.4
# according to the Facility Management Handover Model View Definition by Bill East and Tim Chipman
# http://www.buildingsmartalliance.org/docs/BSADOC_COBIE/index.htm , Issued  2012-06-01
# (licensed under the Creative Commons Attribution-NoDerivs 3.0 Unported License)
# http://creativecommons.org/licenses/by-nd/3.0/


# Ver1: 23.06.2012

use "COBie-UK-2012-example1.ifc"
jobs={}
HTML.h2 "Jobs"
HTML.tableHeader "Name","CreatedBy","CreatedOn","Category","Status","TypeName","Description","Duration","Start","ExtIdentifier","TaskNumber","Priors","ResourceNames","Frequency","FrequencyUnit"
IFCTASK.where("all","o").each { |o|

#1: Job.Name=IfcTask.Name
jobs['Name'] = o.name.gsub("'","")

#2: Job.CreatedBy=IfcTask.OwnerHistory.OwningUser.ThePerson.Identification
jobs['CreatedBy'] = o.ownerHistory.to_obj.owningUser.to_obj.thePerson.to_obj.id.gsub("'","")

#3: Job.CreatedOn=IfcTask.OwnerHistory.CreationDate
jobs['CreatedOn']=  Time.at(o.ownerHistory.to_obj.creationDate.to_i)

#4: Job.Category=IfcTask.HasAssociations[*]\IfcRelAssociatesClassification.RelatingClassification\IfcClassificationReference.Identification
jobs['Category']=""
IFCRELASSOCIATESCLASSIFICATION.where("all","o").each { |relAssObj|
if relAssObj.relatedObjects.to_s.sub("(","").sub(")","").split('#').include?(o.line_id.to_s)
	relatingClassification= relAssObj.relatingClassification.to_obj
	jobs['Category'] = relatingClassification.itemReference.gsub("'","") if relatingClassification.class == IFCCLASSIFICATIONREFERENCE
end}

#5: Job.Status=IfcTask.Status
jobs['Status'] = o.status.gsub("'","")

#6: Job.TypeName=IfcTask.HasAssignments[*]\IfcRelAssignsToProduct.RelatingProduct
jobs['TypeName'] =""
IFCRELASSIGNSTOPRODUCT.where("all","o").each { |relAssObj|
if relAssObj.relatedObjects.to_s.sub("(","").sub(")","").split('#').include?(o.line_id.to_s)
	relProduct =relAssObj.relatingProduct.to_obj
	jobs['TypeName'] =relatingClassification=relProduct.class.to_s + ":" + relProduct.name + "(" + relProduct.globalId + ")"
end}

#7: Job.Description=IfcTask.Description
jobs['Description'] = o.description.gsub("'","")

#8: Job.Duration=IfcTask.TaskTime\ =IfcTaskTimeRecurring.ScheduleDuration
jobs['Duration'] = ""
jobs['Duration'] = o.taskTime.to_obj.scheduleDuration if o.respond_to?('taskTime')

#9: Job.Start=IfcTask.TaskTime\ =IfcTaskTimeRecurring.ScheduleStart
jobs['Start'] =""
jobs['Start'] = o.taskTime.to_obj.scheduleStart if o.respond_to?('taskTime')

#10: Job.ExtSystem=IfcTask.OwnerHistory.OwningApplication.ApplicationIdentifier
#11: Job.ExtObject=IfcTask\

#12: Job.ExtIdentifier=IfcTask.GlobalId
jobs['ExtIdentifier'] = o.globalId.gsub("'","")

#13: Job.TaskNumber=IfcTask.Identification
jobs['TaskNumber'] = o.taskId.gsub("'","")

#14: Job.Priors=IfcTask.IsSuccessorTo[*].RelatedObject
jobs['Priors'] =""
IFCRELSEQUENCE.where("all","o").each { |relProc|
if relProc.relatedProcess.to_s.sub("(","").sub(")","").split('#').include?(o.line_id.to_s)
	relatingProcess = relProc.relatingProcess.to_obj
	jobs['Priors'] *= relatingProcess.class.to_s + ":" + relatingProcess.name + "(" + relatingProcess.globalId + ")<br>"
end
}

#15: Job.ResourceNames=IfcTask.OperatesOn[*]\IfcRelAssignsToProcess.RelatedObjects[*]
jobs['ResourceNames']= ""
IFCRELASSIGNSTOPROCESS.where("all","o").each { |relAssObj|
if relAssObj.relatingProcess.to_s.sub("(","").sub(")","").split('#').include?(o.line_id.to_s)
	relAssObj.relatedObjects.toIfcObject.each { |k1,v1|
	jobs['ResourceNames'] += v1.class.to_s + ":" + v1.name + "(" + v1.globalId + ")"
	}
end
}

#16: Job.Frequency=IfcTask.TaskTime\ =IfcTaskTimeRecurring.Recurrence\IfcRecurrencePattern.Interval
#17: Job.FrequencyUnit=IfcTask.TaskTime\ =IfcTaskTimeRecurring.Recurrence\IfcRecurrencePattern.RecurrenceType
jobs['Frequency']= ""
jobs['FrequencyUnit']= ""
if o.respond_to?('taskTime') and  o.taskTime.to_obj.class == IFCTASKTIMERECURRING
  jobs['Frequency']= o.taskTime.to_obj.recurrence.to_obj.interval
  jobs['FrequencyUnit']=o.taskTime.to_obj.recurrence.to_obj.recurrenceType
end

puts HTML.arr_to_row jobs.values
}
puts "</table>"