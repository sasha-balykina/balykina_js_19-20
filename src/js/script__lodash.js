
$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',function(data){
    console.log('Skills:',_.uniq(_.flattenDeep(_.map(data,'skills'))).sort());
    console.log('People:',_.map(_.sortBy(data, function (obj){ 
        return obj.friends.length;
    }), 'name'));
    console.log('Friends:',_.uniq(_.map(_.flattenDeep(_.map(data,'friends')),'name')));
});