#doc:<div class='documentation'>This script shows how to calculate the sum of all windos area</div>
use '2x3_simplefied.ifc';
sumWindowsArea = IFCWINDOW.where("all","o.area").sum/(1000000)
puts "Number of window:" + IFCWINDOW.count.to_s + "<br>Total area is " + sumWindowsArea .to_s + "m<sup>2</sup>"