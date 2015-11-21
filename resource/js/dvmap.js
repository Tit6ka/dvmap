/*
    dvmap v0.1;
    creator - dvketdeat;
 */

var dvmap = {

    /*
        переменные
     */
    mapSize: [
        800,
        1600,
        3200,
        6400
    ],
    mapBlock: 0, mapBlockSize: 0, mapBlockImage: '.map-img', mapFullScreen: 0,
    controllers: 0, controllersNav: 0,
    head: $('head'), body: $('body'),

    /*
        методы
     */
    render: function(option) {
        if (dvmap.checkType(option, 'object')) {
            dvmap.mapBlock = $(option.mapBlock);            // блок карты
            dvmap.mapBlockSize = option.mapBlockSize;       // размер карты
            dvmap.mapFullScreen = option.mapFullScreen;     // режим фулскрина
        } else {
            dvmap.mapBlock = $('.map-block');               // блок карты по умолчанию
            dvmap.mapBlockSize = 800;                       // размер карты по умолчанию
            dvmap.mapFullScreen = false;                    // режим фулскрина по умолчанию
        }
        dvmap.renderMap();                                  // вызов метода создания карты
    },

    renderMap: function()
    {
        if (!dvmap.checkType(dvmap.mapBlockSize, 'number') /*&& !dvmap.checkType(dvmap.mapBlockSize, 'string')*/)
            dvmap.createError('Свойство mapBlockSize должно быть int');

        if (!dvmap.checkType(dvmap.mapFullScreen, 'boolean'))
            dvmap.createError('Свойство mapFullScreen должно быть bool');

        // добавляем блок изображения в блок карты
        dvmap.mapBlock.append('<div class="map-img"></div>');

        // добавляем стиль dvmap в заголовок
        dvmap.head.append('<link rel="stylesheet" type="text/css" href="http://194.58.120.21/dvmap/dvmap.css" >');

        if (dvmap.mapFullScreen === false) {
            // указываем размер блока карты
            dvmap.mapBlock.width(dvmap.mapBlockSize).height(dvmap.mapBlockSize);

            // указываем стиль для блока карты
            $(dvmap.mapBlockImage).css({
                'background': 'url("http://194.58.120.21/dvmap/map.jpg")',
                'background-size': 'cover',
                'overflow': 'hidden'
            }).width(dvmap.mapBlockSize).height(dvmap.mapBlockSize);
        } else {
            // указываем размер блока карты
            dvmap.mapBlock.width(dvmap.mapBlock.parent().width()).height(dvmap.mapBlock.parent().width()/2);

            // указываем стиль для блока карты
            $(dvmap.mapBlockImage).css({
                'background': 'url("http://194.58.120.21/dvmap/map.jpg")',
                'background-size': 'cover',
                'overflow': 'hidden',
                'margin': 'auto'
            }).width(dvmap.mapBlock.parent().width()).height(dvmap.mapBlock.parent().width());
        }
    },

    /*
        подручные
     */
    checkType: function(data, type)
    {
        if (typeof data == type)
            return true;
        else
            return false;
    },

    createError: function(text)
    {
        alert(text);
        throw new Error();
    }
};