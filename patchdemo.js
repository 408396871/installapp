require('NSBundle,NSURL,NSData,NSJSONSerialization,NSFileManager');
var filePath = NSBundle.mainBundle().bundlePath().stringByAppendingPathComponent("statis.json");
var fileerr;

var url = NSURL.fileURLWithPath(filePath);
console.log(url)
var data = NSData.alloc().initWithContentsOfURL(url);
console.log(data)

var dic = NSJSONSerialization.JSONObjectWithData_options_error(data, 1,null);

console.log(dic)

var fileManager = NSFileManager.defaultManager();
var script = "{\"C\": [\"CF00400\", \"11\", \"左侧设置\"]}";
fileManager.createFileAtPath_contents_attributes(filePath, script, null);

data = NSData.alloc().initWithContentsOfURL(url);
dic = NSJSONSerialization.JSONObjectWithData_options_error(data, 1, null);
console.log(dic)
