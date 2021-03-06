var WebSocketRpc = require("./WebSocketRpc");
var GrapheneApi = require("./GrapheneApi");

var Apis = (function () {

    var apis_instance;
    var ws_rpc;
    var db_api;
    var network_api;
    var history_api;
    var indexedDB;
    
    function init() {
        //console.log("[ApiInstances.js] ----- init ----->");
        ws_rpc = new WebSocketRpc("ws://localhost:8090");
        var init_promise = ws_rpc.login("", "").then(() => {
            db_api = new GrapheneApi(ws_rpc, "database");
            network_api = new GrapheneApi(ws_rpc, "network");
            history_api = new GrapheneApi(ws_rpc, "history");
            return Promise.all([db_api.init(), network_api.init(), history_api.init()]);
        });
        return {
            init_promise: init_promise,
            close: function () {
                ws_rpc.close();
                apis_instance = null;
            },
            db_api: function () {
                return db_api;
            },
            network_api: function () {
                return network_api;
            },
            history_api: function () {
                return history_api;
            }
        };
    }

    return {
        instance: function () {
            if ( !apis_instance ) {
                apis_instance = init();
            }
            return apis_instance;
        }
    };

})();

module.exports = Apis;
