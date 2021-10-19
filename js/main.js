//Домашняя работа 05 Обьекты
//Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата".
// Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата". 
//Создать методы для заполнения и отображения документа.
var doc = {
    header: new String(),
    body:new String(),
    footer:new String(),
    data:new String(),
    app: {
        header:{  },
        body:{},
        footer:{},
        data:{}
    },
}
doc.filling = function(){
    this.header = prompt("введите Заголовок");
    this.body = prompt("введите тело документа");
    this.footer = prompt("введите футер");
    this.data = prompt("введите Дату");
    for(var element in doc ){
        if(typeof doc[element] == 'string' ){
        document.write("<p>" + doc[element]);
    }
}

}
doc.filling();

