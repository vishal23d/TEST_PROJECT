/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of MFP
 * 
 * @author author name
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                mfp : {
                    width : 338.81787,
                    height : 369.92529,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : lon, "y" : lat};
                    },
                    'elems': {
                        "path3724" : "M -64.26,67.19 9.83,111.04 9.07,92.89 -36.29,66.43 l -3.02,-1.51 -3.02,-0.76 -8.32,-1.51 -1.51,-1.51 -6.8,-0.76 z",
                        "path3726" : "M 10.58,182.1 9.83,111.04 v 0 0 0 0 0 L 9.07,92.89 9.83,111.04 v 0 l 152.7,-6.8 -0.76,75.6 z",
                        "path3728" : "M 10.58,182.1 9.83,291.71 164.04,289.44 161.77,179.83 Z",
                        "path3730" : "M 141.36,54.34 72.57,55.1 71.82,46.02 74.08,32.42 138.34,31.66 Z",
                        "path3732" : "m 163.29,70.21 -1.51,109.61 23.43,0.76 -0.76,-111.88 10.58,-1.51 v -9.83 l -31.75,-1.51 z",
                        "path3734" : "m 225.27,163.95 h -40.82 l 0.76,16.63 40.07,-4.54 z",
                        "path3736" : "m 74.08,32.42 v 0 l 64.26,-0.76 v 0 h 61.23 L 202.6,-1.6 68.79,1.42 Z"
                    }
                }
            }
        }
    );

    return Mapael;

}));