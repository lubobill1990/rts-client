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
        pagination:'lib/jquery.pagination',
        "rts.util":'rts/util',
        cssrefresh:'lib/cssrefresh',
        charcounter:'lib/jquery.charcounter',
        atwho:'lib/jquery.atwho',
        caret:'lib/jquery.caret',
        json2:'lib/json2',
        form:'lib/jquery.form',
        xdm:'lib/easyXDM',
        resize:'lib/jquery.resize'
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
            deps:['jquery', 'rts', 'jSmart', 'rts.util', 'tinyscrollbar']
        },
        rts:{
            deps:['jquery', "engine.io"]
        },
        tinyscrollbar:{
            deps:['jquery']
        },
        pagination:{
            deps:['jquery']
        },
        caret:{
            deps:['jquery']
        },
        atwho:{
            deps:['jquery','caret']
        },
        "feedback/comment":{
            deps:['jquery']
        },
        form:{
            deps:['jquery']
        },
        resize:{
            deps:['jquery']
        }
    }
});
require(['jquery'],
    function () {
        (function ($) {
            var class_methods = {
                pagination:function (element, total_count, items_per_page, pageSelectCallback, opts) {
                    require(['pagination'], function () {
                        var jump = true;
                        if (opts != undefined && opts['load_first_page'] == undefined) {
                            opts['load_first_page'] = false;
                        }
                        if (opts != undefined && opts['link_to'] == undefined) {
                            jump = false;
                        }
                        $(element).pagination(total_count, $.extend({
                            num_edge_entries:2,
                            num_display_entries:6,
                            callback:function (index, js) {
                                var ret = pageSelectCallback(index, js);
                                if (ret && jump) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            items_per_page:items_per_page,
                            prev_text:'&lt;前页',
                            next_text:'后页&gt;',
                            load_first_page:false
                        }, opts));
                    })
                }
            }
            var methods = {
                pagination:function (total_count, items_per_page, pageSelectCallback, opts) {
                    return $.WJ('pagination', $(this), total_count, items_per_page, pageSelectCallback, opts);
                }
            }
            $.WJ = function (method) {
                if (class_methods[method]) {
                    return class_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method) {
                    return class_methods.init.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.WJ');
                }
            };
            $.fn.WJ = function (method) {
                if (methods[method]) {
                    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
                } else if (typeof method === 'object' || !method) {
                    return methods.init.apply(this, arguments);
                } else {
                    $.error('Method ' + method + ' does not exist on jQuery.fn.WJ');
                }
            }

        })(jQuery);

    }
)
