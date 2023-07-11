var compose = function(functions) {
	return function(x) {
        let a = x;
        for(let i = functions.length - 1;i >= 0; i--) {
            const result = functions[i](a);
            a = result;
        }
        return a;
    }
};
