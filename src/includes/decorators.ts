export function frozen(target: Function) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}

export function required(target: any, key: string) {
    let currentValue = target[key];

    Object.defineProperty(target, key, {
        set: (newValue: string) => {
            if (!newValue) {
                throw new Error(`${key} is required.`);
            }
            currentValue = newValue;
        },
        get: () => currentValue,
    });
}

export function enumerable(isEnumerable: boolean) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = isEnumerable;
        console.log(
            "The enumerable property of this member is set to: " +
            descriptor.enumerable,
        );
    };
}

export function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalDef = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
        return originalDef.apply(this, args);
    };
    return descriptor;
}