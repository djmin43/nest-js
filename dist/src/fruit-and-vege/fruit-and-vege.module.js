"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitAndVegeModule = void 0;
const common_1 = require("@nestjs/common");
const fruit_and_vege_controller_1 = require("./fruit-and-vege.controller");
let FruitAndVegeModule = class FruitAndVegeModule {
};
FruitAndVegeModule = __decorate([
    (0, common_1.Module)({
        controllers: [fruit_and_vege_controller_1.FruitAndVegeController]
    })
], FruitAndVegeModule);
exports.FruitAndVegeModule = FruitAndVegeModule;
//# sourceMappingURL=fruit-and-vege.module.js.map