require('NSBundle,NSURL,NSData,NSJSONSerialization,NSFileManager');
var filePath = NSBundle.mainBundle().bundlePath().stringByAppendingPathComponent("statis.json()");
var fileerr;

var url = NSURL.fileURLWithPath(filePath);
var data = NSData.alloc().initWithContentsOfURL(url);
var dic = NSJSONSerialization.JSONObjectWithData_options_error(data, NSJSONReadingMutableLeaves, & fileerr);
if (fileerr != null) {
    NSLog("URL路径文件获取失败--------:%", fileerr.userInfo());
    return null;
}


console.log(dic)

var fileManager = NSFileManager.defaultManager();
var script = "{\"C\": [\"CF00400\", \"11\", \"左侧设置\"]}";
fileManager.createFileAtPath_contents_attributes(filePath, script.dataUsingEncoding(NSUTF8StringEncoding), null);

data = NSData.alloc().initWithContentsOfURL(url);
dic = NSJSONSerialization.JSONObjectWithData_options_error(data, NSJSONReadingMutableLeaves, & fileerr);
console.log(dic)
