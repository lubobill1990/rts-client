/**
 * Created with JetBrains PhpStorm.
 * User: bolu
 * Date: 13-5-4
 * Time: PM4:20
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl:'/javascripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths:{
        app:'app',
        jquery:'lib/jquery.1.9.1',
        underscore:'lib/underscore.1.4.4',
        backbone:'lib/backbone.1.0.0',
        webim:'rts/webim',
        rts:'rts/main',
        "engine.io":'lib/engine.io',
        tinyscrollbar:'lib/jquery.tinyscrollbar.1.81',
        jSmart:'lib/smart-2.9.min',
        pagination:'lib/jquery.pagination.js',
        "rts.util":'rts/util',
        cssrefresh:'lib/cssrefresh',
        charcounter:'lib/jquery.charcounter'
    },
    shim:{
        backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        webim:{
            deps:['jquery','rts','jSmart','rts.util','tinyscrollbar']
        },
        rts:{
            deps:['jquery',"engine.io"]
        },
        tinyscrollbar:{
            deps:['jquery']
        },
        pagination:{
            deps:['jquery']
        }
    }
});
