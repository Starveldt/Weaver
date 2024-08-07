"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[680],{89039:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new RemoteProperty object.","params":[{"name":"From","desc":"The RemoteEvent to hook.","lua_type":"RemoteEvent"},{"name":"Default","desc":"The default value of the RemoteProperty.","lua_type":"any?"}],"returns":[{"desc":"","lua_type":"RemoteProperty"}],"function_type":"static","private":true,"source":{"line":133,"path":"src/Internals/RemoteProperty.luau"}},{"name":"Set","desc":"Sets the default value of the RemoteProperty, clearing all clients\' custom values.\\n\\n\\t","params":[{"name":"Default","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":190,"path":"src/Internals/RemoteProperty.luau"}},{"name":"SetDefault","desc":"Sets the default value of the RemoteProperty without clearing all clients\' custom values.\\n\\n\\t","params":[{"name":"Default","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":205,"path":"src/Internals/RemoteProperty.luau"}},{"name":"SetFor","desc":"Sets the value of this RemoteProperty for a specific client.\\n\\n\\t","params":[{"name":"For","desc":"","lua_type":"Player"},{"name":"Value","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":223,"path":"src/Internals/RemoteProperty.luau"}},{"name":"SetForEach","desc":"Sets the value of this RemoteProperty for the clients specified.\\n\\n\\t","params":[{"name":"For","desc":"","lua_type":"{ Player }"},{"name":"Value","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":240,"path":"src/Internals/RemoteProperty.luau"}},{"name":"SetExcept","desc":"Sets the value of this RemoteProperty for all clients in the game, except for the clients specified.\\n\\n\\t","params":[{"name":"Excluding","desc":"","lua_type":"{ Player }"},{"name":"Value","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":250,"path":"src/Internals/RemoteProperty.luau"}},{"name":"SetFilter","desc":"Sets the value of this RemoteProparty for all clients in the game, using a filter to specify which clients have their values set.\\n\\n\\t","params":[{"name":"Filter","desc":"","lua_type":"(Client: Player, Value: any?) -> boolean"},{"name":"Value","desc":"","lua_type":"any?"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":262,"path":"src/Internals/RemoteProperty.luau"}},{"name":"Clear","desc":"Clears all clients\' custom values.\\n\\n\\t","params":[],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":277,"path":"src/Internals/RemoteProperty.luau"}},{"name":"ClearFor","desc":"Clears the value set for a specific client.\\n\\n\\t","params":[{"name":"For","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":285,"path":"src/Internals/RemoteProperty.luau"}},{"name":"ClearForEach","desc":"Clears the values set for the clients specified.\\n\\n\\t","params":[{"name":"For","desc":"","lua_type":"{ Player }"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":301,"path":"src/Internals/RemoteProperty.luau"}},{"name":"ClearExcept","desc":"Clears the value of all clients in the game, except for the clients specified.\\n\\n\\t","params":[{"name":"Excluding","desc":"","lua_type":"{ Player }"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":311,"path":"src/Internals/RemoteProperty.luau"}},{"name":"ClearFilter","desc":"Clears the value of all clients in the game, using a filter to specify which clients receive the event.\\n\\n\\t","params":[{"name":"Filter","desc":"","lua_type":"(Client: Player) -> boolean"}],"returns":[],"function_type":"method","realm":["Server"],"source":{"line":323,"path":"src/Internals/RemoteProperty.luau"}},{"name":"Get","desc":"Gets the current value of the RemoteProperty.\\n\\n\\t","params":[],"returns":[{"desc":"","lua_type":"any?\\n"}],"function_type":"method","realm":["Server"],"source":{"line":338,"path":"src/Internals/RemoteProperty.luau"}},{"name":"GetFor","desc":"Gets the current value of the RemoteProperty for `Client`.\\n\\n\\t","params":[{"name":"Client","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"any?\\n"}],"function_type":"method","realm":["Server"],"source":{"line":346,"path":"src/Internals/RemoteProperty.luau"}},{"name":"Get","desc":"Gets the current value of the RemoteProperty.\\n\\n:::caution Yielding\\n\\nThis function will yield when you first call `:Get()` if the server has not sent a Changed event at least once. If this is an issue that worries you, try calling `:Get()` once in [`WeaverController:WeaverInit()`](WeaverClient#WeaverController) so that the value is guaranteed to exist.\\n\\n:::\\n\\n\\t","params":[],"returns":[{"desc":"","lua_type":"any?\\n"}],"function_type":"method","realm":["Client"],"yields":true,"source":{"line":363,"path":"src/Internals/RemoteProperty.luau"}}],"properties":[{"name":"Changed","desc":"Fires when the RemoteProperty\'s value has changed. Note that this won\'t fire if the value that the server sets is the same as your currently registered value.","lua_type":"Signal","realm":["Client"],"source":{"line":105,"path":"src/Internals/RemoteProperty.luau"}}],"types":[{"name":"RemoteConnectionCallback","desc":"","lua_type":"(...any) -> () | (Client: Player, ...any)","source":{"line":96,"path":"src/Internals/RemoteProperty.luau"}}],"name":"RemoteProperty","desc":"Weaver\'s implementation of Knit\'s [RemoteProperties](https://sleitnick.github.io/RbxUtil/api/RemoteProperty/).\\n\\nInternally, these are simply RemoteEvents which can store different values for clients.","source":{"line":10,"path":"src/Internals/RemoteProperty.luau"}}')}}]);