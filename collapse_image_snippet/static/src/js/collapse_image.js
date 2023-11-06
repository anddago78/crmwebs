odoo.define('collapse_image_snippet.collapse_image_snippet', function(require) {
'use strict';
var PublicWidget = require('web.public.widget');
var rpc = require('web.rpc');
var core = require('web.core');
var QWeb = core.qweb;
var _t = core._t;
var Dynamic = PublicWidget.Widget.extend({

selector: '.collapse_image',
     events: {
        'click .card': '_changeImageClick',
         'click #imagecollapse': '_imagepopup',
         'click .collapse-popup': '_close_popup'
    },

willStart: async function() {
                    var self = this;

        },

start: function() {
    this.$el.find('#imagecollapse').attr("src", this.$el.find('.images-de-cancelar:first').attr("src"));
    },
_changeImageClick: function(elem) {
        let imgurl = $(elem.currentTarget).find('img');
         this.$el.find('#imagecollapse').hide().attr("src",imgurl.attr("src")).fadeIn(500);
    },
_imagepopup: function(elem) {
      var src = $(elem.currentTarget).attr("src");
        $(".collapse-popup").fadeIn();
        $(".img-show img").attr("src", src);
    },
    _close_popup: function(elem) {
    $(".collapse-popup").fadeOut();
}
});
PublicWidget.registry.dynamic_snippet_estilos = Dynamic;
return Dynamic;
});