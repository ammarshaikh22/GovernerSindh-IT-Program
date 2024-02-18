//================
//Question : 2
//================
// let message:string = "Hello Eric, would you like to learn some Python today?"
// console.log(message)
function createCar(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional information
    additionalInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar("Toyota", "Camry", "color", "red", "year", 2022);
console.log(myCar);
