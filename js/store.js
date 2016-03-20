

window.SaveItem =function Saveitem(value){
  
  
  var items=CollectItems(value);
  var jsonString=JSON.stringify(items);
  chrome.storage.local.set({"db":jsonString},function(){
    console.log("Saved");
  });
  };
  
window.GetItem=function Getitm(){
  chrome.storage.local.get(["db"],function(StoredValue){
    var items=JSON.parse(StoredValue.db);
    console.log("Saved value " + items);
    console.log(items);
    for(var it in items)
    {
         apendItem(items[it]);
         console.log(items[it]);
         
         
    }
  });
  
};

 window.CollectItems = function CollItem(value){
  var items={};
 
   $(''+value+'').each(function(i,mitem){
   var item={};
    console.log(i, mitem);
    if($(mitem).hasClass("makeComplete"))
    {
      item.status=true;
    }
    else
    {
      item.status=false;
    }
  item.value=$(mitem).text();
 items[i]=item;
  
 });
  return items;
};

window.showItems = function showItms(){
   var itms= GetItem();
   console.log("values"+ itms);
    for(var itm in itms)
    {
         apendItem(itm);
         console.log(itm);
    }
};