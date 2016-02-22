require('NSBundle,NSURL,NSData,NSJSONSerialization,NSFileManager,NSMutableDictionary');
var filePath = NSBundle.mainBundle().bundlePath().stringByAppendingPathComponent("statis.json");
var fileerr;

var url = NSURL.fileURLWithPath(filePath);
console.log(url)
var data = NSData.alloc().initWithContentsOfURL(url);


var dic = NSJSONSerialization.JSONObjectWithData_options_error(data, 1,null);

console.log(dic)

var fileManager = NSFileManager.defaultManager();

var dictemp = NSMutableDictionary.dictionaryWithDictionary(dic);

dictemp.setValue_forKey(["CF00400", "111", "左侧设置"], "C");

data = NSJSONSerialization.dataWithJSONObject_options_error(dictemp, 0, null);

fileManager.createFileAtPath_contents_attributes(filePath, data, null);

data = NSData.alloc().initWithContentsOfURL(url);
dic = NSJSONSerialization.JSONObjectWithData_options_error(data, 1, null);
console.log(dic)
