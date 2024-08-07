"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[627],{26673:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new RemoteSignal object.","params":[{"name":"From","desc":"The SignalListener to hook.","lua_type":"SignalListener"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"static","private":true,"source":{"line":120,"path":"src/Internals/RemoteSignal.luau"}},{"name":"Fire","desc":"Fires to the specified client, from the server.\\n\\n:::caution\\n\\nThe first argument of `Fire` must be a [Player].\\n\\n:::\\n\\n\\t","params":[{"name":"Client","desc":"","lua_type":"Player"},{"name":"...","desc":"The arguments to send over this RemoteSignal.","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":141,"path":"src/Internals/RemoteSignal.luau"}},{"name":"FireAll","desc":"Fires to all clients in the game.\\n\\n\\t","params":[{"name":"...","desc":"","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":151,"path":"src/Internals/RemoteSignal.luau"}},{"name":"FireFor","desc":"Fires to all clients specified in `For`.\\n\\n\\t","params":[{"name":"For","desc":"","lua_type":"{ Player }"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":161,"path":"src/Internals/RemoteSignal.luau"}},{"name":"FireExcept","desc":"Fires to all clients in the game, except for the clients specified.\\n\\n\\t","params":[{"name":"Excluding","desc":"","lua_type":"{ Player }"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":173,"path":"src/Internals/RemoteSignal.luau"}},{"name":"FireFilter","desc":"Fires to all clients in the game, using a filter to specify which clients receive the event.\\n\\n\\t","params":[{"name":"Filter","desc":"","lua_type":"(Client: Player, ...any) -> boolean"},{"name":"...","desc":"","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":187,"path":"src/Internals/RemoteSignal.luau"}},{"name":"Fire","desc":"Fires to the server, from the client.\\n\\n\\t","params":[{"name":"...","desc":"The arguments to send over this RemoteSignal.","lua_type":"...any"}],"returns":[],"function_type":"method","realm":["Client"],"source":{"line":204,"path":"src/Internals/RemoteSignal.luau"}},{"name":"Connect","desc":"Connects `Callback` to this signal.\\n\\nExecutes when a client fires this signal to the server, or vice versa.","params":[{"name":"Callback","desc":"The function to connect.","lua_type":"RemoteConnectionCallback"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"method","source":{"line":216,"path":"src/Internals/RemoteSignal.luau"}},{"name":"ConnectParallel","desc":"Connects `Callback` to this signal in parallel. Useful with Parallel Luau.\\n\\nExecutes when a client fires this signal to the server, or vice versa.","params":[{"name":"Callback","desc":"The function to connect.","lua_type":"RemoteConnectionCallback"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"method","source":{"line":227,"path":"src/Internals/RemoteSignal.luau"}},{"name":"Once","desc":"Connects `Callback` to this signal, disconnecting it once the signal has fired once.","params":[{"name":"Callback","desc":"The function to connect.","lua_type":"RemoteConnectionCallback"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"method","source":{"line":236,"path":"src/Internals/RemoteSignal.luau"}},{"name":"Wait","desc":"Waits for the event to fire before resuming the current thread.","params":[],"returns":[{"desc":"All of the data that the signal returned from one event.","lua_type":"...any"}],"function_type":"method","yields":true,"source":{"line":245,"path":"src/Internals/RemoteSignal.luau"}}],"properties":[{"name":"Unreliable","desc":"Determines whether the RemoteSignal is unreliable or not.","lua_type":"boolean","readonly":true,"source":{"line":103,"path":"src/Internals/RemoteSignal.luau"}}],"types":[{"name":"RemoteConnectionCallback","desc":"","lua_type":"(...any) -> () | (Client: Player, ...any)","source":{"line":79,"path":"src/Internals/RemoteSignal.luau"}},{"name":"SignalListener","desc":"","lua_type":"Instance & { OnServerEvent: RBXScriptSignal<(Player, ...any)>, OnClientEvent: RBXScriptSignal<...any>, FireClient: (Client: Player, ...any) -> (), FireAllClients: (...any) -> (), FireServer: (...any) -> () }","private":true,"source":{"line":86,"path":"src/Internals/RemoteSignal.luau"}}],"name":"RemoteSignal","desc":"Weaver\'s built-in implementation for RemoteEvents.\\n\\nThis is an interface meant to make using RemoteEvents much easier, with functions identical to [Signal].","source":{"line":10,"path":"src/Internals/RemoteSignal.luau"}}')}}]);