# -*- coding: utf-8 -*-
{
	"name": "collapse_image_snippet",
	"summary": "Visualiza un despegable y una imagen al lado",
	"description": "Añade un bloque donde podras poner un despegable y una imagen que cambia en automatico",
	"author": "Andrea Cattalani",
	"website": "https://deop.es",
	"version": "0.1",
	"depends": ["base","website"],
	"data": ['views/snippets/collapse_image.xml'
	],
"assets": {
		'web.assets_frontend': [
			'collapse_image_snippet/static/src/js/collapse_image.js',
            'collapse_image_snippet/static/src/css/collapse-image.css',
		]
	}
}
