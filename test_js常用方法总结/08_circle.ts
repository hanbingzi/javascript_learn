interface ServicesAccessor {
    get<T>(id: string): T;
}

interface ServiceIdentifier<T> {
    //-------------------这种写法是啥意思，表示啥
    (...args: any[]): void;

    type: T;
}

class SyncDescriptor<T> {
    readonly ctor: any;
    readonly staticArguments: any[];
    readonly supportsDelayedInstantiation: boolean;

    constructor(ctor: new (...args: any[]) => T, staticArguments: any[] = [], supportsDelayedInstantiation: boolean = false) {
        this.ctor = ctor;
        this.staticArguments = staticArguments;
        this.supportsDelayedInstantiation = supportsDelayedInstantiation;
    }
}

let t1 = {"ILogService": "ILogService------",};

class InstantiationService {
    private readonly _services: string[];

    constructor(services: string[] = []) {
        this._services = services;
    }

    invokeFunction<R, TS extends any[] = []>(fn: (accessor: ServicesAccessor, ...args: TS) => R, ...args: TS): R {
        const accessor: ServicesAccessor = {
            get: <T>(id: string) => {
                console.log("get------")
                return t1[id];
            }
        };
        let result = fn(accessor, ...args)
        return result;
    }

    createInstance(ctorOrDescriptor: any | SyncDescriptor<any>, ...rest: any[]) {
        let result: any = {"a": "a"};

        return result;
    }

    // private _getOrCreateServiceInstance<T>(id: ServiceIdentifier<T>, _trace: Trace): T {
    //     let thing = this._getServiceInstanceOrDescriptor(id);
    //     if (thing instanceof SyncDescriptor) {
    //         return this._safeCreateAndCacheServiceInstance(id, thing, _trace.branch(id, true));
    //     } else {
    //         _trace.branch(id, false);
    //         return thing;
    //     }
    // }
    //
    // private _getServiceInstanceOrDescriptor<T>(id: ServiceIdentifier<T>): T | SyncDescriptor<T> {
    //     let instanceOrDesc = this._services.get(id);
    //     if (!instanceOrDesc && this._parent) {
    //         return this._parent._getServiceInstanceOrDescriptor(id);
    //     } else {
    //         return instanceOrDesc;
    //     }
    // }
}


let instantiationService = new InstantiationService();

const result = instantiationService.invokeFunction(async (accessor,...args) => {
    const logService = accessor.get("ILogService");
    console.log("accessor:", logService);
    console.log(args[1])
    return "startup----";
    // return instantiationService.createInstance().startup();
},"a","b");

console.log("result:", result)
